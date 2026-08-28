import { createContext, useContext, useState } from "react";

const Cartcontext = createContext();
export function Cartprovider({ children }) {
    const [cart, setCart] = useState([]);
    const Addtocart = (flower) => {
        setCart((prevcart) => {
            const exitingflower = prevcart.find((item) => item.id === flower.id);
            if (exitingflower) {
                return prevcart.map((item) =>
                    item.id == flower.id ? {
                        ...item, qty: item.qty + 1
                    }
                        : item
                );
            }
            return [
                ...prevcart, {
                    ...flower, qty: 1
                }
            ]
        })
    }
    const Decrement = (id) => {
        setCart((prevcart) =>
            prevcart.map((item) =>
                item.id == id ? { ...item, qty: item.qty - 1 } : item).filter((item) => item.qty > 0))
    }

    const Increment = (id) => {
        setCart((prevcart) =>
            prevcart.map((item) =>
                item.id == id ? { ...item, qty: item.qty + 1 } : item))
    }


    const Remove = (id) => {
        setCart((prevcart) => prevcart.filter((item) => item.id !== id))
    }





    return <Cartcontext.Provider value={{ cart, setCart, Addtocart, Decrement, Increment, Remove }} >{children}</Cartcontext.Provider>

}
export function useCart() {
    return useContext(Cartcontext)
}