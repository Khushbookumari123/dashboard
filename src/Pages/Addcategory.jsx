import React, { useState, useRef } from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import "../Css/Addcategory.css";






export default function Addcategory() {
  const navigate = useNavigate();

   const [selectedImage, setSelectedImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleImageClick = () => {
      fileInputRef.current.click();
    };
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file && file.size <= 2 * 1024 * 1024) { // limit to 2MB
        setSelectedImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select an image smaller than 2MB.");
      }
    };



  return(
    <>
      <Header />
<div className="add-category-container">
        <div className="add-category-header">
          <button className="category-btn" onClick={() => navigate("/category")}>← Back</button>
          <h2>Add New Category</h2>
        </div>
        
</div>
         <div className="category-details-form">
              <h2>Category Information</h2>
              <p style={{ color: "gray" }}>Enter the details for the new category</p>
              <label>Category Name</label>
              <input type="text" placeholder="Enter category name" />

              <label>Description</label>
              <textarea placeholder="Enter category description"></textarea>
              <p style={{color:"white",marginTop:"10px"}}>Category Image</p>
          
  <input
                ref={fileInputRef}
                className="hidden1"
                accept="image/*"
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <div className="image-upload1" onClick={handleImageClick}>
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
                  className="upload-icon1"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" x2="12" y1="3" y2="15"></line>
                </svg>
                <p>Click to upload an image</p>
                <p className="image-hint1">SVG, PNG, JPG or GIF (max. 2MB)</p>
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="image-preview1"
                  />
                )}
              </div>

              <div className="form-buttons">
                <button className="cancel-btn" onClick={() => navigate("/products")}>
                  Cancel
                </button>
                <button
                  className="next-btn"
                  onClick={() => setActiveTab("image")}
                >
                  Create category
                </button>
              </div>

            </div>
            
        </>
  );
}
