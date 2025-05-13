import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">Hello World!</h1>
      <p>Test123</p>

      <h2>Course Example Links</h2>
      <ul>
        <li> <Link href="./week-2/">Week 2 - Intro to React</Link> </li>
      </ul>
    </main>
  );
}
