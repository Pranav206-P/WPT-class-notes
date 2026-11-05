import { useState } from "react"

export function RegistrationForm(){

    const [formData, setFormData] = useState({name:"", phone:"", email:"", password:""});

    const handleChange = (event) => {
        console.log("typing...");
        console.log(event.target.value);
        
        // read the field value which user has typed
        // put that value in the state 
        // old: {name:"", phone:"", email:"", password:""}
        // new : {name: "Rahul"}
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(formData);
    }


    return (
        <div>
            <h3>Register Today</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label> 
                    <input type="text" placeholder="Enter Name" name="name" onChange={handleChange}/>
                </div>
                <br/>
                <div>
                    <label>Phone</label>
                    <input type="text" placeholder="Enter Phone" name="phone" onChange={handleChange}/>
                </div>
                <br/>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Enter Email" name="email" onChange={handleChange}/>
                </div>
                <br/>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={handleChange}/>
                </div>
                <br/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}