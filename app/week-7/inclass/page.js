"use client";

import Link from "next/link";
import { useState } from "react";
import dogData from "./dogs.json"
import DogList from "./dog-list";
import DogForm from "./dog-form";


export default function Page() {

    let dogArray = dogData.map( (dog) => ({...dog}) )

    const [dogList, setDogList] = useState(dogArray);

    const handleAddDog = (dog) => 
    {
        setDogList(prev => [...prev, dog]);
    }

    return(
        <main>
            <h1 className="text-3xl font-bold">In Class Example</h1>
            <DogForm onAddDog={handleAddDog} dogArray={dogList} />
            <DogList dogArray={dogList} />
            <Link href="/" className="text-cyan-600 underline hover:text-cyan-300">Home</Link>
        </main>
    );
}