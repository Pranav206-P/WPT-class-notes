import { memo } from "react";

export const CounterChild = memo((props)=>{
   // child component
   console.log("Counter child component rendered");
   const { plusClickHandler } = props;
    return (
        <div>
            <button onClick={plusClickHandler}>+</button>
        </div>
    )
});