import React from 'react'
import './Modal.css'

import {AiOutlineHeart} from 'react-icons/ai'
import {CiFacebook} from 'react-icons/ci'
import {FiTwitter} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {TfiGoogle} from 'react-icons/tfi'
import {AiFillStar} from 'react-icons/ai';

import WoodenImage from '../Components/Layout/wooden.webp'
const Modal=({open, onClose}) =>{
    console.log(onClose)
    if(!open) return null
  return (
<div className='outer-div'>
  <div className='main-header'> 
  <div className='header-view'>
        <div>QUICK VIEW</div>
        <div className='continue'>
        <div className=''>CONTINUE TO SHOPPING</div>
         <button className='cancle' onClick={onClose}>x</button>
        </div>
        </div>
        <div>
  <h1>Wooden Chair</h1>
        
        <div className='modalcontainer'>
        <img src={WoodenImage} className='images' alt=''/>
      <div> 
      
   <div>
   <div className='ratingstars'>
     <div className='starrating'>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      </div>
      <div>
      <AiFillStar/>
      <AiFillStar/>
      </div>
      <div>(1 customer review)</div>
     </div>
      <div className='amountt'>$ 35.00</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
 nemo autem.</p>
     <div className='collection'><div>
<div className='amountdiv'>
      <div className='amount'>Category:</div>
      <div>Chair Collection </div>
</div>
      <div className='amount'>SKU:8520</div>
    <div className='amountdiv'>
      <div className='amount'>Tags:</div>
      <div>Chair</div>
      </div>
        </div>
        <div>
        <div className='amount'>Colour</div>
    <div className='amountdiv'>
      <div className='amount'>Available:</div>
    <div className='stock'>In Stock</div>
      </div>
    <div className='amountdiv'>
      <div className='amount' >Size:</div>
      <div>X M L</div>
      </div>
        </div>
     </div>
      </div> 
   </div>
        </div>
    <div className='buttonico'>
    <div className='button'>
    <button className='button-icon'>-</button>
    <button className='button-icon'>1</button>
    <button className='button-icon'>+</button>
    <button className='addtocart'>Add To Cart</button>
    <button className='button-icon'><AiOutlineHeart/></button>
    </div>
    <div className='classshare'>
     <div className='share'>Share this items :</div>
      <div className='icon-header' >
  <div className='icon'>
   <CiFacebook/>
    <FiTwitter/>
    <BsInstagram/>
    <AiFillYoutube/>
    <TfiGoogle/>
</div>
</div>
</div>
    </div>
    
  </div>
  </div>
</div>
  )
}

export default Modal