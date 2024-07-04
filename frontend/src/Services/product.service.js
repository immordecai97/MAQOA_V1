export const fetchProducts = async () => {
	try {
		const res = await fetch('http://localhost:3000/products')
		const data = await res.json()
		console.log('Fetch products:')
		console.table(data)
		return data
	} catch (error) {
		console.log('Hubo un error: ', error.message)
	}
}