import  React from 'react';
import './newItems.css'

export default function NewItems (){
    return (
        <>

             <div>
              <div className='Trends-cart'>
                <button className='Trends-button'>NEW ITEMS</button>
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
            <div className='img-cont'>
                <img src='./pictures/store8.webp' alt='' /> 
                <div className='pr-gr'>
                    <div className='sp-an'> 
                        <span className='pr-1'>$70.00</span>
                        <span className='pr-2'>$84.00</span>

                    </div>
                    <p className='pr-3'>Wamboudin Ribeye</p>

                </div>

            </div>
            <span className='both'>
                <div className='ecomm'>
                    <span className='col-1'>
                    <img src='./pictures/store4.webp' alt='' />
                    <div className='two'>
                        <span className='num'>$91.00</span>
                        <span className='txt'>Srehenderit dolore</span>

                    </div>
                    </span>

                    <span className='col-1'>
                     <img src='./pictures/store5.webp' alt='' />
                     <div className='two'>
                        <span className='num'>$0.00</span>
                        <span className='txt'>sausage crowbee</span>
                     </div>
                    </span>

                    <span className='col-1'>
                     <img src='./pictures/store6.webp' alt='' /> 
                     <div className='two'>
                        <span className='num'>$71.00</span>
                        <span className='txt'>Ribeye hamhock</span>
                        
                        </div>   
                    </span>
                </div>
                </span>

                <div className='ecom'>

                    <span className='col-1'>
                         <img src='./pictures/store7.webp' alt='' />
                         <div className='two'>
                         <span className='num'>$55.00</span>
                         <span className='txt'>Priodent leerkas</span>
                         </div>
                    </span>

                    <span className='col-1'>
                          <img src='./pictures/store9.webp' alt='' />
                          <div className='two'>
                          <span className='num'>$80.00</span>
                          <span className='txt'>Priodent leberkas</span>
                          </div>
                    </span>

                    <span className='col-1'>
                           <img src='./pictures/store10.webp' alt='' />
                          <div className='two'>
                           <span className='num'>$42.00</span>
                           <span className='txt'>Pastrami bacon</span>
                           </div>
                    </span>
                </div>

        </div>
        
                 <div className='prod-tops'> 
                    <h4>LATEST BLOGS</h4>
                    <div className='sp'>
                        <button></button> 
                        </div>
                        <div className='sp-dot'>
                            <span>&bull;</span>
                    </div>

                </div>

                <div>
                <img src="./Bonus/lector.webp" alt="" className="lector" />
                <h4 className='lector-text'>Biten demons lector in<br></br> henderit in vulp</h4>
                <span className='lector-span'>September 25, 2018</span>
                <p className='lector-comment'>0 comment</p>
                
                </div>

                <div>
                    <h4 className='Top'>TOP RATED</h4>
                    <hr className='Top-hr'></hr>
                </div>

                </>

        

        
    )
}