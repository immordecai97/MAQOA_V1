import { Schema, model } from 'mongoose'

const CategorySchema = new Schema({
	name: String,
});

const CategoryModel = model('Category', CategorySchema)
export default CategoryModel