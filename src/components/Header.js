import { LOGO_URL } from "../utils/config";
import { useState } from "react";

const Header=()=>{

    const [btnLogin, setBtnLogin] = useState('Login');
    return(
        <div className="header">
            <div className="logoContainer">
                <div className="logo">
                    <img className="imglogo" src={LOGO_URL}/>
                </div>
            </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
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