import "../Css/Reviews.css";
import Header from "../Components/Header"
import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import FilterAltIcon from '@mui/icons-material/FilterAlt';




export default function Reviews() {
    const navigate = useNavigate();


    // const [data, setData] = useState([{  name: "admin", Email: "@admingmail.com",Phone: "9185763428", Role: "admin", Wishlistitems: "0", actions: "" },
    // {  name: "Khushboo", Email: "Khushi@123",Phone: "6204765388", Role: "user", Wishlistitems: "0", actions: "" },
    // {  name: "Priya", Email: "@priya123",Phone: "8576453452", Role: "user", Wishlistitems: "0", actions: "" },
    // {  name: "Anmol", Email: "raj@123gmail",Phone: "9867456345", Role: "user", Wishlistitems: "0", actions: ""},
    // { name: "Khushi", Email: "khushi@123gmail",Phone: "8976567653", Role: "user", Wishlistitems: "0", actions: "" },
    // {  name: "Khushboo", Email: "Khushi@123",Phone: "6204765388", Role: "user", Wishlistitems: "0", actions: "" },
    // {  name: "Priya", Email: "@priya123",Phone: "8576453452", Role: "user", Wishlistitems: "0", actions: "" },
    // {  name: "Anmol", Email: "raj@123gmail",Phone: "9867456345", Role: "user", Wishlistitems: "0", actions: ""},
    // { name: "Khushi", Email: "khushi@123gmail",Phone: "8976567653", Role: "user", Wishlistitems: "0", actions: "" },
    // {  name: "Khushboo", Email: "Khushi@123",Phone: "6204765388", Role: "user", Wishlistitems: "0", actions: "" },
    // {  name: "Priya", Email: "@priya123",Phone: "8576453452", Role: "user", Wishlistitems: "0", actions: "" },
    // {  name: "Anmol", Email: "raj@123gmail",Phone: "9867456345", Role: "user", Wishlistitems: "0", actions: ""},
    // { name: "Khushi", Email: "khushi@123gmail",Phone: "8976567653", Role: "user", Wishlistitems: "0", actions: "" },




    // ])

    return (
        <>
            <Header />
            <div className="review">
                <div className="review-header">
                <h2>Reviews</h2>
            </div>
            <div className="filtersearch">
            <input type="text" placeholder="Search Reviews..." className="search-bar" style={{marginLeft:"20px",marginTop:"20px",width:"20%",height:"30px"}}/>
             <button className="filter-btn" onClick={() => navigate("")}>
                <FilterAltIcon style={{ marginRight: "5px",background:"none" }}/>
                 Filter</button>
               </div>
           <div className="review-heading">
          <p>Product</p>
          <p style={{marginLeft:"200px"}}>Product Name</p>
          <p style={{marginLeft:"200px"}}>Customer</p>
          <p style={{marginLeft:"90px"}}>Rating</p>
          <p style={{marginLeft:"-70px"}}>Review</p>
          <p style={{marginLeft:"90px"}}>Actions</p>
        </div>

                {/* {data.map((item) => (
                    <div className="review-detail">
                    
                        <p>{item.name}</p>
                        <p style={{marginLeft:"250px"}}>{item.Email}</p>
                        <p style={{marginLeft:"190px"}}>{item.Phone}</p>
                        <p style={{marginLeft:"90px"}}>{item.Role}</p>
                        <p style={{marginLeft:"-20px"}}>{item.Wishlistitems}</p>
                        <p style={{marginLeft:"100px"}}><RemoveRedEyeIcon/></p>


                    </div>
                ))
                } */}


            </div>



        </>

    );

}
