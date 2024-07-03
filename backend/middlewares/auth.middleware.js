import 'dotenv/config';
import jwt from 'jsonwebtoken';
import UserModel from "../models/user.model.js";

/**
 * ? Verificación/autenticación de usuario logueado
 */
export const authUser = async (req, res, next) => {
	try {
		const token = req.cookies.token;
		if (!token) {
			return res.status(401).json({
				msg: 'No han iniciado sesión, no autorizado'
			});
		}

		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		const user = await UserModel.findById(decoded.sub, { password: 0 }); //! para que no devuelva la contraseña

		if (!user) {
			return res.status(404).json({
				msg: 'Usuario no encontrado'
			});
		}

		req.user = user; //? Asigna el usuario a req.user
		next();
	} catch (error) {
		if (error.name === "TokenExpiredError") {
			return res.status(401).json({
				msg: "Token expirado"
			});
		} else if (error.name === "JsonWebTokenError") {
			return res.status(401).json({
				msg: "Token inválido"
			});
		} else {
			console.error(error);
			return res.status(500).json({
				msg: "Error en la autenticación del token"
			});
		}
	}
};

export default authUser;
