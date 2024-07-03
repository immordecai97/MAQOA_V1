import ProductModel from "../models/product.model.js";

/**Traer la lista de todos los productos */
export const getProductsList = async (req, res) => {
	try {
		const productsList = await ProductModel.find().populate('categories')
		// .populate('createdBy')
		console.log(productsList);
		res.status(200).json(productsList);
		// res.status(200).json({
		// 	productsList,
		// });
	} catch (error) {
		res.status(401).json({
			msg: "Acceso no autorizado",
			error: error.message
		});
	}
};

/** Crear un producto */
export const createProduct = async (req, res) => {
	try {
		const body = req.body;
		const existingProduct = await ProductModel.findOne({ title: body.title });
		if (existingProduct) { //!ojo aqui
			return res.status(400).json({ msg: 'El nombre de producto ya está en uso' });
		}
		const newProduct = new ProductModel({
			...body,
		});
		await newProduct.validate();
		await newProduct.save();
		res.status(201).json({
			msg: "producto creado",
		});
	} catch (error) {
		// El error 11000 en MongoDB se refiere a una violación de clave única (duplicate key error).
		if (error.code === 11000) {
			return res.status(400).json({ msg: 'Nombre de producto ya registrado' });
		}
		res.status(500).json({
			msg: "No se pudo crear el producto",
			error: error.message,
		});
	}
};

/** Ver producto By ID */
export const getProductByID = async (req, res) => {
	try {
		const { id } = req.params
		const product = await ProductModel.findById(id).populate('categories').populate('createdBy')
		res.status(200).json(product)
		// res.status(200).json({
		// 	product
		// })
	} catch (error) {
		res.status(404).json({
			msg: 'No se encontró el producto'
		})
	}
}

/**Modificar un producto */
export const updateProductByID = async (req, res) => {
	try {
		const { id } = req.params
		const body = req.body
		await ProductModel.updateOne(
			{
				_id: id
			},
			{
				$set: body,
			}
		)
		res.status(200).json({
			msg: 'producto modificado con éxito'
		})
	} catch (error) {
		res.status(404).json({
			msg: 'No se pudo modificar el producto'
		})
	}
}

/**Borrar un producto */
export const deleteProduct = async (req, res) => {
	try {
		const { id } = req.params
		await ProductModel.findByIdAndDelete(id)
		res.status(200).json({
			msg: 'producto eliminado con éxito'
		})
	} catch (error) {
		res.status(404).json({
			msg: 'No se pudo eliminar el producto'
		})
	}
}
