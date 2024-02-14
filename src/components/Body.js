import RestaurantComponent from "./RestaurantComponent";
import { ResData } from "../utils/common";
import { useState } from "react";

export const Body =()=>{
    const [data,setData]=useState(ResData);
    return(
        <div className="body">
            <div className="btn-toprated">
                <button onClick={()=>{
                    setData(data.filter((restaurant)=>restaurant.card.card.info.avgRatingString>4))
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
               {data.map((restaurant=>(
                <RestaurantComponent key={restaurant.card.card.info.id} ResData={restaurant.card.card.info}/> 
               )))
               }

            </div>
            
        </div>
    )
}