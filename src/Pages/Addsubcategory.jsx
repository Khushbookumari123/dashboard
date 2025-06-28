import React, { useState, useRef } from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import "../Css/Addsubcategory.css";



export default function Addsubcategory() {
  const navigate = useNavigate();

   const [selectedImage, setSelectedImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleImageClick = () => {
      fileInputRef.current.click();
    };
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file && file.size <= 2 * 1024 * 1024) { 
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
  
  

  return (
    <>
      <Header />
      <div className="add-subcategory-container">
        <div className="add-subcategory-header">
          <button className="subcategory-btn" onClick={() => navigate("/category")}>← Back</button>
          <h2>Add New Subcategory</h2>
        </div>

 
        

            <div className="subcategory-details-form">
              <h2>Subcategory Information</h2>
              <p style={{ color: "gray",marginLeft:"20px"}}>Enter the details for the new subcategory</p>
              <label>Parent Category</label>
              <input type="text" placeholder="Select a parent category" />
               <label>Subcategory Name</label>
              <input type="text" placeholder="Enter subcategory name" />

              <label>Description</label>
              <textarea placeholder="Enter subcategory description"></textarea>
          

           
          
            {/* -------------------image div code---------------------------- */}

            {/* <div className="image-upload-form-subcategory"> */}
              <p style={{ color: "white",marginLeft: "20px" }}>Subcategory Image Subcategory</p>



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
              <div className="image-upload-subcategory" onClick={handleImageClick}>
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
                  className="upload-icon-subcategory"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" x2="12" y1="3" y2="15"></line>
                </svg>
                <p>Click to upload an image</p>
                <p className="image-hint-subcategory">SVG, PNG, JPG or GIF (max. 2MB)</p>
                {/* {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="image-preview"
                  />
                )} */}
              </div>
              <button className="createcategory-btn" onClick={() => navigate("")}>Create subcategory</button>

                {/* <div className="subcategory-form-buttons" > */}
                <button className="subcategory-cancel-btn" onClick={() => navigate("/category")}> Cancel</button>

                 
                
              {/* </div> */}
            {/* </div> */}
             </div>
        </div>
      
    </>
  );
}
