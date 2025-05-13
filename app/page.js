import Link from "next/link";


export default function Home() {

  // this is a single line comment
  /*
  this is a 
  multi-line comment
   */

    return (
    <main>
      {
        // test
      }
      <h1 className="text-3xl">Hello World!</h1>
      <p>Test123</p>

      <h2>Course Example Links</h2>
      <ul>
        <li> <Link href="./week-2/" className="text-cyan-600 underline hover:text-cyan-300">Week 2 - Intro to React</Link> </li>
      </ul>
    </main>
  );
}
