import { createContext, useState, useEffect } from "react"

export const ShopMaqoaContext = createContext()

export const ShopMaqoaProvider = ({ children }) => {
    // !variables de estado
    // const [showModal, setShowModal] = useState(false)
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(null)
    const [store, setStore] = useState(null)
    
    // const [carrito, setCarrito] = useState({
    //     productsList: [],
    //     quantity: 0,
    //     subtotal: 0
    // })

    // !funciones
    // const fetchProducts = async () => {
    //     try {
    //         const res = await fetch('http://localhost:3000/products')
    //         const data = await res.json()
    //         setProducts(data)
    //     } catch (error) {
    //         console.log('Hubo un error: ', error.message)
    //     }
    // }

    // const fetchProductById = async (id) => {
    //     try {
    //         const res = await fetch(`http://localhost:3000/products/${id}`)
    //         const data = await res.json()
    //         setProduct(data)
    //     } catch (error) {
    //         console.log('Hubo un error: ', error.message)
    //     }
    // }

    // const addToCart = (product) => {
    //     setCarrito((prevCart) => {
    //         // Busca si el producto ya está en el carrito por su ID
    //         const index = prevCart.productsList.findIndex((p) => p._id === product._id);

    //         if (index === -1) {
    //             // Producto no existe en el carrito, lo agrega con cantidad y subtotal inicial
    //             const newProduct = {
    //                 ...product,
    //                 quantity: 1,
    //                 subtotal: product.price
    //             };
    //             return {
    //                 ...prevCart,
    //                 productsList: [...prevCart.productsList, newProduct], //! Agrega el nuevo producto al carrito
    //                 quantity: prevCart.quantity + 1,                      //! Incrementa la cantidad total de productos en el carrito
    //                 subtotal: prevCart.subtotal + product.price           //! Incrementa el subtotal del carrito
    //             };
    //         } else {
    //             // Producto ya existe en el carrito, actualizamos cantidad y subtotal
    //             const updatedProductsList = [...prevCart.productsList];
    //             updatedProductsList[index] = {
    //                 ...updatedProductsList[index],
    //                 quantity: updatedProductsList[index].quantity + 1,
    //                 subtotal: updatedProductsList[index].subtotal + updatedProductsList[index].price
    //             };

    //             return {
    //                 ...prevCart,
    //                 productsList: updatedProductsList,                    //! Actualiza la lista de productos en el carrito
    //                 quantity: prevCart.quantity + 1,                      //! Incrementa la cantidad total de productos en el carrito
    //                 subtotal: prevCart.subtotal + updatedProductsList[index].price //! Incrementa el subtotal del carrito
    //             };
    //         }
    //     });
    // };

    //!Use effect
    // useEffect(() => {
    //     fetchProducts()
    // }, [])

    // !Template del proveedor
    return (
        <ShopMaqoaContext.Provider value={{
            products, setProducts,
            product, setProduct,
            store, setStore
            // carrito, addToCart,
            // showModal, setShowModal
        }}>
            {children}
        </ShopMaqoaContext.Provider>
    )
}
