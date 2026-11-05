import { useMemo, useState } from "react"

export function ExpensiveCalculation() {

    const [x, setX] = useState(10);
    const [y, setY] = useState(50);



    const optimizedTotal = useMemo(() => {
        let total = 0;
        for (var i = 1; i <= 1000000000; i++) {
            total = total + x;
        }
        return total;
    }, [x]);


    const changeX = () => {
        setX(x + 5);
    }

    const changeY = () => {
        setY(y + 3);
    }

    return (
        <div>
            <h3>x= {x}, y={y}</h3>
            <h3>Total = {optimizedTotal}</h3>

            <button onClick={changeX}>change x</button>
            <button onClick={changeY}>change y</button>

        </div>
    )
}