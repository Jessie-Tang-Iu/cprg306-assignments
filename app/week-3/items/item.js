

export default function Item(item) {

    let {name: iName} = item;

    return (
        <div>
            <p className="px-4 py-2 m-8 bg-slate-800">
                <p>{iName}</p>
                <p className="text-lg font-bold">{item.name}</p>
                <p>Buy {item.quantity} in {item.category}</p>
            </p>
        </div>
    );
}