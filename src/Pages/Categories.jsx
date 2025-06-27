import "../Pages/Categories.css";
import Header from "../Components/Header"
import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";

import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



export default function Category() {
    const navigate = useNavigate();

   

    const [data, setData] = useState([{ image: "https://images.woodenstreet.de/image/cache/data/coffee-table/volga-nested-mango-wood-coffee-table-walnut-finish/white-finish/new-logo/2-810x702.jpg", name: "MDF products", description: "MDF is a fantastic material for creating a wide variety of gifts due to its smooth surface, affordability, ease of cutting and shaping, and suitability for various finishes.", subcategory: "3", actions: "EditNoteOutlinedIcon" },
    { image: "https://images.all-free-download.com/images/graphiclarge/color_stationery_03_hd_pictures_166662.jpg", name: "Statinary", description: "Stationery refers to materials used for writing or typing, including paper, envelopes, pens, pencils, and other office supplies. It traditionally encompasses items that are typically sold by a stationer.", subcategory: "0", actions: "EditNoteOutlinedIcon" },
    { image: "https://giftcarnation.com/cdn/shop/products/Christmas_Gift_Hamper.png?v=1731157197&width=416", name: "Gift Hampers", description: "A gift is something voluntarily transferred by one person to another without expectation of compensation. The act of giving is often associated with various occasions, emotions, and social dynamics. Giving a thoughtful gift can strengthen the bond and fostering feelings of closeness and connection. It reinforces the sense of relationship and care.", subcategory: "0", actions: "EditNoteOutlinedIcon" },
    { image: "https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?cs=srgb&dl=pexels-pixabay-264787.jpg&fm=jpg", name: "Corporate Gifts", description: "Corporate gifts are items given by a company to its employees, clients, partners, or potential customers. These gifts serve various business purposes beyond simple generosity, often aiming to: 1. Build and strengthen relationships 2. Boost employee morale and recognition 3. Promote brand awareness", subcategory: "0", actions: "EditNoteOutlinedIcon" },
    { image: "https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?cs=srgb&dl=pexels-pixabay-264787.jpg&fm=jpg", name: "MDF products", description: "Corporate gifts are items given by a company to its employees, clients, partners, or potential customers. These gifts serve various business purposes beyond simple generosity, often aiming to: 1. Build and strengthen relationships 2. Boost employee morale and recognition 3. Promote brand awareness", subcategory: "0", actions: "EditNoteOutlinedIcon" },


    ])

    return (
        <>
            <Header />
            <div className="category">
                <div className="category-header">
                    <h2>Categories</h2>
                    <button className="add-category-btn" onClick={() => navigate("/addcategory")}>+ Add Category</button>
                </div>
                <input type="text" placeholder="Search..." className="search-bar" />

                <div className="category-heading">
                    <p>Image</p>
                    <p>Name</p>
                    <p style={{ marginLeft: "-150px" }}>Description</p>
                    <p style={{ marginLeft: "280px" }}>Subcategories</p>
                    <p style={{ marginLeft: "200px" }}>Actions</p>
                </div>


                {data.map((item) => (
                    <div className="category-detail">
                        <img src={item.image} />
                        <p>{item.name}</p>
                        <p style={{ marginLeft: "-160px" }}>{item.description}</p>
                        <p style={{ marginLeft: "300px" }}>{item.subcategory}</p>
                        <p style={{ marginLeft: "220px" }}><EditNoteOutlinedIcon /></p>


                    </div>
                ))
                }
            </div>
            {/* -----------------------pagination------------------------------- */}
            <div className="paggination">
                <Stack spacing={2}>

                    <Pagination count={4} variant="outlined" shape="rounded"
                     sx={{
                        "& .MuiPaginationItem-root": {
                            color: "white",
                            borderColor: "#444",

                        },
                        "& .Mui-selected": {
                            backgroundColor: "#444",
                            color: "white",
                            borderColor: "#fff",
                            '&:hover': {
                            backgroundColor: '#f0f0f0',
                             },
                        },
                    }} 
                    />
                </Stack>

            </div>

            <div className="sub-categories">
                <div className="subcategory-header">
                    <h2>Subcategories</h2>
                    <button className="add-subcategory">+ Add Subcategory</button>
                </div>

                <div className="subcategory-controls">
                    <select className="category-select">
                        <option value="MDF products">Select a parent category</option>
                        <option value="MDF products">MDF products</option>
                        <option value="Stationary">Stationary</option>
                        <option value="Gift Hampers">Gift Hampers</option>
                        <option value="Corporate Gifts">Corporate Gifts</option>
                        <option value="Corporate Gifts">Souvenrs</option>
                        <option value="Corporate Gifts">Drinkwares</option>

                    </select>
                </div>
                <div className="category-heading">
                    <p style={{ color: "white" }}>Image</p>
                    <p style={{ color: "white" }}>Name</p>
                    <p style={{ marginLeft: "-150px", color: "white" }}>Description</p>
                    <p style={{ marginLeft: "280px", color: "white" }}>Products</p>
                    <p style={{ marginLeft: "200px", color: "white" }}>Actions</p>
                </div>



            </div>

        </>

    );

}




