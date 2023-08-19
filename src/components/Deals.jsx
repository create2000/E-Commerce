import React from 'react';
import './Deals.css'

function Deals (props) {
    return(
        <>
        
            <img src= {props.img} alt='' />
            <div className='Deals-Text'>
                <h3>{props.items}</h3>
                    <span className='pricy'><h3>{props.price}</h3></span>
                <div className='stocks'>
                    <p>{props.Available}<span className='quantity'>{props.quantityLeft}</span></p>
                    <span ><p className='Num-Sold'>{props.unavailable}{props.quantitySold}</p></span>

                </div>
                {props.timeout}

            </div>

        
        </>
        
    )
}

export default Deals