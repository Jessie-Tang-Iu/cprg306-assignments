"use client";

import { useEffect, useState } from "react";
import Artwork from "./artwork";



export default function SingleArt() {

    const [singleArt, setSingleArt] = useState(null);

    async function getSingleArtWork() {
        try {
            const response = await fetch("https://api.artic.edu/api/v1/artworks/129884");
            

            if (!response.ok){
                console.dir(response.status);
            }
            const data = await response.json();
            console.dir(data);
            setSingleArt(data.data);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect( () => {
        getSingleArtWork();
    } , [] );

    return(
        <section>
            { singleArt && <Artwork artworkObj={singleArt} /> }
        </section>
    );
}