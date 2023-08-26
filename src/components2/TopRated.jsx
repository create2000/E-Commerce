import React from 'react';
import './TopRated.css';

export default function TopRated (props) {
    return(
        <>
            <div className='p'>
            <div className='Rate'>
                <div>
                    <img src= './Bonus/Priodent.webp' alt=''/>
                </div>
                <div className='TopRated-txt'>
                    <p>Priodent Laborum</p>
                    <span> &#9733; &#9733; &#9733; &#9733; &#9733; </span>
                    <p className='TopRate'>$169.00</p>

                </div>
                </div>

            <div className='Rate'>

                <div>
                    <img src= './Bonus/Pariatur.webp' alt=''/>
                </div>
                <div className='TopRated-txt'>
                    <p>Pariatur Porking</p>
                    <span> &#9733; &#9733; &#9733; &#9733; &#9733; </span>
                    <p className='TopRate'>$98.00</p>

                </div>
                </div>

                <div className='Rate'>
                <div>
                    <img src= './Bonus/Ninim.webp' alt=''/>
                </div>
                <div className='TopRated-txt'>
                    <p>Ninim Spareri <br></br> Magna Aliqua</p>
                    <span> &#9733; &#9733; &#9733; &#9733; &#9733; </span>
                    <p className='TopRate'>$96.00</p>

                </div>
                </div>

            <div className='Rate'>
                <div>
                    <img src= './Bonus/Lommodo.webp' alt='' />
                </div>
                <div className='TopRated-txt'>
                    <p>Lommodo Quiutvenia</p>
                    <span> &#9733; &#9733; &#9733; &#9733; &#9733; </span>
                    <p className='TopRate'>$59.00</p>

                </div>
                </div>

            </div>
          <div className='Brands'>
            <img src="./Brands/Brand 1.png" alt='' />
            <img src="./Brands/Brand 2.png" alt='' />
            <img src="./Brands/Brand 3.png" alt='' />
            <img src="./Brands/Brand 4.png" alt='' />
            <img src="./Brands/Brand 5.png" alt='' />
            <img src="./Brands/Brand 6.png" alt='' />
            <img src="./Brands/Brand 7.png" alt='' />
            <img src="./Brands/Brand 8.png" alt='' />

          </div>

            <div className='views'>
                <span>MOST VIEWED</span>
            </div> <hr className='views-hr'></hr>
        </>
        )
    }

        