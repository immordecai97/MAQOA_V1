import { createContext, useState, useEffect } from "react";
import { registerUser, loginUser, logOut } from "../Services/auth.service.js";

// import { makePurchase } from "../Services/purchase.service.js";

export const ShopMaqoaContext = createContext();

export const ShopMaqoaProvider = ({ children }) => {

    const [stores, setStores] = useState([])

    const [purchase, setPurchase] = useState(() => {
        const storedPurchase = localStorage.getItem('purchase');
        return storedPurchase ? JSON.parse(storedPurchase) : null;
    });
    // const [userPurchase, setUserPurchase] = useState(false);

    const onSubmitPurchase = async (data) => {
        // console.table(data)
        // console.table(cartBasket)
        // console.table(cartSubtotal)
        // console.table(purchase)
        const purchaseData = {
            user: data.userID,
            address: {
                country: data.country,
                address: data.address
            },
            cardInfo: {
                cardDate: data.cardDate,
                cardNumber: data.cardNumber,
                cvc: data.cvc
            },
            cartBasket,
            shipping: 5,
            subtotal: cartSubtotal,
            total: (cartSubtotal + 5)
        };
        console.log(purchaseData)
        try {
            const res = await fetch(`http://localhost:3000/purchases/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(purchaseData)
            })
            if (!res.ok) {
                const errorDetails = await res.json();
                throw new Error(errorDetails.message || 'Network response was not ok');
            }
            const result = await res.json();
            setPurchase(purchaseData)
            console.log('Respuesta:', result)
        } catch (error) {
            console.error('Error making purchase:', error.message);
        }

        // try {
        //     console.log(purchase)
        //     console.log('PURCHASSE',data)
        // //   const response = await fetch('/api/purchase', {
        //     const res = await fetch(`http://localhost:3000/purchases/create`, {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       ...data,
        //       cartBasket,
        //       user,
        //       purchase,
        //     }),
        //   });
        //   if (!res.ok) {
        //     const errorDetails = await res.json();
        //     throw new Error(errorDetails.message || 'Network response was not ok');
        //   }
        //   const result = await res.json();
        // //   setUserPurchase(true);
        //   // Handle successful purchase
        // } catch (error) {
        //   console.error('Error making purchase:', error.message);
        // }
    };

    const resetCart = () => {
        // Limpiar valores relacionados con el carrito
        localStorage.removeItem('cartBasket');
        localStorage.removeItem('cartQuantity');

        // Actualizar el estado local del carrito
        setCartBasket([]);
        setCartQuantity(0);
        setCartSubtotal(0); // Si es necesario
        setPurchase(null)

        // Realizar otras acciones necesarias al reestablecer el carrito
        // Por ejemplo, recalcular el subtotal si es necesario
    };

    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal((prevModal) => !prevModal);

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [store, setStore] = useState(null);
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const [isAuth, setIsAuth] = useState(() => {
        const storedIsAuth = localStorage.getItem('isAuth');
        return storedIsAuth ? JSON.parse(storedIsAuth) : false;
    });
    const [currentRegister, setCurrentRegister] = useState(false);

    const signUp = async (user) => {
        try {
            const res = await registerUser(user);
            setUser(res);
            setCurrentRegister(true);
            localStorage.setItem('user', JSON.stringify(res));
        } catch (error) {
            console.log(error.message);
        }
    };

    const signIn = async (user) => {
        try {
            const res = await loginUser(user);
            setUser(res);
            setIsAuth(true);
            localStorage.setItem('user', JSON.stringify(res));
            localStorage.setItem('isAuth', JSON.stringify(true));
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        const success = await logOut();
        if (success) {
            setUser(null);
            setIsAuth(false);
            localStorage.removeItem('user');
            localStorage.removeItem('isAuth');
            localStorage.removeItem('cartBasket');
            localStorage.removeItem('cartQuantity');
        }
    };

    const [cartBasket, setCartBasket] = useState(() => {
        const storedCartBasket = localStorage.getItem('cartBasket');
        return storedCartBasket ? JSON.parse(storedCartBasket) : [];
    });

    const [cartQuantity, setCartQuantity] = useState(() => {
        const storedCartQuantity = localStorage.getItem('cartQuantity');
        return storedCartQuantity ? JSON.parse(storedCartQuantity) : 0;
    });

    const [cartSubtotal, setCartSubtotal] = useState(() => {
        const storedCartBasket = localStorage.getItem('cartBasket');
        if (!storedCartBasket) return 0;
        const parsedCartBasket = JSON.parse(storedCartBasket);
        let initialSubtotal = 0;
        parsedCartBasket.forEach(item => {
            initialSubtotal += item.subtotal;
        });
        return initialSubtotal;
    });

    const calculateCartSubtotal = (cart) => {
        let subtotal = 0;
        cart.forEach(item => {
            subtotal += item.subtotal;
        });
        setCartSubtotal(subtotal);
    };

    const addToCart = (prod) => {
        setCartBasket(prevCartBasket => {
            const existingProduct = prevCartBasket.find(item => item._id === prod._id);
            const newCartBasket = existingProduct ?
                prevCartBasket.map(item =>
                    item._id === prod._id ? {
                        ...item,
                        quantity: item.quantity + 1,
                        subtotal: item.price * (item.quantity + 1)
                    } : item
                ) :
                [...prevCartBasket, {
                    ...prod,
                    quantity: 1,
                    subtotal: prod.price
                }];
            localStorage.setItem('cartBasket', JSON.stringify(newCartBasket));
            calculateCartSubtotal(newCartBasket);
            return newCartBasket;
        });
        setCartQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            localStorage.setItem('cartQuantity', JSON.stringify(newQuantity));
            return newQuantity;
        });
    };

    const subtractFromCart = (prod) => {
        setCartBasket(prevCartBasket => {
            const existingProduct = prevCartBasket.find(item => item._id === prod._id);
            let newCartBasket;
            if (existingProduct && existingProduct.quantity > 1) {
                newCartBasket = prevCartBasket.map(item =>
                    item._id === prod._id ? {
                        ...item,
                        quantity: item.quantity - 1,
                        subtotal: item.price * (item.quantity - 1)
                    } : item
                );
            } else {
                newCartBasket = prevCartBasket.filter(item => item._id !== prod._id);
            }
            localStorage.setItem('cartBasket', JSON.stringify(newCartBasket));
            calculateCartSubtotal(newCartBasket);
            return newCartBasket;
        });
        setCartQuantity(prevQuantity => {
            const newQuantity = prevQuantity - 1;
            localStorage.setItem('cartQuantity', JSON.stringify(newQuantity));
            return newQuantity;
        });
    };

    const removeFromCart = (prod) => {
        setCartBasket(prevCartBasket => {
            const newCartBasket = prevCartBasket.filter(item => item._id !== prod._id);
            localStorage.setItem('cartBasket', JSON.stringify(newCartBasket));
            calculateCartSubtotal(newCartBasket);
            return newCartBasket;
        });
        setCartQuantity(prevQuantity => {
            const product = cartBasket.find(item => item._id === prod._id);
            const newQuantity = prevQuantity - (product ? product.quantity : 0);
            localStorage.setItem('cartQuantity', JSON.stringify(newQuantity));
            return newQuantity;
        });
    };

    useEffect(() => {
        const handleStorage = () => {
            setUser(JSON.parse(localStorage.getItem('user')));
            setIsAuth(JSON.parse(localStorage.getItem('isAuth')));
            setCartBasket(JSON.parse(localStorage.getItem('cartBasket')));
            setCartQuantity(JSON.parse(localStorage.getItem('cartQuantity')));
            calculateCartSubtotal(JSON.parse(localStorage.getItem('cartBasket')) || []);
        };
        window.addEventListener('storage', handleStorage);
        return () => {
            window.removeEventListener('storage', handleStorage);
        };
    }, []);

    return (
        <ShopMaqoaContext.Provider value={{
            products, setProducts,
            product, setProduct,
            store, setStore,
            currentRegister, setCurrentRegister, signUp,
            user, setUser, isAuth, signIn, logout,
            cartBasket, cartSubtotal, cartQuantity, addToCart, subtractFromCart, removeFromCart,
            showModal, toggleModal,
            purchase, setPurchase,
            onSubmitPurchase,
            resetCart,
            stores, setStores
        }}>
            {children}
        </ShopMaqoaContext.Provider>
    );
};
