"use client";

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useEffect, useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";


export default function Page() {

    const [itemList, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const {user} = useUserAuth();

    const handleAddItem = (item) => 
    {
        setItems(prev => [...prev, item]);
    }

    const handleItemSelect = (item) => {
        const cleanedName = item.name.split(/[,\p{Emoji_Presentation}]/u)[0].trim().toLowerCase();
        setSelectedItemName(cleanedName);
        console.dir(cleanedName);
    }

    useEffect( () => {
        if(user) {
            getItems(user.uid, setItems);
        }
    }, [user] );

    console.log(itemList);

    return(
        <main className="px-5 py-3 bg-slate-950">
            {
                user ? (
                    <section>
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
                    </section>
                ) : (
                    <section>
                        <p>You must be logged in to view this page</p>
                        <Link href="/week-9/" className="text-cyan-600 underline hover:text-cyan-300">Click here to return to the sign in page.</Link>
                    </section>
                )
            }
            
            <Link href="/" className="text-cyan-600 underline hover:text-cyan-300">Home</Link>
        </main>
    );
}