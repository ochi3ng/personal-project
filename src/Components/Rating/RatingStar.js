 import './RatingStar.css'
import { useState } from 'react';

import {AiOutlineRetweet} from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillDiff} from 'react-icons/ai';
import {CiSquarePlus} from 'react-icons/ci';

const RatingStar = ({setOpenModal}) => {
 
  console.log(setOpenModal)
    return (
      <div className='iconci'>
      <CiSquarePlus className='iconci' onClick={() =>setOpenModal(prev=>!prev)}/> 
      <AiFillDiff className='iconci'/>
      <AiOutlineHeart className='iconci'/>
      <AiOutlineRetweet className='iconci'/>
      </div>
    );
  };
  
  export default RatingStar;