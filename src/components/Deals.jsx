import React from 'react';
import './Deals.css'

function Deals (props) {
    return(
        <>
        <div className='Done-deals'>

            <img src= {props.img} alt='' />
            <div className='Deals-Text'>
                <h3>{props.items}</h3>
                    <h3 className='pricy'>{props.price}</h3>
                <div className='stocks'>
                    <p>{props.Available}<span className='quantity'>{props.quantityLeft}</span></p>
                    <span ><p className='Num-Sold'>{props.unavailable}{props.quantitySold}</p></span>

                </div>
                {props.timeout}

            </div>

        
        </div>
        </>
        
    )
}

export default Deals