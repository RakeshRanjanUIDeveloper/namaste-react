
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    return (
        <div className='body'>
            <div className="filter">
                <div className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
                    setListOfRestaurants(filteredList)
                }}>Top Rated Restaurants</div>
                <div className='search'>
                    <input type='text' />
                </div>
            </div>

            <div className='res-container'>
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}
export default Body