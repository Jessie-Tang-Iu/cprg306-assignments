

export default function Item({item}) {

    let {name:iName, quantity:iQuantity, category:iCategory} = item;

    return (
        <div>
            <div className="px-4 py-2 m-8 bg-slate-800">
                <p className="text-lg font-bold">{iName}</p>
                <p>Buy {iQuantity} in {iCategory}</p>
            </div>
        </div>
    );
}