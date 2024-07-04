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

export const fetchProductById = async (id) => {
	try {
		const res = await fetch(`http://localhost:3000/products/${id}`)
		const data = await res.json()
		return data
	} catch (error) {
		console.log('Hubo un error: ', error.message)
	}
}