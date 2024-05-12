
import React, { useState } from 'react'

import { useStateContext } from '../context/context';
import update from '../API/put';


function NoteContent({item}) {
  
  const [title, settitle] = useState(item.title)
  const [description, setdesciption] = useState(item.description)

  
  const {setopenNote, openNote , setmodelSheet} = useStateContext();
  

  const _onEdit = ()=>{
   
   const isValid =   (title.length > 0) && title === item.title && description === item.description
    if(!isValid){
      return;
    }else{
       update(item.idFirebase , { title , description});
       setopenNote(false)
       setmodelSheet(false)
      }
    setopenNote(false)

   }

   function handleKeyDown(event) {
    if (event.key === "Enter" && openNote) {
      _onEdit()
      console.log("Onedit")
    }
  }
  

  document.onkeydown = (event)=>handleKeyDown(event);

  return (
    <div className='container m-2 mt-2'>

       <div className='w-full'>
      
          <input type="text" 
          className='w-full p-2 outline-0 font-bold 
           border-gray-400 border-2 rounded-t-md ' 
          placeholder='Title' 
          required
          value={title}
          onChange={(e)=> settitle(e.target.value)} 
         />
       </div>

       <textarea 
       className='w-full border-gray-300 border-2 mt-3 h-[400px] md:h-[500px]  p-3 outline-0 max-h-[600px]' 
       placeholder='Description' 
       required 
       value={description}
       onChange={(e)=> setdesciption(e.target.value)}  >

       </textarea>

       <div className='flex justify-end '>
        <button className=' px-2 py-1 text-gray-700 font-semibold  ' 
        onClick={()=> setopenNote(false)}>Cancel</button>
        <button type='submit' 
        className='bg-main px-4 py-1 text-white font-semibold rounded-md' 
        onClick={()=> _onEdit()} >Edit</button>
       </div>
      
    </div>
  )
}

export default NoteContent