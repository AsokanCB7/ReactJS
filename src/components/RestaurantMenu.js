import { useEffect,useState } from "react";
import { MENU_URL } from "../utils/config";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{

    const params = useParams();
    const [menuList, setMenuList] = useState([]);
    const [resDetails, setResDetails] = useState([]);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const menuData = await fetch(MENU_URL+params.resid);
        const jsonData = await menuData.json();

        setResDetails(jsonData?.data.cards[0].card.card.info);
        setMenuList(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards);
    }
    return (
        <div>
            <h1>{resDetails.name}</h1>
            <p>{resDetails.cuisines}</p>
            <h3>{resDetails.costForTwoMessage}</h3>
            <h1>Menu</h1>
            <ul>
                

           { menuList.map((menu)=> <li key={menu.card.info.id}>{menu.card.info.name} - {menu.card.info.price/100}</li>
            )}
               
            </ul>
        </div>
    )
}
export default RestaurantMenu;