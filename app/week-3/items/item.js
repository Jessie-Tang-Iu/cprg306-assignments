

export default function Item(item) {

    let {name: itemName, 
        quantity: itemQuantity, 
        category: itemCategory
    } = item;

    return (
        <p className="px-4 py-2 m-8 bg-slate-800">
            <p className="text-lg font-bold">{itemName}</p>
            <p>Buy {itemQuantity} in {itemCategory}</p>
        </p>
    );
}