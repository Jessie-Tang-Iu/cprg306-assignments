"use client";

import Link from "next/link";
import { useState } from "react";
import dogData from "./dogs.json"
import DogList from "./dog-list";
import DogForm from "./dog-form";


export default function Page() {

    let dogArray = dogData.map( (dog) => ({...dog}) )

    const [dogList, setDogList] = useState(dogArray);
    const [formOpen, setFormOpen] = useState(false);

    const handleAddDog = (dog) => 
    {
        setDogList(prev => [...prev, dog]);
    }

    const removeDog = (event) => {
        let thisDogList = dogList.filter( (dog) => dog.id != event.target.id )
        setDogList(thisDogList);
    }

    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);

    
    return(
        <main>
            { formOpen && 
                <div className="absolute w-full h-full bg-gray-700/60 flex flex-col items-center justify-center">
                    <DogForm onAddDog={handleAddDog} dogArray={dogList} closeFormFunc={closeForm} />
                    <button className="cursor-pointer" onClick={closeForm}>Close Form</button>
                </div>
            }
            <h1 className="text-3xl font-bold">In Class Example</h1>
            <div>
                { !formOpen && <button className="cursor-pointer" onClick={openForm}>Open Form</button> }
            </div>
            <DogList dogArray={dogList} removeDogFunc={removeDog} />
            <Link href="/" className="text-cyan-600 underline hover:text-cyan-300">Home</Link>
        </main>
    );
}