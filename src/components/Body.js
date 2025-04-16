import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9536392&lng=77.695126&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    };

    const handleSearch = () => {
        const filtered = allRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    };

    const handleTopRated = () => {
        const filtered = allRestaurants.filter((res) => res.info.avgRating > 4.3);
        setFilteredRestaurants(filtered);
    };

    return (
        <div className='body'>
            <div className="filter">
                <div className="filter-btn" onClick={handleTopRated}>Top Rated Restaurants</div>
                <div className='search'>
                    <input
                        type='text'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="search-btn" onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className='res-container'>
                {filteredRestaurants.length === 0 ? (
                    <Shimmer />
                ) : (
                    filteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Body;
