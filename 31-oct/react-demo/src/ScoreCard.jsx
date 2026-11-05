import { useState } from "react"

export function ScoreCard() {

    const [score, setScore] = useState(0);

    const increaseScore = () => {
        setScore(score + 3);
    }

    const decreaseScore = () => {
        setScore(score - 1);
    }

    return (
        <div>
            <h1>Score : {score}</h1>
            <button onClick={increaseScore}>+</button>
            <button onClick={decreaseScore}>-</button>
        </div>
    )
}