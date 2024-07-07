import UserModel from './../models/user.model.js';
import bcrypt from 'bcrypt';

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
    {
        "username": "hector",
        "password": bcrypt.hashSync("1234", 10),
        "email": "hector@gmail.com",
        "role": "partner"
    },
    {
        "username": "daniel",
        "password": bcrypt.hashSync("1234", 10),
        "email": "daniel@gmail.com",
        "role": "partner"
    },
    {
        "username": "facundo",
        "password": bcrypt.hashSync("1234", 10),
        "email": "facundo@gmail.com",
        "role": "partner"
    },
];

const seedUsersToDB = async () => {
    try {
        await UserModel.deleteMany({});
        await UserModel.insertMany(seedUsers);
        console.log('Usuarios insertados correctamente');
    } catch (err) {
        console.error('Error insertando usuarios:', err);
    }
};

export default seedUsersToDB;
