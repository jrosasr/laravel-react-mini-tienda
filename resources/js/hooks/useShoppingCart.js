import { useContext } from "react";
import { ShoppingCartContext } from "@/context/shopping-cart.jsx";

export const useShoppingCart = () => {
    const context = useContext(ShoppingCartContext)

    if (context === undefined) {
        throw new Error('useShoppingCart must be used within a ShoppingCardProvider')
    }

    return context
}