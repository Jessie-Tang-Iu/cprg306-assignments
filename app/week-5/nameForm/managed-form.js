"use client";

import { useState } from "react";


export default function RegistrationForm() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [subscription, setSubscription] = useState("false");
    const [message, setText] = useState("");

    const submitFunction = (event) => {
        event.preventDefault();

        let registrationObject = {
            fname: fullName,
            mail: email,
            bDay: date,
            plan: subscription,
            msg: message
        };

        alert(`
            Name: ${registrationObject.fname} |
            Email: ${registrationObject.mail} |
            Birthday: ${registrationObject.bDay} |
            Subscription Plan: ${registrationObject.plan} |
            Message: ${registrationObject.msg} |`
        );

        setFullName("");
        setEmail("");
        setDate("");
        setSubscription("false");
        setText("");
    }

    const handleFullnameChange = (event) => {
        console.dir(event.target.value);
        setFullName(event.target.value);
    }

    const handleEmailChange =(event) => setEmail(event.target.value);

    const handleDateChange =(event) => setDate(event.target.value);

    const handleSubscriptionChange =(event) => setSubscription(event.target.value);

    const handleTextChange = (event) => setText(event.target.value);

    return(
        <form onSubmit={submitFunction} className="p-4 bg-blue-100 text-black">
            <div className="mb-3">
                <label className="inline-block w-40">Full Name: </label>
                <input 
                    type="text" 
                    className="px-2 py-1 border border-blue-500 bg-white focus:bg-orange-100" 
                    placeholder="name" 
                    onChange={handleFullnameChange} 
                    value={fullName} 
                />
                {/* <p>{fullName}</p> */}
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Email: </label>
                <input 
                    type="email" 
                    className="px-2 py-1 border border-blue-500 bg-white focus:bg-orange-100" 
                    placeholder="example@email.ca" 
                    onChange={handleEmailChange}
                    value={email}
                />
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Birthday: </label>
                <input 
                    type="date" 
                    className="px-2 py-1 border border-blue-500 bg-white focus:bg-orange-100" 
                    onChange={handleDateChange} 
                    value={date}
                />
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Subscription Type: </label>
                <select 
                    className="px-2 py-1 border border-blue-500 bg-white focus:bg-orange-100" 
                    onChange={handleSubscriptionChange}
                    value={subscription}
                >
                    <option disabled value="false">--- Please select a Plan ---</option>
                    <option value="free">Free Plan</option>
                    <option value="basic">Basic Plan</option>
                    <option value="premium">Premium Plan</option>
                </select>
                {/* <p>{subscription}</p> */}
            </div>
            <div className="mb-3">
                <label className="align-top inline-block w-40">Message: </label>
                <textarea 
                    className="px-2 py-1 border border-blue-500 bg-white focus:bg-orange-100" 
                    onChange={handleTextChange}
                    value={message}
                ></textarea>
            </div>
            <div>
                <button
                    className="bg-blue-500 text-white rounded px-3 py-2 hover:bg-green-500 active:bg-amber-400"
                >Submit Registration</button>
            </div>
        </form>
    );
}