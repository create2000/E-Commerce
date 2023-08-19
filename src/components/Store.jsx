import React from 'react';
import './Store.css';

 function Store(props) {

    return(
        <>
        <div className='store'>
            <div className='store-items'> 
                <img src= {props.img} alt='' />

                </div>
                <div className='st-texts'>
                    <p>{props.description}</p>
                    <img src={props.star} alt='' className='fiveStar' />
                    <span className='txt-price'>{props.price}</span>

                </div>

          

        </div> 
        </>
    )
}

export default Store