import Link from "next/link";
import ItemList from "./item-list";



export default function Page(){

    return(
        <main className="px-5 py-3 bg-slate-950">
            <h1 className="text-3xl font-bold">Shopping List</h1>
            <ItemList />
            <Link href="/" className="text-cyan-600 underline hover:text-cyan-300">Home</Link>
        </main>
    );
}