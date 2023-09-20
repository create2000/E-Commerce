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

            <div className='Most-Viewed-Items'>
                <div className='Most-Viewed'>
                <img src="./Brands/Most viewed1.webp" alt="" /> 
                <div className='Most-Viewed-Text'>
                    <p className='Most-Viewed-Text-P1'>Falcatra Ground</p>
                    <p className='Most-Viewed-Text-P2'>$52.00</p>
                </div>
                </div>

                <div className='Most-Viewed'>
                <img src="./Brands/Most viewed2.webp" alt="" />
                <div className='Most-Viewed-Text'>
                    <p className='Most-Viewed-Text-P1'>Lastrami Deserunt</p>
                    <p className='Most-Viewed-Text-P2'>$56.00</p>
                </div>
                </div>

                <div className='Most-Viewed'>
                <img src="./Brands/Most viewed3.webp" alt="" />
                <div className='Most-Viewed-Text'> 
                    <p className='Most-Viewed-Text-P1'>Benderloin Officia</p>
                    <p className='Most-Viewed-Text-P2'>$36.00</p>
                </div>
                </div>

                <div className='Most-Viewed'>
                <img src="./Brands/Most viewed4.webp" alt="" />
                <div className='Most-Viewed-Text'>
                    <p className='Most-Viewed-Text-P1'>Ercitation Incididunt</p>
                    <p className='Most-Viewed-Text-P2'>$40.00</p><span className='MVT-P3'>$45.00</span>

                </div>
                </div>
                
            </div>

        <div className='News-and-icons'> 
            <div className='news-letter'>
                <img src="./Brands/send.png" alt="" width="35px"  height="40px"/>
                <div className='news-letter-texts'>
                    <h2>Signup For Newsletter</h2>
                    <p>We'll never share your email address with a third- <br></br>party.</p>

                </div>
            </div>

            <div className='bottom'>
                <input className='btm-input' type="text" placeholder='Your email address...' /> 
                <span className='btm-span'>Subscribe</span>
            </div>

            <div className='media-icons'>
                <div>
                    <img src="./Brands/facebook-app-symbol.png" alt="" width="15px" /> <span className='pipe'>|</span>
                </div>

                <div>
                    <img src="./Brands/twitter.png" alt="" width="12px" /> <span className='pipe'>|</span>
                </div>

                <div>
                    <img src="./Brands/google-plus.png" alt="" width="19px" />
                    <span className='pipe'>|</span>
                </div>

                <div>
                  <img src="./Brands/pinterest-circular-logo-symbol.png" alt="" width="15px" />
                </div>
            </div>

        </div>     
        </>
        )
    }

        