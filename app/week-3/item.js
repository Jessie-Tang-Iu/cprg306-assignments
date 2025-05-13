

export default function Item({name, quantity, category}) {

    return (
        <p className="px-4 py-2 m-8 bg-slate-800">
            <p className="text-lg font-bold">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </p>
    );
}