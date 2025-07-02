import "../Css/Users.css";
import Header from "../Components/Header"
import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';




export default function Users() {
    const navigate = useNavigate();


    const [data, setData] = useState([{  name: "admin", Email: "@admingmail.com",Phone: "9185763428", Role: "admin", Wishlistitems: "0", actions: "" },
    {  name: "Khushboo", Email: "Khushi@123",Phone: "6204765388", Role: "user", Wishlistitems: "0", actions: "" },
    {  name: "Priya", Email: "@priya123",Phone: "8576453452", Role: "user", Wishlistitems: "0", actions: "" },
    {  name: "Anmol", Email: "raj@123gmail",Phone: "9867456345", Role: "user", Wishlistitems: "0", actions: ""},
    { name: "Khushi", Email: "khushi@123gmail",Phone: "8976567653", Role: "user", Wishlistitems: "0", actions: "" },
    {  name: "Khushboo", Email: "Khushi@123",Phone: "6204765388", Role: "user", Wishlistitems: "0", actions: "" },
    {  name: "Priya", Email: "@priya123",Phone: "8576453452", Role: "user", Wishlistitems: "0", actions: "" },
    {  name: "Anmol", Email: "raj@123gmail",Phone: "9867456345", Role: "user", Wishlistitems: "0", actions: ""},
    { name: "Khushi", Email: "khushi@123gmail",Phone: "8976567653", Role: "user", Wishlistitems: "0", actions: "" },
    {  name: "Khushboo", Email: "Khushi@123",Phone: "6204765388", Role: "user", Wishlistitems: "0", actions: "" },
    {  name: "Priya", Email: "@priya123",Phone: "8576453452", Role: "user", Wishlistitems: "0", actions: "" },
    {  name: "Anmol", Email: "raj@123gmail",Phone: "9867456345", Role: "user", Wishlistitems: "0", actions: ""},
    { name: "Khushi", Email: "khushi@123gmail",Phone: "8976567653", Role: "user", Wishlistitems: "0", actions: "" },




    ])

    return (
        <>
            <Header />
            <div className="user">
                <div className="user-header">
                <h2>Users</h2>
            </div>
           
            <input type="text" placeholder="Search Users..." className="search-bar" style={{marginLeft:"20px",marginTop:"20px",width:"20%",height:"30px"}}/>
               
           <div className="user-heading">
          <p>Name</p>
          <p style={{marginLeft:"250px"}}>Email</p>
          <p style={{marginLeft:"200px"}}>Phone</p>
          <p style={{marginLeft:"90px"}}>Role</p>
          <p style={{marginLeft:"-70px"}}>Wishlist Items</p>
          <p style={{marginLeft:"90px"}}>Actions</p>
        </div>

                {data.map((item) => (
                    <div className="user-detail">
                    
                        <p>{item.name}</p>
                        <p style={{marginLeft:"250px"}}>{item.Email}</p>
                        <p style={{marginLeft:"190px"}}>{item.Phone}</p>
                        <p style={{marginLeft:"90px"}}>{item.Role}</p>
                        <p style={{marginLeft:"-20px"}}>{item.Wishlistitems}</p>
                        <p style={{marginLeft:"100px"}}><RemoveRedEyeIcon/></p>


                    </div>
                ))
                }


            </div>



        </>

    );

}
