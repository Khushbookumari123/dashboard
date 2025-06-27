import "../Css/Products.css";
import Header from "../Components/Header"
import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";

import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';



export default function Products() {
    const navigate = useNavigate();


    const [data, setData] = useState([{ image: "https://atlas-content-cdn.pixelsquid.com/stock-images/mug-red-coffee-cup-L85O71D-600.jpg", name: "You Are Always in My Heart Printed Orange Ceramic Coffee Mug", category: "Mugs", subcategory: "Ceramic Mugs", price: "rs999", stocks: "5", varients: "1", actions: "EditNoteOutlinedIcon" },
    { image: "https://atlas-content-cdn.pixelsquid.com/stock-images/mug-red-coffee-cup-L85O71D-600.jpg", name: "Mr.Right and Mrs.Right Printed Orange Ceramic Coffee Mug", category: "Mugs", subcategory: "Ceramic Mugs", price: "rs899", stocks: "6", varients: "1", actions: "EditNoteOutlinedIcon" },
    { image: "https://images.woodenstreet.de/image/cache/data/coffee-table/volga-nested-mango-wood-coffee-table-walnut-finish/white-finish/new-logo/2-810x702.jpg", name: "3 Compartment Desk Organizer With 2025 Calendar", category: "Mdf products", subcategory: "Ceramic Mugs", price: "rs999", stocks: "5", varients: "1", actions: "EditNoteOutlinedIcon" },
    { image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym90dGxlfGVufDB8fDB8fHww", name: "LED Temperature Display Insulated Water Bottle", category: "Bottles", subcategory: "Temprature bottles", price: "rs999", stocks: "5", varients: "1", actions: "EditNoteOutlinedIcon" },
    { image: "https://www.stylemyway.com/pub/media/catalog/product/cache/ecf0f528ef60e82ed6af19126930ed26/k/c/KCP1145_1.jpg", name: "LED Temperature Display Insulated Water Bottle", category: "Mugs", subcategory: "Ceramic Mugs", price: "rs999", stocks: "5", varients: "1", actions: "EditNoteOutlinedIcon" },


    ])

    return (
        <>
            <Header />
            <div className="product">
                <div className="product-header">
                <h2>Products</h2>
                  <button className="add-product-btn" onClick={() => navigate("/addproduct")}>+ Add Product</button>
</div>
                <input type="text" placeholder="Search Products..." className="search-bar" />

<div className="product-heading">
          <p>Image</p>
          <p>Name</p>
          <p style={{marginLeft:"70px"}}>Category</p>
          <p>Subcategory</p>
          <p style={{marginLeft:"-50px"}}>Price</p>
          <p style={{marginLeft:"-50px"}}>Stocks</p>
          <p style={{marginLeft:"-30px"}}>Variants</p>
          <p>Actions</p>
        </div>

                {data.map((item) => (
                    <div className="product-detail">
                        <img src={item.image} />
                        <p>{item.name}</p>
                        <p style={{marginLeft:"70px"}}>{item.category}</p>
                        <p>{item.subcategory}</p>
                        <p style={{marginLeft:"-50px"}}>{item.price}</p>
                        <p style={{marginLeft:"-40px"}}>{item.stocks}</p>
                        <p>{item.varients}</p>
                        <p style={{marginLeft:"10px"}}><EditNoteOutlinedIcon/></p>
                        {/* <img src={item.actions}/> */}


                    </div>
                ))
                }


            </div>



        </>

    );

}
