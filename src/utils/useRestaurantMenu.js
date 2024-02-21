import { MENU_URL } from "../utils/config";
import { useEffect, useState } from "react";

const useRestaurantMenu =(resid)=>{
    const [menuList, setMenuList] = useState([]);
    const [resDetails, setResDetails] = useState([]);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const menuData = await fetch(MENU_URL+resid);
        const jsonData = await menuData.json();

       // setResDetails(jsonData?.data.cards[2].card.card.info);
        setResDetails(jsonData?.data.cards[2].card.card.info);
        setMenuList(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards);
    }

    return { menuList, resDetails} ;
}

export default useRestaurantMenu;