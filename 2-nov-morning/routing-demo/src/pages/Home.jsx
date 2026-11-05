import { useNavigate } from "react-router-dom"

export function Home(){

    const navigate = useNavigate();

    const viewUserDetailsHandler = (obj) => {
        console.log(obj);
        // navigate(url);
        // useNavigate() hook will return the navigate function 
        navigate("/user-details");
    }

    return (
        <div>
            <h3>Welcome to home page</h3>
            <button onClick={viewUserDetailsHandler}>View user details</button>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis atque nesciunt itaque possimus. Accusantium illo debitis velit voluptas recusandae vero tempore exercitationem cum officia fugiat ipsam temporibus maiores, laboriosam adipisci.</p>
        </div>
    )
}