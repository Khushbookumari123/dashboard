import "../Components/Card.css";
import { useState } from "react";






function card() {

    const [data, setData] = useState([{ details: "Total Revenue", rupees: "rs 100492.00", orders: "From Paid Orders" , icon: ""},
    { details: "Total Customers", rupees: "38", orders: "+180.1% from last month",icon: "" },
    { details: "Sales", rupees: "80", orders: "Total number of orders",icon: "" },
    { details: "Active Products", rupees: "5", orders: "+2 since last week",icon: "" },

    ])
    return (
        <div className="slider-container1">
            <h2>DASHBOARD</h2>


            {data.map((item) => (
                <div className="small-container1">
                    <h3>{item.details}</h3>
                    <h1>{item.rupees}</h1>
                    <h4 style={{color:"gray"}}>{item.orders}</h4>
                    {/* <img src={item.icon}/> */}

                </div>
                
            ))
            }



        </div>
    );
}

export default card;