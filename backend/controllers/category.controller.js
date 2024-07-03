import CategoryModel from "./../models/category.model.js";

export const getCategoriesList = async (req, res) => {
	try {
		const categoriesList = await CategoryModel.find()
		console.log(categoriesList);
		res.status(200).json({
			categoriesList: categoriesList
		});
	} catch (error) {
		res.status(401).json({
			msg: "Acceso no autorizado",
			error: error.message
		});
	}
}

export const createCategory = async (req, res) => {
	try {
		const body = req.body;
		const existingCategory = await CategoryModel.findOne({ name: body.name });
		if (existingCategory) { //!ojo aqui
			return res.status(400).json({ msg: 'El nombre de categoria ya está en uso' });
		}
		const newCategory = new CategoryModel({
			...body,
		});
		await newCategory.validate();
		await newCategory.save();
		res.status(201).json({
			msg: "categoria creada",
		});
	} catch (error) {
		// El error 11000 en MongoDB se refiere a una violación de clave única (duplicate key error).
		if (error.code === 11000) {
			return res.status(400).json({ msg: 'Nombre de categoria ya registrado' });
		}
		res.status(500).json({
			msg: "No se pudo crear la categoria",
			error: error.message,
		});
	}
}