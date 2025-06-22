import "../Components/Recentsales.css";
import { useState } from "react";
import React from 'react';








export default function Recentsales() {

    const [data, setData] = useState([{ details: "John Doe", email: "john.doe@example.com", image: "https://www.w3schools.com/howto/img_avatar.png",rs:"+249.00"},
    { details: "Alice Smith", email: "alice.smith@example.com", image: "https://www.w3schools.com/howto/img_avatar.png",rs:"+399.00" },
    {  details: "Robert Johnson", email: "robert.j@example.com", image: "https://www.w3schools.com/howto/img_avatar.png",rs:"+129.00"},
    {  details: "Emma Brown", email: "emma.b@example.com", image: "https://www.w3schools.com/howto/img_avatar.png",rs:"+89.00" },
    {  details: "William Davis", email: "william.d@example.com", image: "https://www.w3schools.com/howto/img_avatar.png",rs:"+189.00" },


    ])

    return (

        <div className="Recent-container">
            <h1>Recent Sales</h1>
            <p style={{color:"gray"}}>You made 265 sales this month.</p>
            <div className="profiledetail">
                 {data.map((item) => (
                <div className="profiledetail">
                    <p><b>{item.details}</b></p>
                    <p style={{color:"gray"}}>{item.email}</p>
                    <img src={item.image}/>
                    <p style={{marginLeft:"450px",marginTop:"-30px"}}>{item.rs}</p>
                </div>
                
            ))
        }
                {/* <p><b>John Doe</b></p>
                <p style={{color:"gray"}}>john.doe@example.com</p>
                 <img src="https://www.w3schools.com/howto/img_avatar.png"  /> */}
            </div>

        </div>
    );
}
