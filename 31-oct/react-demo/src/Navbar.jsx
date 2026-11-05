import { Component } from "react";

export class Navbar extends Component {

    render() {
        // to provide something 
        // render() will provide or display the ui for the class component
        return (
            <div>
                <div>
                    <img></img>
                </div>
                <div>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>

        )
    }
}