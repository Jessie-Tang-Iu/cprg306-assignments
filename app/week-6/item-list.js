"use client";

import { useState } from "react";
import Item from "./item";
import ItemData from "./items.json";


export default function ItemList() {

    let itemArray = ItemData.map( (item) => ( {...item} ) );

    let [sortBy, setSortBy] = useState("name");

    const handleSortBy = (event) => setSortBy(event.target.value);

    itemArray = itemArray.sort( (a,b) => {
        let sort = sortBy;

        if(sortBy == "grouped category")
        {
            sort = "category";
        } 

        let itemA = a[sort].toUpperCase();
        let itemB = b[sort].toUpperCase();
        if(itemA < itemB) return -1;
        if(itemA > itemB) return 1;
        return 0;
    })

    let groupedItems = itemArray.reduce( ( accumulator, item ) => {

            const category = item.category;

            if(!accumulator[category])
            {
                accumulator[category] = [];
            }

            accumulator[category].push(item);
            return accumulator;
            
        }, {});

    // if(sortBy == "grouped category")
    // {
    //     itemArray.forEach(item => {
    //         const category = item.category;

    //         if(!groupedItems[category])
    //             {
    //                 groupedItems[category] = [];
    //             }

    //         if(!groupedItems[category].includes(item))
    //         {
    //             groupedItems[category].push(item);
    //         }
    //     })
    // }

    return(
        <section>
            <div>
                <label>Sort by:</label>
                <button 
                    className="bg-amber-800 w-30 h-8 m-3 disabled:bg-amber-600" 
                    type="button" 
                    value="name" 
                    onClick={handleSortBy} 
                    disabled={sortBy == "name"}
                >Name</button>
                <button 
                    className="bg-amber-800 w-30 h-8 m-3 disabled:bg-amber-600" 
                    type="button" 
                    value="category" 
                    onClick={handleSortBy} 
                    disabled={sortBy == "category"}
                >Category</button>
                <button 
                    className="bg-amber-800 w-30 h-14 m-3 disabled:bg-amber-600" 
                    type="button" 
                    value="grouped category" 
                    onClick={handleSortBy} 
                    disabled={sortBy == "grouped category"}
                >Grouped Category</button>
            </div>
            <div>
                {
                    sortBy === "grouped category" && (
                       Object.entries(groupedItems).map( ([category, items]) => (
                            <div key={category}>
                                <h2 className="text-2xl capitalize">{category}</h2>
                                {
                                    items.map( item => (
                                        <Item key={item.id} item={item} />
                                    ))
                                }
                            </div>
                        ))
                    )
                }
                {
                    sortBy !== "grouped category" && (
                        itemArray.map( (item) => (
                            <Item key={item.id} item={item} />
                        ))
                    )
                }
            </div>
        </section>
    );
}