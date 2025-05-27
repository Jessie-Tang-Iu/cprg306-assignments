"use client"

import { useState } from "react";
import Counter from "./counter";
import CounterDisplay from "./counter-display";


export default function CounterPage() {

    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        let currentCount = count;
        if( currentCount <= 9){
            setCount(currentCount + 1);
        }
    }

    const decrementCounter = () => {
        let currentCount = count;
        if( currentCount >=1 )
        {
            setCount(currentCount - 1);
        }
    }

    const resetCounter = () => {
        setCount(0);
    }

    return (
        <main>
            <h1>Simple Counter</h1>
            <p>Current Count: {count}</p>
            <button 
                className="bg-blue-500 text-white rounded p-2 m-2"
                onClick={incrementCounter}
                >Increment</button>
            <button 
                className="bg-blue-500 text-white rounded p-2 m-2"
                onClick={decrementCounter}
                >decrement</button>
            <button 
                className="bg-blue-500 text-white rounded p-2 m-2"
                onClick={resetCounter}
                >Reset</button>

            <Counter curCount={count} incFunc={incrementCounter} />
            <CounterDisplay thisCount={count} />
        </main>
    );
}