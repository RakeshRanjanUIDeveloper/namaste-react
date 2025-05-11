import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId)
  if (!resInfo) {
    return <h2>Loading menu...</h2>;
  }
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
    sla,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  // Find menu items dynamically
  const regularCards = resInfo?.cards?.find(
    (card) => card.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard.cardGroupMap.REGULAR.cards;

  const itemCards = regularCards?.find(
    (c) => c.card?.card?.itemCards
  )?.card?.card?.itemCards || [];

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <div className="res-menu-header">
        <h2>
          {avgRating} ({totalRatingsString}) - {costForTwoMessage}
        </h2>
        <h4>{cuisines?.join(', ')}</h4>
        <p>Outlet {locality}</p>
        <p>{sla?.slaString}</p>
      </div>

      <h2>MENU LIST</h2>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - ₹{(item.card.info.price ?? item.card.info.defaultPrice) / 100}
            </li>
          ))
        ) : (
          <li>No menu items available</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
