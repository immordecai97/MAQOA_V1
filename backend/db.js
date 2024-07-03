import mongoose from 'mongoose';

async function connectToDB(){
	try {
		await mongoose.connect('mongodb://127.0.0.1/maqoa');
		console.log('Conectado a la DB')		
	} catch (error) {
		console.log('No se pudo conectar a la DB')
	}
}
export default connectToDB