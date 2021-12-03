import React from 'react'
import { CartState } from '../context/Context'
import { FilterContainer } from './FilterContainer';
import SingleProduct from './SingleProduct';

const Home = () => {
    const {state: {products},
    filterState: { sort, byStock, byFastDelivery, searchQuery },
} = CartState();

    const filterProducts = () => {
        let filteredProducts = products;

        if(sort) {
            filteredProducts = filteredProducts.sort((a,b) => sort === "lowToHigh" ? a.selling_price - b.selling_price : b.selling_price - a.selling_price  )
        }

        if(!byStock) {
           filteredProducts = filteredProducts.filter((prod) => prod.inStock)
        }

        if(byFastDelivery) {
            filteredProducts = filteredProducts.filter((prod) =>  prod.fast_delivery)
        }

        if(searchQuery) {
            filteredProducts = filteredProducts.filter((prod) =>
                    prod.name.toLowerCase().includes(searchQuery)
            )
        }

        return filteredProducts;
    }
   
    return (
        <div className="home-container">
            <FilterContainer />

            <div className="product-container">
            {filterProducts().map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
            </div>
        </div>
    )
}

export default Home
