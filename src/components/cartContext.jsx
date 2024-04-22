import React, { createContext, useContext, useState } from "react";
//create a context for the cart below
const CartContext = createContext();


//create a hook here that will access the cart context and will be used when refferencing this script
export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]); //this here is an empty array, cant start with an array with items
    

//used an arrow function here to push items to a cart, will attach this to a button
    const addToCart = (ticket) => {
        setCartItems([...cartItems, ticket]);
    };
    //will attach this to a remove from cart button, it will remove the item using the item ID
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };
    //this method checks if the id of the item matches the one provided, and if it matchesm it will update the quantity and if it doesnt not match, it will return the item unchanged
    const updateQuantity = (id, quantity) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };
    //calculates the total amount of the items in the cart, the reduce function will accumulate the total amount by adding the price together by multiplying it with the quantity
    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalAmount }}
        >
            {children}
        </CartContext.Provider>
    );
};

