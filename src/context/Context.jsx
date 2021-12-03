import React, {createContext, useContext, useReducer} from 'react'
import {products} from "../data/products.json"
import { cartReducer, filterReducer } from './Reducers';

const Cart = createContext();

const Context = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart:[]
    });

    //creating another state for filter section

    //fix rating asap

    const [filterState, filterDispatch] = useReducer(filterReducer, {
            byStock: false,
            byFastDelivery: false,
            searchQuery: ""
    })

    return (
        <Cart.Provider value={{state,dispatch,filterState, filterDispatch}}>
                {children}
        </Cart.Provider>
    )
}

export default Context;

export const CartState = () => {
    return useContext(Cart)
}
