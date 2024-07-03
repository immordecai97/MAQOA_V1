import mongoose from 'mongoose';
import connectDB from './../db.js';
import seedUsersToDB from './user.seeder.js';
import seedStoresToDB from './store.seeder.js';
import seedCategoryToDB from './category.seeder.js';
import seedProductsToDB from './product.seeder.js';

const seedAll = async () => {
    await connectDB();

    try {
        await seedUsersToDB();
        const createdStores = await seedStoresToDB();
        await seedCategoryToDB();
        const createdProducts = await seedProductsToDB();

        // Actualizar tiendas con los productos creados
        for (const store of createdStores) {
            // Filtrar los productos que pertenecen a esta tienda específica
            const productsForStore = createdProducts.filter(product => product.productBy.toString() === store._id.toString());
            store.productsList = productsForStore.map(product => product._id);
            await store.save();
        }

        console.log('Seeding completo');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        mongoose.connection.close();
    }
};

seedAll().catch(err => {
    console.error('Error en el seeding:', err);
    mongoose.connection.close();
});
