"use client";

import { useEffect, useState } from "react";


export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        if (!ingredient) return [];

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (!response.ok) console.dir(response.status);
            const data = await response.json();
            // console.dir(data);
            return data.meals || [];
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
        
    }

    async function loadMealIdeas(ingredient){
        try {
            const data = await fetchMealIdeas(ingredient);
            console.dir(data);
            setMeals(data);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }

    }

    useEffect( () => {
        loadMealIdeas(ingredient);
    } , [ingredient])

    return(
        <section>
            <p className="text-3xl font-bold">Meal Ideas</p>
            {
                !ingredient &&
                <div>
                    <p>Select an item to see meal ideas.</p>
                </div>
            }
            {
                ingredient && meals.length === 0 &&
                <div>
                    <p>No meal ideas found for {ingredient}.</p>
                </div>
            }
            {
                <div>
                    <p>Here are some meal ideas using {ingredient}:</p> 
                    {meals.map(
                        (meal) => ( 
                            <div key={meal.idMeal} className="mx-20 my-2 p-5 bg-blue-400 rounded">
                                <h3 className="text-lg">{meal.strMeal}</h3>
                            </div>
                        )
                    )}
                </div>
                
            }
        </section>
    );
}