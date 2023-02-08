import React, { useState } from 'react';
import Modal from '../../UI/Modal';

import './DataFetching.css'
import { AiOutlineStar } from 'react-icons/ai';
import RatingStar from '../Rating/RatingStar';

function DataFetching(props) {
  const [openModal, setOpenModal] = useState(false)
  return (

    <div>
      <div className='datafetch'>
        <div className='innerdiv'>
          <img className='images-wooden' src={props.img} alt='' />
          <RatingStar className='ratings' setOpenModal={setOpenModal} />
        </div>
      </div>

      <div className='title-price'>
        <div >{props.title}</div>
        <div className='ratingstar'>
        <div className='starrating'>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
         <div>
            <AiOutlineStar />
            <AiOutlineStar />
         </div>
        </div>
        <div>$ {props.price.toFixed(2)}</div>
      </div>
      {openModal && <CartModal openModal={openModal} setOpenModal={setOpenModal} props={props} />}
    </div>
  )
}

export default DataFetching
const CartModal = ({ openModal, setOpenModal, props }) => {
  return (
    <div className='cart-modal'>
      <div className='modal-header'>
        <Modal open={openModal} onClose={() => setOpenModal(false)} props={props} />
      </div>
    </div>
  )
}