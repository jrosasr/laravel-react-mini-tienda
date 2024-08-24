import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const productInCartIndex = cart.findIndex((item) => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            { ...product, quantity: 1 }
        ]))
    }

    const removeToCart = (id) => {
        setCart(cart.filter((item) => item.id !== id))
        setCart(prevState => prevState.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <ShoppingCartContext.Provider
            value={{ cart, addToCart, removeToCart, clearCart }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}