import { useCallback, useState } from "react"
import { CounterChild } from "./CounterChild";

export function Counter(){
    // parent component

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("hello");

    const increaseCount = useCallback(() => {
        setCount(count + 10);
    }, [count]);


    const changeMessage = ()=>{
        setMessage(message+" bye");
    }

    /*
    () => {
        setCount(0 + 10);
    }
    */
    // when it comes to the functions, then on every render functions will get a new reference 
    // even if the child component is memoized then memo function will also not work 
    // beacuse in all the renders the function reference will be different 
    // when we pass a function in the props then reference is compared not the value 
    // hence the result is that the memo function will always get the difference in the prop

    return (
        <div>
            <h2>Count = {count}</h2>
            <h2>Message: {message}</h2>
            <button onClick={changeMessage}>Change Message</button>
            <CounterChild plusClickHandler={increaseCount} />
        </div>
    )
}