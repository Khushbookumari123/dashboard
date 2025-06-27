import "../Css/Coupons.css";
import Header from "../Components/Header"
import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';





export default function Coupons() {
    const navigate = useNavigate();


    const [data, setData] = useState([{  code: "ABCDEFGH", serial: "12345abc678",discount: "10%(Max$5000)", minpurchase: "rs 500.00", validperiod: "May 16 2025-May 29 2025", status: "Active",uses:"0/1",actions:"EditNoteOutlinedIcon" },
    {  code: "ABCD", serial: "po1234578yut",discount: "rs 200", minpurchase: "rs 499.00", validperiod: "May 16 2025-May 29 2025", status: "Active",uses:"4/5",actions:"EditNoteOutlinedIcon"  },
    {  code: "ABC", serial: "abcder2345nk",discount: "rs 400", minpurchase: "rs 345.00", validperiod: "May 16 2025-May 29 2025", status: "Active",uses:"5/5",actions:"EditNoteOutlinedIcon"  },
    {  code: "GHIJ", serial: "qwert567yu",discount: "10%(Max$5000)", minpurchase: "rs 299.00", validperiod: "May 16 2025-May 29 2025", status: "Active",uses:"2/4",actions:"EditNoteOutlinedIcon" },
    {  code: "KLMNO", serial: "poi098u7y1234",discount: "10%(Max$5000)", minpurchase: "rs 499.00", validperiod: "May 16 2025-May 29 2025", status: "Active",uses:"0/5",actions:"EditNoteOutlinedIcon" },
    {  code: "PQRST", serial: "123456tyui89",discount: "10%(Max$5000)", minpurchase: "rs 399.00", validperiod: "May 16 2025-May 29 2025", status: "Active",uses:"0/7",actions:"EditNoteOutlinedIcon" },
   



    ])

    return (
        <>
            <Header />
            <div className="coupon">
                <div className="coupon-header">
                <h2>Coupons</h2>
                <button className="add-product-btn" onClick={() => navigate("")}>+ Add Coupon</button>

            </div>
           
            <input type="text" placeholder="Search Coupons..." className="search-bar" style={{marginLeft:"20px",marginTop:"20px",width:"20%",height:"30px"}}/>
               
           <div className="coupon-heading">
          <p>Code</p>
          <p style={{marginLeft:"50px"}}>Serial No.</p>
          <p style={{marginLeft:"10px"}}>Discount</p>
          <p style={{marginLeft:"-100px"}}>Min Purchase</p>
          <p style={{marginLeft:"-250px"}}>Valid period</p>
          <p style={{marginLeft:"-100px"}}>Status</p>
          <p style={{marginLeft:"-50px"}}>Uses</p>
          <p style={{marginLeft:"20px"}}>Actions</p>
        </div>

                {data.map((item) => (
                    <div className="coupon-detail">
                    
                        <p>{item.code}</p>
                        <p style={{marginLeft:"50px"}}>{item.serial}</p>
                        <p style={{marginLeft:"10px"}}>{item.discount}</p>
                        <p style={{marginLeft:"-100px"}}>{item.minpurchase}</p>
                        <p style={{marginLeft:"-250px"}}>{item.validperiod}</p>
                        <p style={{marginLeft:"-100px"}}>{item.status}</p>
                        <p style={{marginLeft:"-50px"}}>{item.uses}</p>
                        <p style={{marginLeft:"20px"}}><EditNoteOutlinedIcon/></p>


                    </div>
                ))
                }


            </div>



        </>

    );

}
