import Layout from "../../Components/Layout";

const User = ()=>{
    return(
        <Layout title="User">
            <section className="w-full max-w-[1200px] flex justify-center flex-wrap items-center text-center gap-4 rounded border h-full max-h-[900px] shadow-lg">
                <h2 className="w-full mt-6 text-[1.8rem] font-bold">Dashboard de Usuario</h2>
                <div className="w-full max-w-[550px] p-3 border rounded-lg my-4 shadow-lg">
                    <h3 className="w-full text-[1.2rem]">Nombre - User</h3>
                    <ul className="flex flex-col  justify-start gap-2 mt-2">
                        <li className="border rounded-lg shadow">
                            <p className="text-start m-2">User Name: Messi</p>
                        </li>
                        <li className="border rounded-lg shadow">
                            <p className="text-start m-2">Email: hola@gmail.com</p>
                        </li>
                        <li className="border rounded-lg shadow">
                            <p className="text-start m-2">Password: *******</p>
                        </li>
                    </ul>
                    <div className="flex justify-center gap-4 mt-3">
                        <button className="border rounded-lg p-2 bg-black text-white hover:bg-white hover:text-black hover:scale-120 w-20">Editar</button>
                        <button className="border rounded-lg p-2 bg-black text-white hover:bg-white hover:text-black hover:scale-120 w-20">boton2</button>
                    </div>
                </div>
                <div className="w-full max-w-[550px] p-3 border rounded-lg my-5 shadow-lg">
                    <h3 className="w-full text-[1.2rem]">Historial</h3>
                    <ul className="flex flex-col  justify-start gap-2 mt-2">
                        <li className="border rounded-lg shadow">
                            <p className="text-start m-2">Product: <strong>sanguche de mila</strong>  <span>07-07-24</span>  16:00</p>
                        </li>
                        <li className="border rounded-lg shadow">
                            <p className="text-start m-2">Product: <strong>yuca frita</strong> <span>07-07-24</span>  16:00</p>
                        </li>
                        <li className="border rounded-lg shadow">
                            <p className="text-start m-2">Product: <strong>platano frito</strong> <span>07-07-24</span>  16:00</p>
                        </li>
                    </ul>
                    
                    
                    <div className="flex justify-center gap-4 mt-3">
                        <button className="border rounded-lg p-2 bg-black text-white hover:bg-white hover:text-black hover:scale-120 w-20">Vaciar</button>
                        <button className="border rounded-lg p-2 bg-black text-white hover:bg-white hover:text-black hover:scale-120 w-20">boton2</button>
                    </div>
                </div>


            </section>
        </Layout>
    )
}

export default User