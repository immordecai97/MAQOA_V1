const API = 'http://localhost:3000/users'
export const registerUser = async(user) => {
	try {
		console.log(user)
		const res = await fetch(`${API}/create`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user),
		})
		const data = await res.json()
		return data

	} catch (error) {
		console.log('hubo un error')
	}
}

export const loginUser = async(user) => {
	console.log(user)
	const res = await fetch(`${API}/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify(user),
		credentials: 'include'
	})
	const data = await res.json()
	return data
}

export const logOut = async () => {
	try {
	    const res = await fetch(`${API}/logout`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include', // Incluir cookies en la solicitud
	    });
	    if (res.ok) {
		return true; // Indicar que el logout fue exitoso
	    } else {
		throw new Error('Failed to log out');
	    }
	} catch (error) {
	    console.log('Hubo un error en el logout', error);
	    return false;
	}
    }
    