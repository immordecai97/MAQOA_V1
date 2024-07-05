//Importaciones
import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import routerApi from './router/index.router.js'
import connectToDB from './db.js'
import cookieParser from 'cookie-parser'

//Configuración
connectToDB()
const app = express()
const port = process.env.PORT ?? 8080

//Middlewares
app.use(express.json())
app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true,
}))
app.use(cookieParser())

//rutas
routerApi(app)

//listening
app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})