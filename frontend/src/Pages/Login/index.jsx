import { useState } from "react"
import Layout from "../../Components/Layout"


const Login = () => {
	
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(false)
	const handleSubmit = (e) =>{
		e.preventDefault()
		if(email === "" || password === ""){
			setError(true)
			return
		}
		setError(false)
	}

	return(
		<Layout title="Login">
			<div className="w-full max-w-[25rem]">
				<form 
				onSubmit={handleSubmit}
				className="w-full mx-auto py-4 px-8 bg-white rounded shadow-lg flex flex-col gap-4">
					<div className="flex flex-col gap-1">
						<label htmlFor="email" className="pl-2">Email</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="text"  
							id="email" 
							placeholder="maqoa@maqoa.com" 
							className="border border-black py-2 px-4 rounded"/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="password" className="pl-2">Password</label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"  
							id="password" 
							placeholder="*****" 
							className="border border-black py-2 px-4 rounded"/>
					</div>
					<div className="flex flex-col gap-1">
						<button type="submit" className="bg-black text-white py-2 px-4 w-full rounded text-center">Sign in</button>
					</div>
				</form>
				{error && <p className="text-center text-red-500 pt-4">Todos los campos son obligatorios</p>}
			</div>
		</Layout>
	)
}
export default Login