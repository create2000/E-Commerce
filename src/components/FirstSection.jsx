import React from 'react';
import './FirstSection.css';
// import Register from "../components3/Register";
import { Link } from 'react-router-dom';



function FirstSection () {

  
     return (
      <>
      <div className='Header'>
       <p 
          className='First-row-par'><b>Welcome to Emarket!</b>Wrap new offers/gift every single day on Weekends - New Coupon code: Happy 2017 <span className='First-row'> <img src="Eng%20icon.png" alt=""/>English</span> <span className='First-row'> $US Dollar &#9660;</span>
          </p>
          <hr></hr>

      <div className='list-items-1'>
        <span className='Img-logo'> <img src="logo.png"  alt="" /> </span>
        <div className='list-items-2'>
        <ul className='list-items'>
          <li>Home <span className='arrow'>&#9660;</span>
            <ul>
              <li>
                {/* <HomeLayout/> */}
              </li>
              </ul> 
          </li>
          <li>Pages <span className='arrow'>&#9660;</span></li>
          <li>Blogs <span className='arrow'>&#9660;</span></li>
          <li>Shop <span className='arrow'>&#9660;</span></li>
          <li>Collection <span className='arrow'>&#9660;</span></li>
          <li>Marketplace <span className='arrow'>&#9660;</span></li>
           <span className='sign-up'> <Link to ="/Login" className='sign-login'>Login</Link> or <Link to ="/Register" className='sign-login'>Register</Link></span>

            
        </ul> 

        </div>
      
      </div> 

        <div className='menu-button-row'>
           <button className='button-icon'> 
           <img src="./menu.png" alt="" className='menu-button'/>
           ALL CATEGORIES</button> 
           <div></div>

           <div className='menu-button-row-2'>
           <button className='button-icon-2'>All Category</button> 
           <input className='plc-holder' type='text' placeholder='Search'></input>
           {/* <img src='./mag-glass.png'  alt='' className='glass-icon-2' /> */}
           <span className='glass-icon-2'></span>

           </div>
            <div className='order'>
              <img src='./refresh-icon.png' alt='' className='refresh-icon' />
              <img src='./heart-icon.png' alt='' className='heart-icon' />
              <img src='./shopping-bag.png' alt='' className='shopping-bag' />
              <span >MY CART <span className='order-text'>-$0.00</span></span>
              <div>

            </div>
           </div>

        </div>
        </div>
          
      </>
  );
 
 }
 export default FirstSection
