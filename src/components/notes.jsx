import React from 'react'


import { useStateContext } from '../context/context'
import ModelSheet from './components/modelSheet';





function Note({item}){
  const {setopenNote , setopenAddModel , setItem   , setmodelSheet , setclickedId } = useStateContext();

   
  // get data


  return  <div className='bg-main  my-2 px-5  text-white text-sm rounded-xl flex justify-between items-center relative' >
  <h1 className='flex-1 h-full cursor-pointer py-5 pr-0' onClick={()=>{
    setopenAddModel(false); 
    setopenNote(true);
    setItem(item);
  }  }> {item.title}</h1>


   <div className='font-extrabold text-xl hover:text-gray-200 w-10 text-right flex items-center justify-center  cursor-pointer' 
    onClick={(e)=>{
      const ele = e.target.id;
      setclickedId(+ele);
      
      setmodelSheet(prev => !prev);

  } } 
    ><span id={item.id}>...</span>

   </div>
    
  </div>
   
}


function Notes() {
  const {modelSheet , clickedId , NotesList} = useStateContext();
   
 
  return ( 
    <div className='container mt-10 px-2'>
      {
        NotesList.map((e , index)=>  
         <div className='relative'  key={index}> 
          <Note item = {e}  />
          {
          
          modelSheet && e.id === clickedId && <ModelSheet item={e} />
          }
         </div>
        )
      }
    </div>
  )
}

export default Notes