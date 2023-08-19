import React from 'react';
import './Trends.css';

function Trends () {
    return (
        <>
            <img src='./images/75-off.jpg' alt='' className='Trends' />

            <div className='Trends-Menu'>
                <button className='Trends-button'>TRENDING ITEMS</button>
                <div className= 'Trends-lists'>
                    <li> All </li>
                    <li> Bathroom </li>
                    <li> Bedroom </li>
                    <li> Decor </li>
                    <li> Furniture </li>
                    <li> Living Room </li>
                </div>
            </div>
            <hr className='hr-line'/>
            
        
        </>
    )
}

export default Trends