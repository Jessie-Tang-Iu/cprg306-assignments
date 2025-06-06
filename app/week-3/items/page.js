import Link from "next/link";
import ItemList from "./item-list";


export default function Page() {
    return (
        <main>
            <h1 className="text-3xl font-bold">Shopping List</h1>
            <ItemList />
            <Link href="/" className="text-cyan-600 underline hover:text-cyan-300">Home</Link>
        </main>
    );
}