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
            // PIZZA BAY
            {
                title: 'lil drawing yellow',
                price: 19.99,
                description: 'Hight-quality cotton hoodie with custom graphic print',
                quantity: 50,
                subtotal: 0,
                stock: 100,
                categories: [categories[1]],
                productBy: stores[0]._id,
                images: ['https://i.pinimg.com/564x/e5/ae/60/e5ae602608c01507201a5a71c3d4342c.jpg']
            },
            {
                title: 'Good mood',
                price: 29.99,
                description: 'Hight-quality cotton hoodie with custom graphic print',
                quantity: 40,
                subtotal: 0,
                stock: 80,
                categories: [categories[1]],
                productBy: stores[0]._id,
                images: ['https://i.pinimg.com/564x/b2/0a/b9/b20ab9c43f388ae1ec75eb972febeeb7.jpg']
            },

            // NOT NORMAL
            {
                title: 'Cube case',
                price: 24.99,
                description: 'Phone case with a custom graphic print',
                quantity: 30,
                subtotal: 0,
                stock: 60,
                categories: [categories[0]],
                productBy: stores[1]._id,
                images: ['https://i.pinimg.com/564x/d7/05/54/d70554210227d2b3611201d0123c753e.jpg']
            },
            {
                title: 'Eye case',
                price: 34.99,
                description: 'Phone case with a custom graphic print',
                quantity: 25,
                subtotal: 0,
                stock: 50,
                categories: [categories[0]],
                productBy: stores[1]._id,
                images: ['https://i.pinimg.com/564x/34/06/49/3406495b5cab497b1a0abf92243951f5.jpg']
            },

            // GOOD KARMA
            {
                title: 'Indie shirt',
                price: 19.99,
                description: 'Hight-quality cotton t-shirt with custom graphic print',
                quantity: 50,
                subtotal: 0,
                stock: 100,
                categories: [categories[2]],
                productBy: stores[2]._id,
                images: ['https://i.pinimg.com/564x/38/24/b2/3824b281c386fa011e59f5a3dade0943.jpg']
            },
            {
                title: 'Composition shirt',
                price: 29.99,
                description: 'Hight-quality cotton t-shirt with custom graphic print',
                quantity: 40,
                subtotal: 0,
                stock: 80,
                categories: [categories[2]],
                productBy: stores[2]._id,
                images: ['https://i.pinimg.com/564x/c7/bc/13/c7bc135e2e6ba2ed317e431b542bbb03.jpg']
            },

            // RED ACID
            {
                title: 'Mug to read',
                price: 19.99,
                description: 'A mug with a custom graphic print',
                quantity: 50,
                subtotal: 0,
                stock: 100,
                categories: [categories[3]],
                productBy: stores[3]._id,
                images: ['https://i.pinimg.com/564x/51/4e/a5/514ea5b85df6d85f2d8b7854be768625.jpg']
            },
            {
                title: "Harry mugger",
                price: 29.99,
                description: 'A mug with a custom graphic print',
                quantity: 40,
                subtotal: 0,
                stock: 80,
                categories: [categories[3]],
                productBy: stores[3]._id,
                images: ['https://i.pinimg.com/564x/52/f8/ea/52f8ea52308db612d3187defd6bcf5c2.jpg']
            },
        ];

        await ProductModel.deleteMany({});
        const createdProducts = await ProductModel.insertMany(seedProducts);

        return createdProducts;
    } catch (err) {
        console.error('Error insertando productos:', err);
    }
};

export default seedProductsToDB;
