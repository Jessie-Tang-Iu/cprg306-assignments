"use client";

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import items from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";


export default function Page() {

    const [itemList, setItems] = useState(items);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (item) => 
    {
        setItems(prev => [...prev, item]);
    }

    const handleItemSelect = (item) => {
        const cleanedName = item.name.split(/[,\p{Emoji_Presentation}]/u)[0].trim().toLowerCase();
        setSelectedItemName(cleanedName);
        console.dir(cleanedName);
    }

    return(
        <main className="px-5 py-3 bg-slate-950">
            <h1 className="text-3xl font-bold">Shopping List</h1>
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-0.5">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={itemList} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
            <Link href="/" className="text-cyan-600 underline hover:text-cyan-300">Home</Link>
        </main>
    );
}