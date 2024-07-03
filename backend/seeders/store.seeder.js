import StoreModel from '../models/store.model.js';
import UserModel from '../models/user.model.js';
// import ProductModel from '../models/product.model.js';

const getUserID = async () => {
    try {
        const user = await UserModel.findOne({ role: "partner" });
        console.log("ID del partner:", user._id);
        return user._id;
    } catch (error) {
        console.error("Error al obtener el ID del usuario:", error.message);
        throw new Error("No se pudo obtener el ID del usuario");
    }
};

const seedStoresToDB = async () => {
    try {
        // Obtener el ID del usuario (dueño de la tienda)
        const ownerId = await getUserID();

        // Crear tiendas
        const seedStores = [
            {
                name: 'Tienda Ejemplo 1',
                description: 'Descripción de Tienda Ejemplo 1',
                owner: ownerId,
                productsList: [],
                images: {
                    logo: 'https://i.pinimg.com/564x/b2/93/66/b2936695e4c1d28d1232842dfd361b9d.jpg',
                    banner: 'https://i.pinimg.com/564x/d6/ad/3f/d6ad3fa6b85828d99d29c636f4d84325.jpg'
                },
                role: 'Store'
            },
        ];

        // Eliminar todas las tiendas existentes y luego insertar las nuevas
        await StoreModel.deleteMany({});
        const createdStores = await StoreModel.insertMany(seedStores);
        console.log('Tiendas insertadas correctamente');

        return createdStores;
    } catch (err) {
        console.error('Error insertando tiendas y productos:', err);
    }
};

export default seedStoresToDB;
