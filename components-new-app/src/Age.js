import React from "react";
//import { Welcome } from "./Welcome";

export class Age extends React.Component{
    render(){
        return  (
            <div>
                {this.props.age > 18 && <p>Your age is {this.props.age}</p>}
                {this.props.age < 18 && <p>Your are very young!</p>}
            </div>
       )
    }
}