


export default function Artwork( {artworkObj} )
{
    const {
        artist_title,
        title,
        short_description,
        image_id,
    } = artworkObj;

    return(
        <div className="mx-20 my-10 p-5 bg-blue-400 rounded">
            <h3 className="text-lg">{title}</h3>
            <img src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} />
            <ul>
                <li>Artist: {artist_title}</li>
                <li>Description: {short_description}</li>
            </ul>
        </div>
    );
}