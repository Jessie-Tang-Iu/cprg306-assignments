import Link from "next/link";


export default function StudentInfo() {
    return (
        <main>
            <h1>My Name: Jessie Tang</h1>
            <ul>
                <li> <Link href="https://github.com/Jessie-Tang-Iu/cprg306-assignments.git" className="text-cyan-600 underline hover:text-cyan-300">My GitHub repository</Link> </li>
            </ul>
        </main>
    );
}