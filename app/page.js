import Link from "next/link";


export default function Home() {
    return (
    <main>
      <h1 className="text-3xl"><strong>CPRG 306: Web Development 2 - Assignments</strong></h1>
      <br />
      <h2>Course Assignment Links : </h2>
      <ul>
        <li> <Link href="./week-2/" className="text-cyan-600 underline hover:text-cyan-300">Week 2 - Link To My Week 2 Assignment</Link> </li>
      </ul>
    </main>
  );
}
