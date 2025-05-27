import Link from "next/link";


export default function Home() {

  let linkStyles = "text-cyan-600 underline hover:text-cyan-300";

  return (
    <main>
      <h1 className="text-3xl"><strong>CPRG 306: Web Development 2 - Assignments</strong></h1>
      <br />
      <h2>Course Assignment Links : </h2>
      <ul>
        <li> <Link href="./week-2/" className={linkStyles}>Week 2 - Link To My Week 2 Assignment</Link> </li>
        <li> <Link href="./week-3/objects" className={linkStyles}>Week 3 - objects</Link> </li>
        <li> <Link href="./week-3/props" className={linkStyles}>Week 3 - props</Link> </li>
        <li> <Link href="./week-3/items" className={linkStyles}>Week 3 - Link To My Week 3 Assignment</Link> </li>
        <li> <Link href="./week-4/functions/" className={linkStyles}>Week 4 - Functions</Link> </li>
        <li> <Link href="./week-4/counter/" className={linkStyles}>Week 4 - Counter</Link> </li>
        <li> <Link href="./week-4/" className={linkStyles}>Week 4 - Link To My Week 4 Assignment</Link> </li>
      </ul>
    </main>
  );
}
