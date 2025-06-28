import "../Css/Banners.css";
import Header from "../Components/Header"
import { useState } from "react";
import React from 'react';





const banners = [
    {
        img: "https://www.pixelstalk.net/wp-content/uploads/2016/10/Cute-doll-HD-Images.jpg",
        date: "30/10/2025",
    },
    {
        img: "https://rukminim2.flixcart.com/image/750/900/k45x0nk0/ceiling-lamp/y/a/x/led-jhumar-rainbow-light-decorative-bulb-light-small-onrr-original-imafn42mtaufpvb7.jpeg?q=90&crop=false",
        date: "15/10/2025",
    },

    {
        img: "https://m.media-amazon.com/images/I/61IRn4i33YL._UF1000,1000_QL80_.jpg",
        date: "25/10/2025",
    },

];

export default function Banner() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = () => setIsOpen(!isOpen);
    return (
        <>
            <Header />


    <h3 style={{ fontSize: "30px", color: "white", marginLeft: "-1100px", marginTop: "20px" }}>Banners</h3>

    <button onClick={toggleDialog}
    style={{
                    width: "143px",
                    marginLeft: "1285px",
                    height: "40px",
                    marginTop: "-40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "white",
                    color: "black",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontWeight: "500",
                    cursor: "pointer",
                    padding: "0 8px 0 1px",
     }}
                className="inline-flex items-center gap-2">


                <svg style={{ marginLeft: "12px", marginRight: "10px" }} 
                xmlns="http://www.w3.org/2000/svg" 
                width="22" height="17" 
                viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round" 
                className="lucide lucide-plus mr-2 h-4 w-4">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path></svg>
                Add Banner

                 </button>

            {/* Dialog Modal */}
            {isOpen && (
                <div
                    id="add-banner-dialog"
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 flex items-center justify-center bg-black/50"
                >
                    <div className="bg-white p-6 rounded-md max-w-md w-full">
                        <h2 className="text-lg font-semibold mb-4">Add Banner</h2>
                        {/* Here you can insert your form markup */}
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div className="banner-table-container">
                <table className="banner-table">
                    
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {banners.map((banner, idx) => (
                            <tr key={idx}>
                                <td>
                                    <div className="image-form-card">

                                        <img
                                            alt="Banner"
                                            loading="lazy"
                                            decoding="async"
                                            src={banner.img}
                                        />
                                    </div>



                                </td>
                                <td style={{ color: "white" }}>{banner.date}</td>
                                <td>
                                    <button className="delete-btn" title="Delete">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M3 6h18"></path>
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                            <line x1="10" x2="10" y1="11" y2="17"></line>
                                            <line x1="14" x2="14" y1="11" y2="17"></line>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}