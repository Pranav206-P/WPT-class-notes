import { Link } from "react-router-dom";

export function NavigationBar() {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to={"/register"}>Register</Link>
        </div>

    )
}