import { LOGO_URL } from "../utils/config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

    const [btnLogin, setBtnLogin] = useState('Login');

    const onlineStatus = useOnlineStatus();

    useEffect(()=>{
        console.log('useeffect called');
    });
    return(
        <div className="flex justify-between shadow-lg bg-pink-100">
                <div >
                    <img className="w-28 rounded-lg" src={LOGO_URL}/>
                </div>
                <div >
                    <ul className="flex flex-wrap" >
                        <li className="p-4 m-4 align-middle">Online Status : {onlineStatus? "Online" : "Offline"}</li>
                        <li className="p-4 m-4 align-middle"><Link to="/">Home</Link></li>
                        <li className="p-4 m-4 align-middle"><Link to="/about">About Us</Link></li>
                        <li className="p-4 m-4 align-middle"><Link to="/contact">Contact Us</Link></li>
                        <li className="p-4 m-4 align-middle"><Link to="/grocery">Grocery</Link></li>
                        <li className="p-4 m-4 align-middle">Cart</li>
                        <li className="p-4 m-4 align-middle"><button className="border" onClick={()=>{
                           btnLogin==="Login"? 
                            setBtnLogin("Logout"):
                            setBtnLogin("Login");
                        }}>{btnLogin}</button></li>
                    </ul>
                </div>
        </div>
    );

}
export default Header;