"use client";

import { useEffect, useState } from "react";
import Artwork from "./artwork";


export default function Gallery() {

    const [artworkIds, setArtworkIds] = useState([]);
    const [galleryDisplay, setGalleryDisplay] = useState([]);


    async function getListOfArtIds() {
        try {
            const response = await fetch("https://api.artic.edu/api/v1/artworks/search?q=monet");
            if (!response.ok) console.dir(response.status);
            const data = await response.json();
            // console.dir(data);
            let idArray = data.data.map( (artObj) => (artObj.id) );
            console.dir(idArray);
            setArtworkIds(idArray);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
        
    }

    useEffect( () => {
        getListOfArtIds();
    } , [])

    async function getArtworkById( {artId} ) {
        try {
            const response = await fetch(`https://api.artic.edu/api/v1/artworks/${artId}`);

            if (!response.ok){
                console.dir(response.status);
            }
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect( () => {
        async function  buildGallery() {
            if ( artworkIds != null && artworkIds.length > 0)
            {
                let thisGallery = [];
                for (let i = 0; i < artworkIds.length; i++)
                {
                    let thisArt = await getArtworkById( {artId: artworkIds[i]} );
                    thisGallery.push(thisArt);
                }
                console.dir(thisGallery);
                setGalleryDisplay(thisGallery);
            }
        }
        buildGallery();
        
    } , [artworkIds] );

    return(
        <section>
            {
                galleryDisplay.map(
                    (art) => ( <Artwork artworkObj={art} key={art.id} />)
                )
            }
        </section>
    );
}