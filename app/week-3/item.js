

export default function Item({props}) {

    let item = { 
        name: "", 
        quantity: 0, 
        category: "",
    };

    return (
        <p className="px-4 py-2 m-8 bg-slate-800">
            <p className="text-lg font-bold">{props.name}</p>
            <p>Buy {item.quantity} in {item.category}</p>
        </p>
    );
}