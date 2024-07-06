import PurchaseModel from '../models/purchase.model.js'; // Asegúrate de que la ruta del modelo sea correcta

/** Traer la lista de todos las compras */
export const getPurchasesList = async (req, res) => {
  try {
    const purchasesList = await PurchaseModel.find().populate('cartBasket');

    res.status(200).json(purchasesList);
  } catch (error) {
    res.status(401).json({
      msg: "Acceso a compras no autorizado",
      error: error.message
    });
  }
};

/** Crear una compra */
export const createPurchase = async (req, res) => {
  try {
    const body = req.body;

    const newPurchase = new PurchaseModel({
      ...body,
    });

    await newPurchase.validate();
    await newPurchase.save();

    res.status(201).json({
      msg: "Compra creada",
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ msg: 'Nombre de la compra ya registrado. prueba con otro nombre' });
    }
    res.status(500).json({
      msg: "No se pudo crear la compra",
      error: error.message,
    });
  }
};

/** Ver compra By ID */
export const getPurchaseByID = async (req, res) => {
  try {
    const { id } = req.params;
    const purchase = await PurchaseModel.findById(id).populate('cartBasket');
    res.status(200).json(purchase);
  } catch (error) {
    res.status(404).json({
      msg: 'No se encontró la compra',
      error: error.message,
    });
  }
};

/** Actualizar compra By ID */
export const updatePurchaseByID = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    await PurchaseModel.updateOne(
      { _id: id },
      { $set: body }
    );
    res.status(200).json({
      msg: 'Compra modificada con éxito'
    });
  } catch (error) {
    res.status(404).json({
      msg: 'No se pudo modificar la compra',
      error: error.message,
    });
  }
};

/** Eliminar compra By ID */
export const deletePurchase = async (req, res) => {
  try {
    const { id } = req.params;
    await PurchaseModel.findByIdAndDelete(id);
    res.status(200).json({
      msg: 'Compra eliminada con éxito'
    });
  } catch (error) {
    res.status(404).json({
      msg: 'No se pudo eliminar la compra',
      error: error.message,
    });
  }
};
