import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import bcrypt from 'bcrypt'

/**Traer la lista de todos los usuarios */
export const getUsersList = async (req, res) => {
	try {
		const usersList = await UserModel.find();
		res.status(200).json({
			usersList,
		});
	} catch (error) {
		res.status(401).json({
			msg: "Acceso a usuarios no autorizado",
		});
	}
};

/** Crear un usuario */
export const createUser = async (req, res) => {
	try {
		const body = req.body;
		const existingUser = await UserModel.findOne({ username: body.username });
		if (existingUser) {
			return res.status(400).json({ msg: 'El nombre de usuario ya está en uso' });
		}

		const passwordHash = await bcrypt.hash(body.password, 10);
		const newUser = new UserModel({
			...body,
			password: passwordHash,
		});

		await newUser.validate();
		await newUser.save();
		const userRegistered = {
			username: newUser.username,
			email: newUser.email,
			role: newUser.role,
			_id: newUser._id,
			createdAt: newUser.createdAt,
			updatedAt: newUser.updatedAt,
		}
		res.status(201).json(userRegistered);
		// res.status(201).json({
		// 	msg: "Usuario creado",
		// });
	} catch (error) {
		if (error.code === 11000) {
			return res.status(400).json({ msg: 'Nombre de usuario ya registrado' });
		}
		res.status(500).json({
			msg: "No se pudo crear el usuario",
			error: error.message,
		});
	}
};

/** Ver usuario By ID */
export const getUserByID = async (req, res) => {
	try {
		const { id } = req.params
		const user = await UserModel.findById(id)
		res.status(200).json(user)
		// res.status(200).json({
		// 	user,
		// })
	} catch (error) {
		res.status(404).json({
			msg: 'No se encontró el usuario'
		})
	}
}

export const updateUserByID = async (req, res) => {
	try {
		const { id } = req.params
		const body = req.body
		await UserModel.updateOne(
			{
				_id: id
			},
			{
				$set: body,
			}
		)
		const user = await UserModel.findById(id)
		res.status(200).json(user)
		// res.status(200).json({
		// 	msg: 'Usuario modificado con éxito'
		// })
	} catch (error) {
		res.status(404).json({
			msg: 'No se pudo modificar el usuario'
		})
	}
}

export const deleteUser = async (req, res) => {
	try {
		const { id } = req.params
		await UserModel.findByIdAndDelete(id)
		res.status(200).json({
			msg: 'Usuario eliminado con éxito'
		})
	} catch (error) {
		res.status(404).json({
			msg: 'No se pudo eliminar el usuario'
		})
	}
}

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await UserModel.findOne({ email });

		if (!user) {
			return res.status(404).json('Usuario no registrado');
		}

		const match = await bcrypt.compare(password, user.password);
		if (!match) {
			return res.status(401).json('Contraseña inválida');
		}

		const token = jwt.sign(
			{
				sub: user._id,
			},
			process.env.SECRET_KEY,
			{
				expiresIn: '1h'
			}
		)

		res.cookie('token', token, { httpOnly: true })
		// res.status(200).json(token);

		res.json({
			_id: user._id,
			username: user.username,
			email: user.email,
		});
		// res.status(200).json({
		// 	msg: 'Iniciado sesión',
		// 	token
		// });
	} catch (error) {
		res.status(500).json({
			msg: 'Ocurrió un error',
			error: error.message
		});
	}
}

export const logout = async (req, res) => {
	res.clearCookie('token')
	res.send(false)
}