import { Schema, model } from 'mongoose'

const StoreSchema = new Schema({
	name: { 
		type: String, 
		required: false
	},
	description: String,
	owner: { 
		type: Schema.Types.ObjectId, 
		ref: 'User', 
		required: false
	},
	productsList: [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Product' 
	}],
	images: {
		logo: String,
		banner: String
	},
	role: {
		type: String,
		default: 'Store'
	}
},
{
	// Configuración adicional del esquema
	timestamps: true,  // Agrega automáticamente createdAt y updatedAt
	// minimize: false,   // Guarda campos vacíos y subdocumentos vacíos
	// strict: false      // Permite guardar datos que no estén definidos en el esquema
});

const StoreModel = model('Store', StoreSchema);

export default StoreModel;
