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
        <div className="header">
            <div className="logoContainer">
                <div className="logo">
                    <img className="imglogo" src={LOGO_URL}/>
                </div>
            </div>
                <div className="nav-items">
                    <ul>
                    <li>Online Status : {onlineStatus? "Online" : "Offline"}</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/grocery">Grocery</Link></li>
                        <li>Cart</li>
                        <button className="btn-login" onClick={()=>{
                           btnLogin==="Login"? 
                            setBtnLogin("Logout"):
                            setBtnLogin("Login");
                        }}>{btnLogin}</button>
                    </ul>
                </div>
        </div>
    );

}
export default Header;