import CategoryModel from './../models/category.model.js';
// import bcrypt from 'bcrypt'

const seedCategory = [
    {
        name: "Phone case"
    },
    {
        name: "Hoodie"
    },
    {
        name: "T-shirt"
    },
    {
        name: "Mug"
    },
];

const seedCategoryToDB = async () => {
    try {
        await CategoryModel.deleteMany({});
        await CategoryModel.insertMany(seedCategory);
        console.log('Categorias insertadas correctamente');
    } catch (err) {
        console.error('Error insertando Categoria:', err);
    }
};

export default seedCategoryToDB;
