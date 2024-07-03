import ProductModel from '../models/product.model.js';
import CategoryModel from '../models/category.model.js'; // Asegúrate de importar el modelo de categorías si aún no lo has hecho
import StoreModel from '../models/store.model.js'; // Importa el modelo de tiendas si aún no lo has hecho

const getCategories = async () => {
    try {
        const categories = await CategoryModel.find();
        return categories.map(category => category._id);
    } catch (error) {
        console.error('Error al obtener las categorías:', error.message);
        throw new Error('No se pudieron obtener las categorías');
    }
};

const getStoreId = async () => {
    try {
        const store = await StoreModel.findOne(); // Asegúrate de obtener la tienda de la cual deseas obtener el ID
        if (!store) {
            throw new Error('No se encontró ninguna tienda.');
        }
        return store._id;
    } catch (error) {
        console.error('Error al obtener el ID de la tienda:', error.message);
        throw new Error('No se pudo obtener el ID de la tienda');
    }
};
const seedProductsToDB = async () => {
    try {
        const categories = await getCategories();
        const storeId = await getStoreId();

        const seedProducts = [
            {
                title: 'Graphic T-Shirt',
                price: 19.99,
                description: 'High-quality cotton T-shirt with custom graphic print.',
                quantity: 50,
                subtotal: 0, // Este valor se calculará en el middleware si se habilita
                stock: 100,
                categories: [categories[2]], // Asigna el ID de la categoría correspondiente
                productBy: storeId, // Asigna el ID de la tienda obtenido
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },
            {
                title: 'Logo T-Shirt',
                price: 19.99,
                description: 'Comfortable T-shirt featuring a custom logo print.',
                quantity: 30,
                subtotal: 0, // Este valor se calculará en el middleware si se habilita
                stock: 75,
                categories: [categories[2]], // Asigna el ID de la categoría correspondiente
                productBy: storeId, // Asigna el ID de la tienda obtenido
                images: ['https://i.pinimg.com/564x/c7/bc/13/c7bc135e2e6ba2ed317e431b542bbb03.jpg']
            }
            // Agrega más productos según sea necesario
        ];

        await ProductModel.deleteMany({});
        const createdProducts = await ProductModel.insertMany(seedProducts);

        // Aquí se devuelven los productos creados para poder actualizar las tiendas
        return createdProducts;
    } catch (err) {
        console.error('Error insertando productos:', err);
    }
};

export default seedProductsToDB;
