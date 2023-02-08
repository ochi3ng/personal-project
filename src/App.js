
import MoreData from './UI/MoreData';
import Data from './Components/Layout/Data';
import React, { useState } from 'react';
import Modal from './UI/Modal';

function App() {
  const [openModal, setOpenModal]= useState(true)
  return (
    <div>
          <h1 className='h1'>Top Products</h1>
          {/* <MoreData/> */}
          <Modal  open={openModal} onClose={()=>setOpenModal(false)}/>
      {/* <Data/> */}
      
      
   
    </div>
  );
}

export default App;
