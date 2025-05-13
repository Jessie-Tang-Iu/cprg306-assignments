import Link from "next/link";
import MyFirstComponent from "../_components/my-first-component";


export default function WeekTwo() {
    return (
        <main>
            <h1>Second Page</h1>
            <p>This is the second page of my React app!</p>
            <MyFirstComponent />
            <Link href="/" className="text-cyan-600 underline hover:text-cyan-300">Home</Link>
        </main>
    );
}