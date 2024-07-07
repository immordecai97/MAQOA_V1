const API = 'http://localhost:3000/stores'

export const fetchStores = async() =>{
	try {
		const res = await fetch(API)
		const data = await res.json()
		return data
	} catch (error) {
		console.log(error.message)
	}
}

export const fetchStoreById = async(id) =>{
	try {
		const res = await fetch(`${API}/${id}`)
		const data = await res.json()
		return data
	} catch (error) {
		console.log(error.message)
	}
}