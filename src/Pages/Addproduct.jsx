import React, { useState, useRef } from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import "../Css/Addproduct.css";
// import React, {  useRef } from "react";


export default function Addproduct() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");


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
      <div className="add-product-container">
        <div className="add-product-header">
          <button className="back-btn" onClick={() => navigate("/products")}>← Back</button>
          <h2>Add New Product</h2>
        </div>

 {/* -----------------------Buttons of products images varients---------------------------------------     */}
 
        <div className="tab-buttons">
          <button
            className={activeTab === "details" ? "active" : ""}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </button>
          <button
            className={activeTab === "image" ? "active" : ""}
            onClick={() => setActiveTab("image")}
          >
            Image
          </button>
          <button
            className={activeTab === "variants" ? "active" : ""}
            onClick={() => setActiveTab("variants")}
          >
            Variants
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "details" && (

            //   -------------------------Products Details---------------------------
            <div className="product-details-form">
              <h2>Basic Information</h2>
              <p style={{ color: "gray" }}>Enter the basic details for the new product</p>
              <label>Product Title</label>
              <input type="text" placeholder="Enter product title" />

              <label>Description</label>
              <textarea placeholder="Enter product description"></textarea>
              <div className="category-subcategory-row">
                <div className="form-group">
                  <label>Category</label>
                  <select>
                    <option value="">Select category</option>
                    <option value="Stationery">Stationery</option>
                    <option value="MDF Products">MDF Products</option>
                    <option value="Gift Hampers">Gift Hampers</option>
                    <option value="Corporate Gifts">Corporate Gifts</option>

                  </select>
                </div>
                <div className="form-group">
                  <label>Subcategory</label>
                  <select>
                    <option value="">Select subcategory</option>
                    <option value="Ceramic Mugs">Ceramic Mugs</option>
                    <option value="Wooden Frames">Wooden Frames</option>
                    <option value="Temperature Bottles">Temperature Bottles</option>
                  </select>
                </div>
              </div>
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
          )}
          {activeTab === "image" && (

            // -------------------Images code-------------------------------            
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
          )}
          {activeTab === "variants" && (

            // ----------------------Varients code------------------------------            
            <div>
              <h3>Define product variants</h3>

            </div>
          )}
        </div>
      </div>
    </>
  );
}
