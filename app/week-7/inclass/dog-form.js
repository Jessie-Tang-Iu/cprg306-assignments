"use client";
import { useState } from "react";


export default function DogForm({ onAddDog, dogArray, closeFormFunc }) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [PhotoUrl, setPhotoUrl] = useState("");

    const handleIdChange = (event) => setId(event.target.value);
    const handleNameChange = (event) => setName(event.target.value);
    const handleBreedChange = (event) => setBreed(event.target.value);
    const handlePhotoUrlChange = (event) => setPhotoUrl(event.target.value);

    const checkId = (id) =>
    {
        const numericId = Number(id); // ensure it's a number

        if (numericId <= 0 || !Number.isInteger(numericId)) {
            alert("ID must be a positive integer");
            return false;
        }

        const idExists = dogArray.some(dog => dog.id === numericId);
        if (idExists) {
            alert("ID already exists");
            return false;
        }

        return true;
    }

    const submitFunction = (event) => {
        event.preventDefault();

        if (checkId(id))
        {
            let dog = {
                id: id,
                name: name,
                breed: breed,
                PhotoUrl: PhotoUrl
            };

            onAddDog(dog);
            closeFormFunc();
        }

        setId("");
        setName("");
        setBreed("");
        setPhotoUrl("");
    }

    return(
        <div>
            <form onSubmit={submitFunction} className="bg-green-50 rounded p-5 text-black max-w-md">
                <h2 className="text-2xl mb-2">Add a new dog for Adoption</h2>
                <div className="mb-2">
                    <label className="inline-block w-40">ID: </label>
                    <input className="border-2 rounded" type="number" onChange={handleIdChange} value={id} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Dog Name: </label>
                    <input className="border-2 rounded" type="text" onChange={handleNameChange} value={name} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Breed: </label>
                    <input className="border-2 rounded" type="text" onChange={handleBreedChange} value={breed} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Photo URL: </label>
                    <input className="border-2 rounded" type="text" onChange={handlePhotoUrlChange} value={PhotoUrl} />
                </div>
                <div className="mb-2">
                    <button
                        className="bg-blue-500 text-white rounded px-3 py-2 hover:bg-green-500 active:bg-amber-400 cursor-pointer"
                        type="submit"
                    >Add New Dog</button>
                </div>
            </form>
        </div>
    );
}