import React,{ lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const AppLayout = ()=>{
    //authentication
    const [userName,setUserName] = useState();

    useEffect(()=>{
        const data = {
            userName:"Asokan C B"
        };
        setUserName(data.userName);
    },[]);

    return(
        <UserContext.Provider value={{loggenIn:userName, setUserName}}>
            <div id="applayout">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
        
    )
}

const About = lazy(()=>import("./components/About"));
const Grocery = lazy(()=>import("./components/Grocery"));

const appRouter = createBrowserRouter([{
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body/>,
        },
        {
            path:"/grocery",
            element:<Suspense fallback="<h1>Loading....</h1>"><Grocery/></Suspense>,
        },
        {
            path:"/about",
            element:<Suspense fallback="<h1>Loading....</h1>"><About/></Suspense>,
        },{
            path:"/contact",
            element:<Contact/>,
        },{
            path:"/restaurant/:resid",
            element:<RestaurantMenu/>,
        }
    ],
    errorElement:<Error/>
},]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);