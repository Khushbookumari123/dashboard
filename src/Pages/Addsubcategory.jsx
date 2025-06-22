import React, { useState, useRef } from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import "../Css/Addproduct.css";



export default function Addproduct() {
  const navigate = useNavigate();
  
  

  return (
    <>
      <Header />
      <div className="add-subcategory-container">
        <div className="add-subcategory-header">
          <button className="subcategory-btn" onClick={() => navigate("/category")}>← Back</button>
          <h2>Add New Subcategory</h2>
        </div>

 
        

            <div className="product-details-form">
              <h2>Basic Information</h2>
              <p style={{ color: "gray" }}>Enter the basic details for the new product</p>
              <label>Product Title</label>
              <input type="text" placeholder="Enter product title" />

              <label>Description</label>
              <textarea placeholder="Enter product description"></textarea>
          
              <div className="form-buttons">
                <button className="cancel-btn" onClick={() => navigate("/products")}>
                  Cancel
                </button>
                <button
                  className="next-btn"
                  onClick={() => setActiveTab("image")}
                >
                  Next: Images →
                </button>
              </div>

            </div>
          

            <div className="image-upload-form">
              <h3 style={{ marginLeft: "20px" }}> Product images </h3>
              <p style={{ color: "gray",marginLeft: "20px" }}>Upload at least one image of the product</p>


            {/* -------------------image div code---------------------------- */}

              <input
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <div className="image-upload" onClick={handleImageClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="upload-icon"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" x2="12" y1="3" y2="15"></line>
                </svg>
                <p>Click to upload an image</p>
                <p className="image-hint">SVG, PNG, JPG or GIF (max. 2MB)</p>
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="image-preview"
                  />
                )}
              </div>
              <button className="add-image-btn" onClick={() => navigate("")}>+ Add Image</button>

                <div className="form-buttons" >
                <button className="cancel-btn" onClick={() => navigate("/products")}>
                  Back
                </button>
                <button 
                  className="next-btn"
                  onClick={() => setActiveTab("variants")}
                >
                  Next: Varient →
                </button>
              </div>



            </div>
          
        
        </div>
      
    </>
  );
}
