import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            count :1,
            count2 :3
        };
        console.log("Child constructor");
    }

    componentDidMount(){
        console.log("Child Component Did mount");
    }

    render(){
        console.log("Child render");
        const {name,location} = this.props;
        const {count} = this.state;

        return (
            <div className="user-card">
                <h1>Count : {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count +1,
                    })
                }}> Count Inc</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: 7676726822</h3>
            </div>
        )
    }

}

export default UserClass;