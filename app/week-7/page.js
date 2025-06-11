"use client";

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import items from "./items.json";
import { useState } from "react";


export default function Page() {

    const [itemList, setItems] = useState(items);

    const handleAddItem = (item) => 
    {
        setItems(prev => [...prev, item]);
    }

    return(
        <main className="px-5 py-3 bg-slate-950">
            <h1 className="text-3xl font-bold">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={itemList} />
            <Link href="/" className="text-cyan-600 underline hover:text-cyan-300">Home</Link>
        </main>
    );
}