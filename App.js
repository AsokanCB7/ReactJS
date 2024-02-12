import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement ==> ReactElement - JS Object ==> HTMLElement (render)

//const headingElement = React.createElement("div",{id:'heading'},"Namaste Raect");

//JSX ==> Babel transpiles it to React.createElement ==> ReactElement - JS Object ==> HTMLElement (render)

const TitleComponent = ()=>(<h1 id="heading">Converting element to component and doing Component Composition</h1>);

const HeadingComponent =()=>{

return(
    <>
    {TitleComponent()}
    <TitleComponent/>
    <h1 className="heading">Namaste Raect using Functional Component </h1>;
    </>
) 
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);