import React, { createContext } from 'react';

const CartContext = createContext({
    cart: [],
    handleDelete: () => {},
});

export default CartContext;