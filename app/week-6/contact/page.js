import Link from "next/link";
import ContactList from "./contact-list";


export default function ContactPage(){

    return(
        <main className="bg-sky-100 p-10">
            <h1 className="text-3xl text-black">Contact List</h1>
            <ContactList />
            <Link href="/" className="text-cyan-600 underline hover:text-cyan-300">Home</Link>
        </main>
    )
}