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
            <div style={{display: 'flex', flexDirection: 'row'}} className="px-4 py-2 m-8 w-40 bg-slate-800">
                <div className="px-5 py-1 mb-3 w-35 rounded border border-blue-500 bg-white focus:bg-orange-100">
                    <label className="text-black">{quantity}</label>
                    <button type="button" className="bg-blue-500 text-white rounded px-3 py-0.5 mr-1 disabled:bg-gray-600" onClick={decrement} disabled={quantity <= 1}>-</button>
                    <button type="button" className="bg-blue-500 text-white rounded px-3 py-0.5 disabled:bg-gray-600" onClick={increment} disabled={quantity >= 20}>+</button>
                </div>
            </div>
        </main>
    );
}