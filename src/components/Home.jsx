import React from 'react'
import { CartState } from '../context/Context'
import { FilterContainer } from './FilterContainer';
import SingleProduct from './SingleProduct';

const Home = () => {
    const {state: {products}} = CartState();
    console.log(products);
  
    return (
        <div className="home-container">
            <FilterContainer />

            <div className="product-container">
                {
                    products.map((product) => (
                        <SingleProduct product={product} key={product.id} />
                    ) ) 
                }
            </div>
        </div>
    )
}

export default Home
