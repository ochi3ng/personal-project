import React from 'react'
import { useState } from 'react';

import './DataFetching.css'
import { AiOutlineStar } from 'react-icons/ai';
import RatingStar from '../Rating/RatingStar';

function DataFetching(props) {

  return (

  <div>
  <div className='datafetch'>
    <div className='innerdiv'>
    <img className='images-wooden' src={props.img}/>
    <RatingStar className='ratings'/>
    </div>
    </div>
       <div className='title-price'>
       <AiOutlineStar/>
       <div className=''>{props.title}</div>
        <div className=''>$ {props.price.toFixed(2)}</div>
       </div>
  </div>
  )
}

export default DataFetching