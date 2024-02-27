import RestaurantComponent,{ withPromotedLabel } from "./RestaurantComponent";
import { ResData } from "../utils/common";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


export const Body =()=>{
    const [data,setData]=useState([]);
    const [filterData,setFilterData]=useState([]);

    console.log(filterData);

    const [searchText,setSearchText]=useState("");

    const onlineStatus = useOnlineStatus();

    const RestaurantComponentPromotedLabel = withPromotedLabel(RestaurantComponent);

    const { loggenIn, setUserName } =useContext(UserContext);

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
            <div className="flex">
                <div className="flex">
                    <input className="border p-2 m-2 rounded-lg" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button className="p-2 m-2 border bg-gray-100 rounded-lg  hover:bg-gray-300" onClick={()=>{
                        const filteredSearchRestaurant = data.filter((restaurant)=>{
                            //console.log(restaurant.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()))
                           return restaurant.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                        } );
                        console.log(filteredSearchRestaurant);
                        setFilterData(filteredSearchRestaurant);
                    }}>Search</button>
                </div>
                <div className="p-2 m-2 border bg-gray-100 rounded-lg hover:bg-gray-300">
                    <button onClick={()=>{
                        setData(data.filter((restaurant)=>restaurant.card.card.info.avgRatingString>4))
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="p-2 m-2 border bg-gray-100 rounded-lg hover:bg-gray-300">
                    <input value={loggenIn} onChange={(e)=>{
                        setUserName(e.target.value);
                    }}/>
                </div>
               
            </div>
            <div className="flex flex-wrap">
               {filterData?.map((restaurant=>(
                <Link key={restaurant.card.card.info.id} to={"/restaurant/"+restaurant.card.card.info.id}>
                    {/* {if promoted add label to component} */}
                    {
                        restaurant.card.card.info.promoted?
                        <RestaurantComponentPromotedLabel ResData={restaurant.card.card.info}/>:
                        <RestaurantComponent  ResData={restaurant.card.card.info}/> 
                    }
                    
                </Link>
               )))
               }

            </div>
            
        </div>
    )
}