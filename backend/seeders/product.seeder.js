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

        const seedProducts = [
            // Productos para la primera tienda (2 productos)
            {
                title: 'Producto 1 Tienda 1',
                price: 19.99,
                description: 'Descripción del producto 1 para la Tienda 1.',
                quantity: 50,
                subtotal: 0,
                stock: 100,
                categories: [categories[0]],
                productBy: stores[0]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },
            {
                title: 'Producto 2 Tienda 1',
                price: 29.99,
                description: 'Descripción del producto 2 para la Tienda 1.',
                quantity: 40,
                subtotal: 0,
                stock: 80,
                categories: [categories[1]],
                productBy: stores[0]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },

            // Productos para la segunda tienda (3 productos)
            {
                title: 'Producto 1 Tienda 2',
                price: 24.99,
                description: 'Descripción del producto 1 para la Tienda 2.',
                quantity: 30,
                subtotal: 0,
                stock: 60,
                categories: [categories[2]],
                productBy: stores[1]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },
            {
                title: 'Producto 2 Tienda 2',
                price: 34.99,
                description: 'Descripción del producto 2 para la Tienda 2.',
                quantity: 25,
                subtotal: 0,
                stock: 50,
                categories: [categories[3]],
                productBy: stores[1]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },
            {
                title: 'Producto 3 Tienda 2',
                price: 44.99,
                description: 'Descripción del producto 3 para la Tienda 2.',
                quantity: 20,
                subtotal: 0,
                stock: 40,
                categories: [categories[0]],
                productBy: stores[1]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },

            // Productos para la tercera tienda (4 productos)
            {
                title: 'Producto 1 Tienda 3',
                price: 19.99,
                description: 'Descripción del producto 1 para la Tienda 3.',
                quantity: 50,
                subtotal: 0,
                stock: 100,
                categories: [categories[1]],
                productBy: stores[2]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },
            {
                title: 'Producto 2 Tienda 3',
                price: 29.99,
                description: 'Descripción del producto 2 para la Tienda 3.',
                quantity: 40,
                subtotal: 0,
                stock: 80,
                categories: [categories[2]],
                productBy: stores[2]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },
            {
                title: 'Producto 3 Tienda 3',
                price: 39.99,
                description: 'Descripción del producto 3 para la Tienda 3.',
                quantity: 30,
                subtotal: 0,
                stock: 60,
                categories: [categories[3]],
                productBy: stores[2]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },
            {
                title: 'Producto 4 Tienda 3',
                price: 49.99,
                description: 'Descripción del producto 4 para la Tienda 3.',
                quantity: 20,
                subtotal: 0,
                stock: 40,
                categories: [categories[0]],
                productBy: stores[2]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },

            // Productos para la cuarta tienda (5 productos)
            {
                title: 'Producto 1 Tienda 4',
                price: 19.99,
                description: 'Descripción del producto 1 para la Tienda 4.',
                quantity: 50,
                subtotal: 0,
                stock: 100,
                categories: [categories[3]],
                productBy: stores[3]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },
            {
                title: 'Producto 2 Tienda 4',
                price: 29.99,
                description: 'Descripción del producto 2 para la Tienda 4.',
                quantity: 40,
                subtotal: 0,
                stock: 80,
                categories: [categories[2]],
                productBy: stores[3]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },
            {
                title: 'Producto 3 Tienda 4',
                price: 39.99,
                description: 'Descripción del producto 3 para la Tienda 4.',
                quantity: 30,
                subtotal: 0,
                stock: 60,
                categories: [categories[1]],
                productBy: stores[3]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },
            {
                title: 'Producto 4 Tienda 4',
                price: 49.99,
                description: 'Descripción del producto 4 para la Tienda 4.',
                quantity: 20,
                subtotal: 0,
                stock: 40,
                categories: [categories[0]],
                productBy: stores[3]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },
            {
                title: 'Producto 5 Tienda 4',
                price: 59.99,
                description: 'Descripción del producto 5 para la Tienda 4.',
                quantity: 10,
                subtotal: 0,
                stock: 20,
                categories: [categories[3]],
                productBy: stores[3]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            }
        ];

        await ProductModel.deleteMany({});
        const createdProducts = await ProductModel.insertMany(seedProducts);

        return createdProducts;
    } catch (err) {
        console.error('Error insertando productos:', err);
    }
};

export default seedProductsToDB;
