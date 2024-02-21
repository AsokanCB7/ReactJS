

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{

    const { resid } = useParams();
   
    const menuList = useRestaurantMenu(resid);

    if( menuList === null) return <Shimmer/>; 
   
    return (
        <div>
            <h1>{menuList.resDetails.name}</h1>
            <p>{menuList.resDetails.cuisines}</p>
            <h3>{menuList.resDetails.costForTwoMessage}</h3>
             <h1>Menu</h1>
            <ul>
                

           { menuList.menuList.map((menu)=> <li key={menu.card.info.id}>{menu.card.info.name} - {menu.card.info.price/100}</li>
            )}
               
            </ul> 
        </div>
    )
}
export default RestaurantMenu;