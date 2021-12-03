import React from 'react'
import {CartState} from "../context/Context"

export const FilterContainer = () => {

    const {filterState: { byStock, byFastDelivery, sort},filterDispatch} = CartState();

    /* console.log( byStock, byFastDelivery, sort); */
    
    return (
        <div className="filter-container">
        <span className="filter-title"> Filter Products </span>
            <span> <input type="radio" label="Low To High" name="group1" onChange={() => {
                filterDispatch({
                    type:"SORT_BY_PRICE",
                    payload: "lowToHigh"
                })
            }} checked={sort === "lowToHigh" ? true: false} /> Low To High </span>
            <span> <input type="radio" label="High to Low" name="group1" onChange={() => {
                filterDispatch({
                    type:"SORT_BY_PRICE",
                    payload: "highToLow"
                })
            }} checked={sort === "highToLow" ? true: false} /> High To Low </span>
            <span> <input type="checkbox" label="Include out of stock" name="group1" onChange={() => {
                filterDispatch({
                    type: "FILTER_BY_STOCK",
                    
                })
            }} checked={byStock} /> Include out of stock </span>
            <span> <input type="checkbox" label="Fast Delivery Only" name="group1" onChange={() => {
                filterDispatch({
                    type: "FILTER_BY_DELIVERY",
                })
            }} checked={byFastDelivery} /> Fast delivery only </span>
            {/* <span>
                <label className="rating-title"> Rating: </label>
                <Ratings style={{ cursor: "pointer" }} />
            </span> */}
            <button className="clear-btn" onClick={() => {
                filterDispatch({
                    type: "CLEAR_FILTERS"
                })
            }}> Clear filters </button>
        </div>
    )
}
