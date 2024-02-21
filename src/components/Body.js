import RestaurantComponent from "./RestaurantComponent";
import { ResData } from "../utils/common";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body =()=>{
    const [data,setData]=useState([]);
    const [filterData,setFilterData]=useState([]);

    const [searchText,setSearchText]=useState("");

    const onlineStatus = useOnlineStatus();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const result =  await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=13.079628&lng=77.49703269999999&str=Non%20Veg%20Restaurants&trackingId=f0118a5f-7802-4e83-a928-05d6999317b4&submitAction=ENTER&queryUniqueId=8413668d-2c5b-5bc8-d46a-2afc4b864c8a");
       
        const json = await result.json();
        setData(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
        setFilterData(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
    }
    if(data.length ===0){
        return <Shimmer/>;
    }

    if(!onlineStatus){
        return (
            <h1>Seems you're internt is broken. Please check the connection.</h1>
        )
    }


    return(
        <div className="body">
            <div className="search-rate-container">
                <div className="search-container">
                    <input className="searchText" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button className="btn-search" onClick={()=>{
                        const filteredSearchRestaurant = data.filter((restaurant)=>{
                            //console.log(restaurant.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()))
                           return restaurant.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                        } );
                        console.log(filteredSearchRestaurant);
                        setFilterData(filteredSearchRestaurant);
                    }}>Search</button>
                </div>
                <div className="btn-toprated">
                    <button onClick={()=>{
                        setData(data.filter((restaurant)=>restaurant.card.card.info.avgRatingString>4))
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
               
            </div>
            <div className="res-container">
               {filterData?.map((restaurant=>(
                <Link key={restaurant.card.card.info.id} to={"/restaurant/"+restaurant.card.card.info.id}><RestaurantComponent  ResData={restaurant.card.card.info}/> </Link>
               )))
               }

            </div>
            
        </div>
    )
}