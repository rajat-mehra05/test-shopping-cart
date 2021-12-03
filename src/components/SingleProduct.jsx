import { CartState } from "../context/Context"

const SingleProduct = ({product}) => {

   const {state: {cart}, dispatch} =  CartState()

    return (
        <div className="single-product">
            <div className="product-card">
                <img src={product.image_of_product} alt="product-pic" height="340px" width="250px" />
                    <p className="card-title"> {product.product_name} </p>
                    <p style={{color: "maroon", fontWeight:"bold"}} className="card-price"> <span> Price: </span>  ₹ {product.selling_price} </p>
                    <p className="card-quantity"> In Stock:  {product.quantity} </p>
                    {product.fast_delivery ? (
                        <p style={{color: "green", fontWeight:"bold"}}>Fast Delivery</p> 
                    ) : (
                        <p style={{color: "green", fontWeight:"bold"}}> Will be delivered in 7 days </p>
                    ) }
                    <p>

                    {/*  <Ratings rating={product.ratings} />    */}    
                    </p>
                    {
                        cart.some((prod) => prod.id === product.id) ? (

                    <button className="add-btn" onClick={() => {
                          dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product
                          })
                      }}> Remove from Cart </button>  
                        ) : (

                      <button className="add-btn" onClick={() => {
                          dispatch({
                              type: "ADD_TO_CART",
                              payload: product
                          })
                      }}> Add to Cart </button>  
                        )
                    }
                    </div>
                    </div>
    )
}

export default SingleProduct
