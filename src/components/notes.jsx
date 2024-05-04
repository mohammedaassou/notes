import React, { useState } from 'react'

import data from  '../data/data'

import { useStateContext } from './context/context'
import ModelSheet from './components/modelSheet';


const {notes} = data;



function Note({item}){
  const {setopenNote , setopenAddModel ,openNote , setItem , modelSheet , setmodelSheet} = useStateContext();

  const [clickedElementId, setclickedElement] = useState(-1)

  return  <div className='bg-main  my-2 px-5  text-white text-sm rounded-xl flex justify-between items-center relative' >
  <h1 className='flex-1 h-full cursor-pointer py-5 pr-0' onClick={()=>{
    setopenAddModel(false); 
    setopenNote(true);
    setItem(item);
  }  }> {item.title}</h1>


   <div className='font-extrabold text-xl hover:text-gray-200 w-10 text-right flex items-center justify-center bg-black cursor-pointer' data-id={item.id}
    onClick={(e)=>{
      const id = e.target.getAttribute( 'data-id');
      setclickedElement(prev=> prev===id ? -1 : id); // Toggle clicked element

      console.log("clicked ele" + clickedElementId);
      // Ensure state update is finished before logging
      setTimeout(() => console.log("State updated: " + clickedElementId), 0);

      setmodelSheet(prev => !prev);

      console.log(e.target)

  } } 
    ><span  data-id={item.id}>...</span>
     
   {
    +(clickedElementId) == item.id && modelSheet  && <ModelSheet item = {item}/> 
   }

   </div>
    
  </div>
   
}


function Notes() {
  const {modelSheet} = useStateContext();
 
  return (
    <div className='container mt-10 relative'>
      {
        notes.map((e , index)=>  
         <Note item = {e} key={index} />
        )
      }
    </div>
  )
}

export default Notes