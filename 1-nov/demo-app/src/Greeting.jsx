import { memo } from "react";

export const Greeting = memo((props) => {

    console.log("Child component rendered....");

    const { name } = props;

    return (
        <div>
            <h4>Hello, {name}</h4>
        </div>
    )
})
