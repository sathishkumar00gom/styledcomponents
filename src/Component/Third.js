import React from "react";
import { Contact } from "./Thirdstyled";



export const Contactus = () => {
    return (
        <>
            <Contact>
                <h2>Contact us</h2>
                <div className="Cont" style={{ display: "flex", marginLeft: "20px" }}>
                    <p>Ideally, a contact page should include both an email address and a contact form for visitors to fill out. You may also choose to include a business address, phone number, or specific employee/department contact information.</p>
                    <div className="Contact">

                        <label >First Name</label>
                        <input type="text" placeholder="First Name"></input>
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name"></input>
                        <label>Email</label>
                        <input type="email" placeholder="Email"></input>
                        <label>Phone Number</label>
                        <input type="number" placeholder="Phone Number"></input>

                    </div>
                </div>
            </Contact>
        </>
    )
};