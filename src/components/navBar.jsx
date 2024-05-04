import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { useStateContext } from './context/context';

function NavBar() {

  const {setopenAddModel , setopenNote} = useStateContext()

  return (
    <div className='w-full container py-5 px-2 sm:px-0'>
      <div className="flex justify-between">
         <h1 className='text-white font-semibold text-xl uppercase'>Notes</h1>
         <FiPlus color='white' size={30} className='cursor-pointer' onClick={()=>{ 
          setopenAddModel(prev=> !prev);
          setopenNote(false)

         } }/>
         
      </div>
    </div>
  )
}

export default NavBar