import React from "react";
import './SideContents.css';
import Discount from "../components/Discount.jsx";

function SideContents (props){
    return(
        <>
        
        <div>
            <div>
                <ul className="side-lists">
                    <li className="lists">
                        {props.shopIcon}
                        {props.list}
                    </li>
                </ul>
                </div>

        </div>
    
        </>

        
    )
}


export default SideContents