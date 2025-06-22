import "../Components/Header.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
    var navigate = useNavigate()

   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const handleProfileClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logged Out!", "You have been logged out.", "success");
      }
    });
  };
  return (
    <div className="navbar">
      <div className="nav-left">

        {/* <div>Dashboard</div>
        <div>Products</div>
        <div>Categories</div>
        <div>Banners</div>
        <div>Orders</div> */}
        <span onClick={() => navigate("/")}>Dashboard</span>
        <span onClick={() => navigate("/products")}>Products</span>
        <span onClick={() => navigate("/category")}>Categories</span>
        <span onClick={() => navigate("/banners")}>Banners</span>
        <span>Orders</span>
        <span>Users</span>
        <span>Reviews</span>
        <span>Coupons</span>

      </div>
      <div className="nav-right">
        <input type="text" placeholder="Search..." className="search-bar" />
        {/* <img src="https://www.flaticon.com/free-icon-font/search_3917132"/> */}
        <div className="profile-icon" onClick={handleProfileClick}>
           {isDropdownOpen && (
            <div className="dropdown-menu">
              <p>Admin User</p>
              <p>Profile</p>
              <p onClick={handleLogout}>Logout</p>
            </div>
          )}
        <img src="https://www.w3schools.com/howto/img_avatar.png"  />
           {/* src="https://www.flaticon.com/free-icon-font/circle-user_18706280"*/}
            
         
         </div>
      
      </div>
    </div>
    
  );
}
