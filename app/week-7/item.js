


export default function Item( {item} ) {

    let {id, name, quantity, category} = item;

    return(
        <div className="px-4 py-2 m-4 w-90 bg-slate-800">
            <p className="text-lg font-bold">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
}