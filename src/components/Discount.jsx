import React from 'react';
import './Discount.css';

function Discount (){
    return(
        <>
        <div>
            <img src="./images/discount.webp" alt="" className="discount" />
        </div>
        <div className='ban-1'>
            <img src="./images/banner1.jpg" alt="" className="banner1" />
            <img src="./images/banner2.jpg" alt="" className="banner2" />
        </div>
        <img src='./images/Gift.jpg' alt='' className='Gift-1' />
        <img src='./images/interior-design.jpg' alt='' className='Interior-1' />
        </>
    )
}

export default Discount