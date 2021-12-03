import React from 'react'
import Ratings from './Ratings'

export const FilterContainer = () => {
    return (
        <div className="filter-container">
        <span className="filter-title"> Filter Products </span>
            <span> <input type="radio" label="Low To High" name="group1" /> Low To High </span>
            <span> <input type="radio" label="High to Low" name="group1" /> High To Low </span>
            <span> <input type="checkbox" label="Include out of stock" name="group1" /> Include out of stock </span>
            <span> <input type="checkbox" label="Fast Delivery Only" name="group1" /> Fast delivery only </span>
            <span>
                <label className="rating-title"> Rating: </label>
                <Ratings style={{ cursor: "pointer" }} />
            </span>
            <button className="clear-btn"> Clear filters </button>
        </div>
    )
}
