import { createContext, useState, useEffect } from "react"
import { registerUser, loginUser } from "../Services/auth.service"


export const ShopMaqoaContext = createContext()

export const ShopMaqoaProvider = ({ children }) => {
    // !variables de estado
    // const [showModal, setShowModal] = useState(false)
    //!products
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(null)
    //!stores
    const [store, setStore] = useState(null)
    //!Users
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [currentRegister, setCurrentRegister] = useState(false)
    //!Users -> registro de usuario
    const signUp = async (user) => {
        try {
            const res = await registerUser(user)
            console.table(res)
            setUser(res)
            setCurrentRegister(true)
            // setIsAuth(true)
        } catch (error) {
            console.log(error.message)
        }
    }
    //!Users -> Inicio de sesión
    const signIn = async (user) => {
        try {
            // console.log(user)
            const res = await loginUser(user)
            console.log(res)
            setUser(res)
            setIsAuth(true)
            return
        } catch (error) {
            console.log(error.message)
        }
    }
    //!Cart
    const [cartBasket, setCartBasket] = useState([])
    const [cartsubtotal, setCartSubtotal] = useState(0)
    const [cartQuantity, setCartQuantity] = useState(0)
    //!Cart add product to cart
    const addToCart = (prod) => {
        console.log('agregando->>')
        setCartBasket(prevCartBasket => {
            const existingProduct = prevCartBasket.find(item => item._id === prod._id)
            if (existingProduct) {
                return prevCartBasket.map(item =>
                    item._id === prod._id ? { ...item, quantity: item.quantity + 1 } : item
                )
            } else {
                return [...prevCartBasket, { ...prod, quantity: 1 }]
            }
        })
        setCartQuantity(prevQuantity => prevQuantity + 1)
        setCartSubtotal(prevSubtotal => prevSubtotal + prod.price)
    }

    return (
        <ShopMaqoaContext.Provider value={{
            products, setProducts,
            product, setProduct,
            store, setStore,
            currentRegister, setCurrentRegister, signUp,
            user, isAuth, signIn,
            cartBasket, cartsubtotal, cartQuantity, addToCart
        }}>
            {children}
        </ShopMaqoaContext.Provider>
    )
}
