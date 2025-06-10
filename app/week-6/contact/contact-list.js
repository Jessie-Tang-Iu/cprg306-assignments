"use client";

import { useState } from "react";
import ContactCard from "./contact-card";
import ContactDate from "./contacts-info.json";


export default function ContactList(){

    let contactArray = ContactDate.map( (contact) => ( {...contact} ) );

    let [filter, setFilter] = useState("all");

    let [sort, setSortBy] = useState("none");
    
    const getFilter = (event) => setFilter(event.target.value);

    if(filter != "all")
    {
        contactArray = contactArray.filter(
            (contact) => contact.type == filter
        );
    }

    const getSort = (event) => setSortBy(event.target.value);

    if(sort != "none")
    {
        contactArray = contactArray.sort( (a,b) => {
            if(isNaN(parseInt(a[sort])))
            {
                let nameA = a[sort].toUpperCase();
                let nameB = b[sort].toUpperCase();
                if(nameA < nameB) return -1;
                if(nameA > nameB) return 1;
                return 0;
            }
            else
            {
                return a.id - b.id;
            }
        } );
    }

    return(
        <section>
            <div>
                <div className="px-2 py-1 text-black">
                    <label>Filter By:</label>
                    <select className="focus:bg-orange-100"
                    onChange={getFilter}>
                        <option value="all">All Contacts</option>
                        <option value="personal">Personal</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <div className="px-2 py-1 text-black">
                    <label>Sort By:</label>
                    <select className="focus:bg-orange-100"
                    onChange={getSort}>
                        <option value="none">None</option>
                        <option value="id">ID</option>
                        <option value="fname">First Name</option>
                        <option value="lname">Last Name</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {contactArray.map( (contact) => (
                    <ContactCard key={contact.id} contactObj={contact} />
                ) )}
            </div>
        </section>
    );
}