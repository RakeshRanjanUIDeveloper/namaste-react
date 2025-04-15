import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({resData}) =>{
    const {name, cloudinaryImageId, cuisines, avgRating, costForTwo} = resData.info;
    return (
        <div className='res-card'>
            <img src={CDN_URL +cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} star</h4>
            <p>{costForTwo}</p>
        </div>
    )
}
export default RestaurantCard;