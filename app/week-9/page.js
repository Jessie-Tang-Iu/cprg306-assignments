"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";


export default function SignInPage() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    console.dir(user);

    return(
        <main>
            <header>
                <h1>Firebase Auth</h1>
            </header>

            { user ? (
                <section>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <Link href="/week-9/shopping-list/" className="text-cyan-600 underline hover:text-cyan-300">Link to Shopping List</Link>
                    <div>
                        <button 
                        onClick={handleSignOut}
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                        type="button">Sign Out</button>
                    </div>
                </section>
            ) : (
                <section>
                    <button 
                    onClick={handleSignIn}
                    className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                    type="button">Sign in with GitHub</button>
                </section>
            ) }
        </main>
    );
}