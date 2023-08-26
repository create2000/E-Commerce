import React from 'react';
import './Bonuses.css';

export default function Bonuses (props) {
    return (
        <>
        <div className='Bonus'>
            <div className='Bot'>
                <img src='./Bonus/document.png' alt='' />
                <div className='Tot'>
                    <p>FREE DELIVERY</p>
                    <span className='span'>On order over $49.86</span>

                </div>
            </div>

            <div className='Bot'>
                <img src='./Bonus/shield.png' alt='' />
                <div className='Tot'>
                    <p>ORDER PROTECTION</p>
                    <span className='span'>secured information</span>

                </div>
            </div>

            <div className='Bot'>
                <img src='./Bonus/giftbox.png' alt='' />
                <div className='Tot'>
                    <p>PROMOTION GIFT</p>
                    <span className='span'>special offers!</span>

                </div>
            </div>

            <div className='Bot'>
                <img src='./Bonus/mb-guarantee.png' alt='' />
                <div className='Tot'>
                    <p>MONEY BACK</p>
                    <span className='span'>return over 30 days</span>

                </div>
            </div>
            </div>

            <div>
                 <img src="./Bonus/Armchair.jpg" alt="" className='furn'/>

            </div>

           

        
        </>
    )
}