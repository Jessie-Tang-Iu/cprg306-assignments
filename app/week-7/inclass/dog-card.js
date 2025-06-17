


export default function Dog( {dogObj} ) {

    const {id, name, breed, photoUrl} = dogObj;

    return(
        <div className="rounded-lg bg-blue-300 p-2 max-w-96">
            <div className="inline-block align-middle">
                { photoUrl && (<img className="max-h-28 rounded" src={photoUrl} />) }
            </div>
            <div className="inline-block ml-3 align-middle">
                <h3 className="text-lg font-bold">{name}</h3>
                <p>ID: {id}</p>
                <p>Breed: {breed}</p>
            </div>
        </div>
    );
}