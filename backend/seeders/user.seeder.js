// seeds/store.seed.js
import UserModel from './../models/user.model.js';
import bcrypt from 'bcrypt'

const seedUsers = [
    {
        "username": "carlos",
        "password": bcrypt.hashSync("1234", 10),
        "email": "carlos@gmail.com",
        "role": "client"
    },
    {
        "username": "stalin",
        "password": bcrypt.hashSync("1234", 10),
        "email": "stalin@gmail.com",
        "role": "partner"
    },
];

const seedUsersToDB = async () => {
    try {
        await UserModel.deleteMany({});
        await UserModel.insertMany(seedUsers);
        console.log('Usuarios insertadas correctamente');
    } catch (err) {
        console.error('Error insertando usuarios:', err);
    }
};

export default seedUsersToDB;
