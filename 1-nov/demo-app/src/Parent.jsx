import { useState } from "react";
import { Greeting } from "./Greeting";

export function Parent(){

    const [count, setCount] = useState(0);

    function increaseCount(){
        setCount(count+2)
    }
    
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={increaseCount}>+</button>
            <Greeting name="Aman" />
        </div>
    )
}