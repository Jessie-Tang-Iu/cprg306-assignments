"use client";
import { useState } from "react";


export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        let currentQuantity = quantity;
        if (quantity < 20) {
            setQuantity(currentQuantity + 1);
        }
    }

    const decrement = () => {
        let currentQuantity = quantity;
        if (quantity > 1) {
            setQuantity(currentQuantity - 1);
        }
    }

    return (
        <main>
            <div style={{display: 'flex', flexDirection: 'row'}} className="px-4 py-2 m-8 bg-slate-800">
                <p style={{flex: 1}} className="text-lg font-bold">{quantity}</p>
                <div style={{flex: 1}}>
                    <button className="bg-blue-500 text-white rounded p-2" onClick={decrement} disabled={quantity <= 1}>-</button>
                    <button className="bg-blue-500 text-white rounded p-2"onClick={increment} disabled={quantity >= 20}>+</button>
                </div>
            </div>
        </main>
    );
}