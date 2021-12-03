import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom"
import { CartState } from '../context/Context'

const Navbar = () => {
    const {state: {cart}} = CartState();

    return (
        <div className="navbar--container">        
               <h2> <Link to="/" style={{textDecoration: "none", color: "white"}}> Shopping cart  </Link>   </h2>      
                <input type="search" placeholder="Search a product" />
                <button className="cart--btn"> <Link to="/cart">  <FaShoppingCart size="30" /> </Link>   </button>    
                <span id='lblCartCount'> {cart.length}  </span>      
        </div>
    )
}

export default Navbar
