import "../Css/Banners.css";
import Header from "../Components/Header"
import { useState } from "react";
import React from 'react';




export default function Banners() {

    // const [data, setData] = useState([{ image: "", name: "MDF products", description: "MDF is a fantastic material for creating a wide variety of gifts due to its smooth surface, affordability, ease of cutting and shaping, and suitability for various finishes.", subcategory: "3", actions: "EditNoteOutlinedIcon" },
    // { image: "", name: "Statinary", description: "Stationery refers to materials used for writing or typing, including paper, envelopes, pens, pencils, and other office supplies. It traditionally encompasses items that are typically sold by a stationer.", subcategory: "0", actions: "EditNoteOutlinedIcon" },
    // { image: "", name: "Gift Hampers", description: "A gift is something voluntarily transferred by one person to another without expectation of compensation. The act of giving is often associated with various occasions, emotions, and social dynamics. Giving a thoughtful gift can strengthen the bond and fostering feelings of closeness and connection. It reinforces the sense of relationship and care.", subcategory: "0", actions: "EditNoteOutlinedIcon" },
    // { image: "", name: "Corporate Gifts", description: "Corporate gifts are items given by a company to its employees, clients, partners, or potential customers. These gifts serve various business purposes beyond simple generosity, often aiming to: 1. Build and strengthen relationships 2. Boost employee morale and recognition 3. Promote brand awareness", subcategory: "0", actions: "EditNoteOutlinedIcon" },
    // { image: "", name: "MDF products", description: "Corporate gifts are items given by a company to its employees, clients, partners, or potential customers. These gifts serve various business purposes beyond simple generosity, often aiming to: 1. Build and strengthen relationships 2. Boost employee morale and recognition 3. Promote brand awareness", subcategory: "0", actions: "EditNoteOutlinedIcon" },


    // ])

    return (
        <>
            <Header />
            <div className="banners">
                <div className="banners-header">
                    <h2>Banners</h2>
                    <button className="banners-btn">+ Add Banners</button>
                </div>
                

                <div className="banners-heading">
                    <div>Image</div>
                    <div >Created At</div>
                    <div>Actions</div>
                </div>


                {/* {data.map((item) => (
                    <div className="banners-detail">
                        <img src={item.image} />
                        <p>{item.created}</p>
                        <p><EditNoteOutlinedIcon /></p>


                    </div>
                )) */}
                {/* } */}
            </div>
          

        </>

    );

}



