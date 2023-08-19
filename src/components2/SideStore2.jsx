import React from 'react';
import './SideStore2.css';

 export default function SideStore2(props) {
    return(
        <>
            <div className='Side-container'>
                <div className='Side-container-img'>
                        <img src={props.img} alt='' />
                        <div className='Side-container-txt'>
                            <p>{props.des}</p>
                            <p className='star'>{props.Star}</p>
                            <div className='p-list'>
                                <p className='price'>{props.price}</p> 
                                <p className='pricy'>{props.priceList}</p>

                            </div>

                        </div>

                </div>
        </div>
        
        </>
    )
}