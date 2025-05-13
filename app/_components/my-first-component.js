import Link from "next/link";


export default function MyFirstComponent() {
    return (
        <div>
            <h3>My First Component</h3>
            <Link href="https://www.sait.ca" className="text-cyan-600 underline hover:text-cyan-300">SAIT Website</Link>
        </div>
    );
}