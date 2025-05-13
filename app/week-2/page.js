import Link from "next/link";
import StudentInfo from "./student-info";


export default function Page() {
    return (
      <main>
        <h1>Shopping List</h1>
        <StudentInfo />
        <Link href="/" className="text-cyan-600 underline hover:text-cyan-300">Home</Link>
      </main>
    );
  }