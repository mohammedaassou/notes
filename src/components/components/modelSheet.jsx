

import React from 'react'

import { useStateContext } from '../../context/context';
import deleteNoteFromDB from '../../API/delete';



function ModelSheet({item}) {
  const {setopenNote , setopenAddModel , setItem , setmodelSheet} = useStateContext();
  
  const deleteNote = ()=>{
    deleteNoteFromDB(item.idFirebase);
    setmodelSheet(false);
  }


  return (
    <div className='h-36 w-36 sm:h-52  
    sm:w-52 bg-white absolute 
    right-2 top-12 p-2 sm:p-5 rounded-xl 
    flex flex-col justify-center font-semibold 
    transition-colors z-40 text-gray-800 text-sm 
    sm:text-base ' 
    style={{boxShadow : "0px 0px 5px 1px gray"}}>

        <button className='hover:text-main my-1 ' 
        onClick={()=>{
           setopenAddModel(false); 
           setopenNote(true);
           setItem(item);
        }}>Open</button>
        <button className='hover:text-main' onClick={()=> deleteNote()}>Delete</button>
    </div>
  )
}

export default ModelSheet