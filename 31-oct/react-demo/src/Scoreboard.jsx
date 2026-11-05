import { Component } from "react";

export class Scoreboard extends Component{

    constructor(){
        super();
        // console.log("cons called...");
        this.state = {
            score : 0,
            player : ""
        }
    }

    increaseScore = ()=>{
        this.setState({score: this.state.score + 3 });
    }
    
    decreaseScore = ()=>{
       this.setState({score: this.state.score - 1 });
    }

    componentDidMount(){
        // console.log("did mount called...");
    }

    render(){
        // console.log("render called...");
        return (
            <div>
                <h1>Score: {this.state.score} </h1>
                <button onClick={this.increaseScore}>+</button>
                <button onClick={this.decreaseScore}>-</button>
            </div>
        )
    }

}