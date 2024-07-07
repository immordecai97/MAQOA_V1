import Layout from "../../Components/Layout";
import { useContext, useEffect, useState } from "react";
import { ShopMaqoaContext } from "../../Context";
import { fetchPurchaseHistorial } from "../../Services/purchase.service.js";
import { updateUser } from "../../Services/auth.service.js"; 

const User = () => {
    const { user, setUser } = useContext(ShopMaqoaContext); // Asegúrate de tener setUser en el contexto
    const [history, setHistory] = useState(null);
    const [isEditing, setIsEditing] = useState(false); // Nuevo estado
    const [formData, setFormData] = useState({
        userID: user._id, // Agrega el ID del usuario aquí
        username: user.username,
        email: user.email,
    });

    const handleFetchHistory = async () => {
        try {
            const data = await fetchPurchaseHistorial();
            setHistory(data);
            console.log(data);
        } catch (error) {
            console.log('ERRORRRRR: ', error.message);
        }
    };

    useEffect(() => {
        handleFetchHistory();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await updateUser(formData);
            console.log(updatedUser);
            setUser(updatedUser); // Actualiza el contexto del usuario
            setIsEditing(false); // Termina el modo de edición
        } catch (error) {
            console.log('ERRORRRRR: ', error.message);
        }
    };

    return (
        <Layout title={"Account"}>
            <section className="w-full max-w-[1200px] flex justify-center flex-wrap items-center text-center gap-4 rounded border h-full max-h-[900px] shadow-lg">
                <h2 className="w-full mt-6 text-[1.8rem] font-bold">Dashboard de Usuario</h2>
                <div className="w-full max-w-[550px] p-3 border rounded-lg my-4 shadow-lg">
                    <h3 className="w-full text-[1.2rem] font-bold">User account</h3>
                    {isEditing ? (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input type="hidden" name="userID" value={formData.userID} />
                                <label className="block text-left" htmlFor="username">Username</label>
                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-left" htmlFor="email">Email</label>
                                <input
                                    className="w-full border rounded p-2"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button
                                className="w-full border rounded-lg p-2 bg-black text-white hover:bg-white hover:text-black hover:scale-120 hover:border-black"
                                type="submit"
                            >
                                Save
                            </button>
                        </form>
                    ) : (
                        <ul className="flex flex-col justify-start gap-2 mt-2">
                            <li className="border rounded-lg shadow">
                                <p className="text-start m-2">
                                    <span className="font-bold">Username: </span> <span>{user.username}</span>
                                </p>
                            </li>
                            <li className="border rounded-lg shadow">
                                <p className="text-start m-2">
                                    <span className="font-bold">Email: </span> <span>{user.email}</span>
                                </p>
                            </li>
                        </ul>
                    )}
                    <div className="flex justify-center gap-4 mt-3">
                        <button
                            className="transition w-full border rounded-lg p-2 bg-black text-white hover:bg-white hover:text-black hover:scale-120 hover:border-black"
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            {isEditing ? "Cancel" : "Editar"}
                        </button>
                    </div>
                </div>
                <div className="w-full max-w-[550px] p-3 border rounded-lg my-5 shadow-lg">
                    <h3 className="w-full text-[1.2rem] font-bold">Shopping history</h3>
                    <ul className="flex flex-col justify-start gap-2 mt-2">
                        {history?.map((hist) => (
                            <li key={hist._id} className="border rounded-lg shadow p-2 text-start text-xs">
                                <div className="flex justify-between w-full ">
                                    <p className="text-start">
                                        <span className="font-bold">Order: </span>
                                        <span>{hist._id}</span></p>
                                    <p className="font-bold">${hist.total}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>
                                        <span className="font-bold">From: </span>
                                        <span>{hist.address.country}</span>
                                    </p>
                                    <p>
                                        <span className="font-bold">to: </span>
                                        <span>{hist.address.address}</span>
                                    </p>
                                </div>
                                <div className="flex justify-between w-full">
                                    <p><span className="font-bold">Date:</span> <span>{formatDate(hist.createdAt)}</span></p>
                                    <p><span className="font-bold">Quantity products:</span> <span>{hist.cartBasket.length}</span></p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

export default User;
