import React, { useEffect, useState } from 'react'   
import { CartState } from '../context/Context'
import {AiFillDelete} from "react-icons/ai"
import {FaShoppingCart} from "react-icons/fa";
import emptyCart from "./emptyCart.jpg"

const Cart = () => {
       const {state: {cart},dispatch} = CartState();

       const [total, setTotal] = useState("");

       useEffect(() => {
            setTotal(cart.reduce((acc,curr) => acc + Number(curr.selling_price)*curr.qty,0 ))
       }, [cart])

    return (
        <div className="home-container">
            <div className="product-container">
                
                {
                    cart.length ? (
                        cart.map((prod) => (
                        <div className="cart-product-container">
                        <img src={prod.image_of_product} alt="product-pic" />
                        <span>  {prod.product_name} </span>
                        <span style={{color: "maroon"}}> ₹ {prod.selling_price} </span>
                            <div className="dropdown-menu">
                            <select id = "dropdown" value={prod.qty} onChange={(e) => {
                                dispatch({
                                    type: "CHANGE_CART_QTY",
                                    payload: {
                                        id: prod.id,
                                        qty: e.target.value
                                    }
                                })
                            }}>
                            {[...Array(prod.inStock).keys()].map((x) => (
                                <option key={x+1}> {x+1} </option>
                            ))}
                            </select>
                            </div>
                            <button style={{height:"30px"}} className="del-btn" onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }> <AiFillDelete size="20" /> </button>
                        </div>
                    ))
                    ) : 
                        <div className="empty-cart-container">

                     <h2 style={{marginBottom:"1rem", color:"maroon"}}> Cart <FaShoppingCart size="20" />  is empty, Go back to Home Page </h2>
                    <img src={emptyCart} alt="emptyCart-pic" height={450} width={450} />
                        </div>
                    
                }

            </div>
            <div className="filter-container summary">
                    <span className="filter-title">Subtotal: ({cart.length}) </span>
                    <span style={{fontSize:"1.5rem"}}> Total: ₹ {total} </span>
                        <button className="add-btn" disabled={cart.length === 0} onClick={()=> alert("This is a demo project, thanks for checking out!")}> Proceed to Checkout </button>
            </div>
        </div>
    )
}

export default Cart
