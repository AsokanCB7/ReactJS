import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent contrcutor");
    }

    componentDidMount(){
        console.log("Parent Component Did mount");
    }


    render(){
        console.log("Parent render");
        return (
            <div>
                <h1>About Page</h1>
    
                <UserClass name={"Asokan C B (class)"} location={"BAngalor class"}/>
            </div>
        )
    }
    
}

// const About = ()=>{
//     return (
//         <div>
//             <h1>About Page</h1>
//             {/* <User name={"Asokan C B."} location={"BAngalor func"}/> */}

//             <UserClass name={"Asokan C B (class)"} location={"BAngalor class"}/>
//         </div>
//     )
// }

export default About;