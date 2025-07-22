"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import { useEffect, useState } from "react";
import { dbGetAllPosts } from "./_services/blog-service";


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

    const [blogPostList, setBlogPostList] = useState([]);
    useEffect( () => {
        if(user) {
            dbGetAllPosts(user.uid, setBlogPostList);
        }
    }, [user] );

    console.log(blogPostList);

    return(
        <main>
            <header>
                <h1>Firebase Auth</h1>
            </header>

            { user ? (
                <section>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <Link href="/week-10/add-blog-post/" className="text-cyan-600 underline hover:text-cyan-300">Add new Blog Post</Link>
                    <div>
                        <button 
                        onClick={handleSignOut}
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                        type="button">Sign Out</button>
                    </div>
                    <div>
                        <h2>List of {user.displayName} Blog Post</h2>
                        <ul>
                            {
                                blogPostList.map( (post) => {
                                    let postUrl = `/week-10/${post.id}`;
                                    return(
                                        <li key={post.id}>
                                            <Link href={postUrl}>{post.title}</Link>
                                        </li>
                                    )
                                } )
                            }
                        </ul>
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