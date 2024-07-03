// import jwt from "jsonwebtoken";
import StoreModel from "../models/store.model.js";
// import bcrypt from 'bcrypt'

/**Traer la lista de todos los tiendas */
export const getStoresList = async (req, res) => {
	try {
		const storesList = await StoreModel.find().populate('User').populate('Category').populate('Product')

		res.status(200).json(storesList);
		// res.status(200).json({
		// 	storesList: storesList,
		// });
	} catch (error) {
		res.status(401).json({
			msg: "Acceso a tiendas no autorizado",
		});
	}
};

/** Crear un tienda */
export const createStore = async (req, res) => {
	try {
		const body = req.body;
		const existingStore = await StoreModel.findOne({ username: body.username });
		if (existingStore) {
			return res.status(400).json({ msg: 'El nombre de la tienda ya está en uso' });
		}

		const newStore = new StoreModel({
			...body,
		});

		await newStore.validate();
		await newStore.save();

		res.status(201).json({
			msg: "Tienda creado",
		});
	} catch (error) {
		if (error.code === 11000) {
			return res.status(400).json({ msg: 'Nombre de la tienda ya registrado. prueba con otro nombre' });
		}
		res.status(500).json({
			msg: "No se pudo crear la tienda",
			error: error.message,
		});
	}
};


/** Ver tienda By ID */
export const getStoreByID = async (req, res) => {
	try {
		const { id } = req.params
		const store = await StoreModel.findById(id).populate('User').populate('Category').populate('Product')
		res.status(200).json(store)
		// res.status(200).json({
		// 	store: store
		// })
	} catch (error) {
		res.status(404).json({
			msg: 'No se encontró la tienda'
		})
	}
}

export const updateStoreByID = async (req, res) => {
	try {
		const { id } = req.params
		const body = req.body
		await StoreModel.updateOne(
			{
				_id: id
			},
			{
				$set: body,
			}
		)
		res.status(200).json({
			msg: 'Tienda modificada con éxito'
		})
	} catch (error) {
		res.status(404).json({
			msg: 'No se pudo modificar la tienda'
		})
	}
}

export const deleteStore = async (req, res) => {
	try {
		const { id } = req.params
		await StoreModel.findByIdAndDelete(id)
		res.status(200).json({
			msg: 'Tienda eliminada con éxito'
		})
	} catch (error) {
		res.status(404).json({
			msg: 'No se pudo eliminar la tienda'
		})
	}
}