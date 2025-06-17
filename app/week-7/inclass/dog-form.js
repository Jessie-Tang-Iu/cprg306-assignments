"use client";
import { useState } from "react";


export default function DogForm({ onAddDog, dogArray }) {

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

        let dog = {
            id: id,
            name: name,
            breed: breed,
            PhotoUrl: PhotoUrl
        };

        checkId(id) && (onAddDog(dog));

        setId("");
        setName("");
        setBreed("");
        setPhotoUrl("");
    }

    return(
        <div>
            <form onSubmit={submitFunction}>
                <h2>Add a new dog for Adoption</h2>
                <div>
                    <label>ID: </label>
                    <input type="number" onChange={handleIdChange} value={id} />
                </div>
                <div>
                    <label>Dog Name: </label>
                    <input type="text" onChange={handleNameChange} value={name} />
                </div>
                <div>
                    <label>Breed: </label>
                    <input type="text" onChange={handleBreedChange} value={breed} />
                </div>
                <div>
                    <label>Photo URL: </label>
                    <input type="text" onChange={handlePhotoUrlChange} value={PhotoUrl} />
                </div>
                <div>
                    <button
                        className="bg-blue-500 text-white rounded px-3 py-2 hover:bg-green-500 active:bg-amber-400"
                        type="submit"
                    >Add New Dog</button>
                </div>
            </form>
        </div>
    );
}