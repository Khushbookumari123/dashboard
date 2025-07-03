import "../Css/Categories.css";
import Header from "../Components/Header"
import { useState ,useEffect } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



export default function Category() {
    const navigate = useNavigate();
    const [categorydata ,setCategoryData] = useState([])

    const fetchCategory=async()=>{
     const response =await axios.get("http://localhost:5000/api/category")   //http://localhost:5000   https://---------/api/category
     setCategoryData(response.data.data)
    }
    useEffect(()=>{
       fetchCategory()
    },[])


    console.log("CATEOGYR DATA FROM BACKEND:",categorydata)
    return (
        <>
            <Header />
            <div className="category">
                <div className="category-header">
                    <h2>Categories</h2>
                    <button className="add-category-btn" onClick={() => navigate("/addcategory")}>+ Add Category</button>
                </div>
                <input type="text" placeholder="Search Categories..." className="search-bar" />

                <div className="category-heading">
                    <p>Image</p>
                    <p>Name</p>
                    <p style={{ marginLeft: "-150px" }}>Description</p>
                    <p style={{ marginLeft: "280px" }}>Subcategories</p>
                    <p style={{ marginLeft: "200px" }}>Actions</p>
                </div>


                {categorydata.map((item) => (
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
                    <button className="add-subcategory"  onClick={() => navigate("/addsubcategory")}>+ Add Subcategory</button>
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




