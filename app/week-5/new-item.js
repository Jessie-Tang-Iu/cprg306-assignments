"use client";
import { useState } from "react";


export default function NewItem() {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

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

    const submitFunction = (event) => {
        event.preventDefault();

        let item = {
            iName: name,
            iQuantity: quantity,
            iCategory: category
        };

        alert(`Added item: ${item.iName}, quantity: ${item.iQuantity}, category: ${item.iCategory}`)

        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    const getName = (event) => {
        setName(event.target.value);
    }

    const getCategory = (event) => {
        setCategory(event.target.value);
    }

    return (
        <main>
            <form onSubmit={submitFunction} className="px-4 py-2 m-8 w-100 bg-slate-800">
                <div>
                    <input 
                        required
                        type="text" 
                        className="px-2 py-1 mb-3 w-90 rounded border border-blue-500 bg-white focus:bg-orange-100 text-black" 
                        placeholder="Item name" 
                        onChange={getName} 
                        value={name}
                    />
                </div>
                <div className="mb-3">
                    <div className="px-5 py-1 mb-3 w-35 rounded border border-blue-500 bg-white focus:bg-orange-100">
                        <label className="text-black">{quantity}</label>
                        <button type="button" className="bg-blue-500 text-white rounded px-3 py-0.5 mr-1 disabled:bg-gray-600" onClick={decrement} disabled={quantity <= 1}>-</button>
                        <button type="button" className="bg-blue-500 text-white rounded px-3 py-0.5 disabled:bg-gray-600" onClick={increment} disabled={quantity >= 20}>+</button>
                    </div>
                    <div>
                        <select 
                            className="px-2 py-1 rounded border border-blue-500 bg-white text-black focus:bg-orange-100" 
                            onChange={getCategory}
                        >
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button 
                        className="bg-blue-500 text-white rounded px-3 py-2 w-90 hover:bg-green-500 active:bg-amber-400"
                    >+</button>
                </div>
            </form>
        </main>
    );
}