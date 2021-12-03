import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import {Link, useLocation} from "react-router-dom"
import { CartState } from '../context/Context'

const Navbar = () => {
    const {state: {cart}, filterDispatch} = CartState();

    return (
        <div className="navbar--container">        
               <h2> <Link to="/" style={{textDecoration: "none", color: "white"}}> Shopping cart  </Link>   </h2>      
             {
                useLocation().pathname.split("/")[1] !== "cart" && (

                <input type="search"  aria-label="Search" className="search" placeholder="Search a product" onChange={(e) => 
                filterDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value
                })} />
                )
             }
                <button className="cart--btn"> <Link to="/cart">  <FaShoppingCart size="30" /> </Link>   </button>    
                <span id='lblCartCount'> {cart.length}  </span>      
        </div>
    )
}

export default Navbar
