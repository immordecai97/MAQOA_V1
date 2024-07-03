import homeRouter from "./home.router.js"
import userRouter from "./user.router.js"
import storeRouter from "./store.router.js"
import productRouter from "./product.router.js"
import categoryRouter from "./category.router.js"

const routerApi = (app) => {
	app.use('/', homeRouter);
	app.use('/users', userRouter);
	app.use('/store', storeRouter);
	app.use('/products', productRouter);
	app.use('/categories', categoryRouter);
}

export default routerApi