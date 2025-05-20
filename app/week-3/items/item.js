

export default function Item(item) {

    let {name, quantity, category} = item;
    
    return (
        <p className="px-4 py-2 m-8 bg-slate-800">
            <p className="text-lg font-bold">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </p>
    );
}