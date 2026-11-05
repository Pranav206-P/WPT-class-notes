import { Component } from "react";

export class Introduction extends Component{
    
    render(){
        console.log(this.props);
        const {headingText, description, buttonText} =  this.props;
        return (
            <div>
                <h1>{headingText}</h1>
                <p>{description}</p>
                <button>{buttonText}</button>
            </div>
        )
    }
}