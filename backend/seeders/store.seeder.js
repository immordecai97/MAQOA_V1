import StoreModel from '../models/store.model.js';
import UserModel from '../models/user.model.js';

const seedStoresToDB = async () => {
    try {
        // Obtener todos los usuarios con el rol "partner"
        const partners = await UserModel.find({ role: "partner" });

        // Crear una tienda para cada usuario "partner"
        const seedStores = partners.map((partner, index) => ({
            name: `Tienda Ejemplo ${index + 1}`,
            description: `Descripción de Tienda Ejemplo ${index + 1}`,
            owner: partner._id,
            productsList: [],
            images: {
                logo: 'https://i.pinimg.com/564x/b2/93/66/b2936695e4c1d28d1232842dfd361b9d.jpg',
                banner: 'https://i.pinimg.com/564x/d6/ad/3f/d6ad3fa6b85828d99d29c636f4d84325.jpg'
            },
            role: 'Store'
        }));

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
