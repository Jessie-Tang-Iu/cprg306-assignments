"use client";

import { useEffect, useState } from "react";


export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([]);
    const [expandedMeals, setExpandedMeals] = useState({});

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

    async function fetchMealDetails(idMeal) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            if (!response.ok) console.dir(response.status);
            const data = await response.json();
            console.dir(data);
            return data.meals ? data.meals[0] : null;
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    async function handleToggleMeal(mealId) {
        if (expandedMeals[mealId]) {
            setExpandedMeals(prev => {
                const updated = { ...prev };
                delete updated[mealId];
                return updated;
            });
        } else {
            const details = await fetchMealDetails(mealId);
            setExpandedMeals(prev => ({
                ...prev,
                [mealId]: details
            }));
        }
    }

    useEffect(() => {
        if (ingredient) {
            fetchMealIdeas(ingredient).then(setMeals);
            setExpandedMeals({});
        }
    }, [ingredient]);

    function getIngredientsList(meal) {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim()) {
                ingredients.push(`${ingredient} - ${measure}`);
            }
        }
        return ingredients;
    }

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
                ingredient && meals.length > 0 &&
                <div>
                    <p>Here are some meal ideas using {ingredient}:</p> 
                    {meals.map(
                        (meal) => ( 
                            <div key={meal.idMeal} 
                                className="mx-20 my-2 p-5 bg-blue-400 rounded"
                                onClick={() => handleToggleMeal(meal.idMeal)}
                            >
                                <h3 className="text-lg">{meal.strMeal}</h3>
                                {expandedMeals[meal.idMeal] && (
                                <ul className="mt-2 list-disc list-inside text-sm">
                                    {getIngredientsList(expandedMeals[meal.idMeal]).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            </div>
                        )
                    )}
                </div>
                
            }
        </section>
    );
}