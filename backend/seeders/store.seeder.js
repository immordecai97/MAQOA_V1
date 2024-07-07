import StoreModel from '../models/store.model.js';
import UserModel from '../models/user.model.js';

const seedStoresToDB = async () => {
    try {
        // Obtener todos los usuarios con el rol "partner"
        const partners = await UserModel.find({ role: "partner" });

        if (partners.length < 4) {
            throw new Error("Se necesitan al menos 4 usuarios 'partner' para las tiendas personalizadas");
        }

        // Lista de tiendas personalizadas
        const customStores = [
            {
                name: "Pizza bay",
                description: "Pizza Bay is a cutting-edge brand specializing in unique graphic hoodies. Each hoodie is a wearable work of art, designed by talented artists inspired by pop culture and urban art. Committed to quality and sustainability, Pizza Bay uses high-quality materials and eco-friendly practices. Express your style with a Pizza Bay hoodie today!",
                owner: partners[0]._id,
                productsList: [],
                images: {
                    logo: 'https://i.pinimg.com/564x/d8/d3/46/d8d34638bc587b2dbc279ecffd4acc12.jpg',
                    banner: 'https://plus.unsplash.com/premium_photo-1675278299389-4165d19f59d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    // banner: 'https://i.pinimg.com/564x/d6/ad/3f/d6ad3fa6b85828d99d29c636f4d84325.jpg'
                },
                role: 'Store'
            },
            {
                name: "Not normal",
                description: "Not Normal is a trendsetting brand that specializes in phone cases with original designs. Each case is a unique piece of art, crafted by visionary designers inspired by contemporary trends and personal expression. Committed to quality and creativity, Not Normal offers stylish phone cases that stand out from the crowd. Explore your individuality with a Not Normal phone case today!",
                owner: partners[1]._id,
                productsList: [],
                images: {
                    logo: 'https://i.pinimg.com/236x/7d/1e/7a/7d1e7a9f6e75c54de7e4dda7c8d1b6b1.jpg',
                    banner: 'https://plus.unsplash.com/premium_photo-1707353400249-1d96e1a7e0e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    // banner: 'https://i.pinimg.com/564x/d6/ad/3f/d6ad3fa6b85828d99d29c636f4d84325.jpg'
                },
                role: 'Store'
            },
            {
                name: "Good karma",
                description: "Good Karma is a brand dedicated to offering exclusive t-shirts with unique designs. Each t-shirt embodies a blend of creativity and positivity, reflecting the brand's commitment to spreading good vibes through fashion. Designed to inspire and uplift, Good Karma's t-shirts are perfect for those who seek style with a purpose. Discover your favorite design and spread good karma with every wear.",
                owner: partners[2]._id,
                productsList: [],
                images: {
                    logo: 'https://i.pinimg.com/736x/2b/58/d9/2b58d965cdee09c70ed00924a162c6b2.jpg',
                    banner: 'https://images.unsplash.com/photo-1529869980459-ccdf511edf32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    // banner: 'https://i.pinimg.com/564x/d6/ad/3f/d6ad3fa6b85828d99d29c636f4d84325.jpg'
                },
                role: 'Store'
            },
            {
                name: "Red acid",
                description: "Red Acid specializes in mugs featuring exclusive designs that captivate and inspire. Each mug is a canvas of artistic expression, blending bold colors and intricate patterns to create a unique statement piece. Embracing creativity and craftsmanship, Red Acid offers mugs that bring joy to daily rituals and make memorable gifts for any occasion. Elevate your coffee break with a Red Acid mug and experience art in every sip.",
                owner: partners[3]._id,
                productsList: [],
                images: {
                    logo: 'https://i.pinimg.com/236x/7b/e3/4e/7be34eb380cbfcb61281cc9af9dcffdd.jpg',
                    banner: 'https://images.unsplash.com/photo-1511763403446-19a1e1bfee58?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    // banner: 'https://i.pinimg.com/564x/d6/ad/3f/d6ad3fa6b85828d99d29c636f4d84325.jpg'
                },
                role: 'Store'
            },
        ];

        // Eliminar todas las tiendas existentes y luego insertar las nuevas
        await StoreModel.deleteMany({});
        const createdStores = await StoreModel.insertMany(customStores);
        console.log('Tiendas insertadas correctamente');

        return createdStores;
    } catch (err) {
        console.error('Error insertando tiendas y productos:', err);
    }
};

export default seedStoresToDB;
