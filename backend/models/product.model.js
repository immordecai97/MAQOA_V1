import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
	title: String,
	price: Number,
	description: String,
	quantity: {
		type: Number,
		default: 0
	},
	subtotal: {
		type: Number,
		default: 0
	},
	stock: {
		type: Number,
		default: 0
	},
	categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
	// createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
	productBy: { type: Schema.Types.ObjectId, ref: 'Store' },
	images: [String],
},
{
	// Configuración adicional del esquema
	timestamps: true,  // Agrega automáticamente createdAt y updatedAt
	// minimize: false,   // Guarda campos vacíos y subdocumentos vacíos
	// strict: false      // Permite guardar datos que no estén definidos en el esquema
});

// Middleware to calculate subtotal before saving
// ProductSchema.pre('save', function (next) {
// 	this.subtotal = this.price * this.quantity;
// 	next();
// });

const ProductModel = model('Product', ProductSchema);

export default ProductModel;