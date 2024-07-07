import ProductModel from '../models/product.model.js';
import CategoryModel from '../models/category.model.js';
import StoreModel from '../models/store.model.js';

const getCategories = async () => {
    try {
        const categories = await CategoryModel.find();
        return categories.map(category => category._id);
    } catch (error) {
        console.error('Error al obtener las categorías:', error.message);
        throw new Error('No se pudieron obtener las categorías');
    }
};

const getStores = async () => {
    try {
        const stores = await StoreModel.find(); // Obtener todas las tiendas
        if (!stores.length) {
            throw new Error('No se encontraron tiendas.');
        }
        return stores;
    } catch (error) {
        console.error('Error al obtener las tiendas:', error.message);
        throw new Error('No se pudieron obtener las tiendas');
    }
};

const seedProductsToDB = async () => {
    try {
        const categories = await getCategories();
        const stores = await getStores();

        const seedProducts = [];

        // Productos para la primera tienda (2 productos)
        for (let i = 0; i < 2; i++) {
            seedProducts.push({
                title: `Producto ${i + 1} Tienda 1`,
                price: 19.99,
                description: `Descripción del producto ${i + 1} para la Tienda 1.`,
                quantity: 50,
                subtotal: 0,
                stock: 100,
                categories: [categories[i % categories.length]],
                productBy: stores[0]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            });
        }

        // Productos para la segunda tienda (3 productos)
        for (let i = 0; i < 3; i++) {
            seedProducts.push({
                title: `Producto ${i + 1} Tienda 2`,
                price: 19.99,
                description: `Descripción del producto ${i + 1} para la Tienda 2.`,
                quantity: 50,
                subtotal: 0,
                stock: 100,
                categories: [categories[i % categories.length]],
                productBy: stores[1]._id,
                images: ['https://i.pinimg.com/564x/c7/bc/13/c7bc135e2e6ba2ed317e431b542bbb03.jpg']
            });
        }

        // Productos para la tercera tienda (4 productos)
        for (let i = 0; i < 4; i++) {
            seedProducts.push({
                title: `Producto ${i + 1} Tienda 3`,
                price: 19.99,
                description: `Descripción del producto ${i + 1} para la Tienda 3.`,
                quantity: 50,
                subtotal: 0,
                stock: 100,
                categories: [categories[i % categories.length]],
                productBy: stores[2]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            });
        }

        // Productos para la cuarta tienda (5 productos)
        for (let i = 0; i < 5; i++) {
            seedProducts.push({
                title: `Producto ${i + 1} Tienda 4`,
                price: 19.99,
                description: `Descripción del producto ${i + 1} para la Tienda 4.`,
                quantity: 50,
                subtotal: 0,
                stock: 100,
                categories: [categories[i % categories.length]],
                productBy: stores[3]._id,
                images: ['https://i.pinimg.com/564x/c7/bc/13/c7bc135e2e6ba2ed317e431b542bbb03.jpg']
            });
        }

        await ProductModel.deleteMany({});
        const createdProducts = await ProductModel.insertMany(seedProducts);

        return createdProducts;
    } catch (err) {
        console.error('Error insertando productos:', err);
    }
};

export default seedProductsToDB;
