import React, { useEffect, useState } from 'react'   
import { CartState } from '../context/Context'

const Cart = () => {
       const {state: {cart,dispatch}} = CartState();

       const [total, setTotal] = useState("");

       useEffect(() => {
            setTotal(cart.reduce((acc,curr) => acc + Number(curr.selling_price)*curr.qty,0 ))
       }, [cart])

    return (
        <div className="home-container">
            <div className="product-container">
                
                {
                    cart.map((prod) => (
                        <div className="cart-product-container">
                        <img src={prod.image_of_product} alt="product-pic" />
                        <span>  {prod.product_name} </span>
                        <span style={{color: "maroon"}}> ₹ {prod.selling_price} </span>
                        </div>
                    ))
                }

            </div>
            <div className="filter-container summary">
                    <span className="filter-title">Subtotal: ({cart.length}) </span>
                    <span style={{fontSize:"1.5rem"}}> Total: ₹ {total} </span>
                        <button className="add-btn" disabled={cart.length === 0}> Proceed to Checkout </button>
            </div>
        </div>
    )
}

export default Cart
