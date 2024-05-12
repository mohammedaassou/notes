import React  from 'react'
import { FiPlus } from "react-icons/fi";
import { useStateContext } from '../context/context';
import { IoPencilSharp } from "react-icons/io5";

function NavBar() {

  const {setopenAddModel , setopenNote , setmodel} = useStateContext()

  return (
    <div className='w-full container py-5 px-2'>
      <div className="flex justify-between">
         <h1 className='text-white font-semibold text-xl uppercase flex items-center select-none'><span className='pr-1'>Notes</span><span><IoPencilSharp/></span></h1>
         <FiPlus color='white' size={30} className='cursor-pointer' onClick={()=>{ 
          setopenAddModel(prev=> !prev);
          setopenNote(false)
          setmodel(false);
         } }/>
         
      </div>
    </div>
  )
}

export default NavBar