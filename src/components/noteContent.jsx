
import React, { useState } from 'react'

import data from '../data/data'
import { useStateContext } from './context/context';
import { NoteModel } from './model/note';


var {notes} = data;



function NoteContent({item}) {
  
  const [title, settitle] = useState(item.title)
  const [description, setdesciption] = useState(item.description)

  
  const {setopenAddModel , setopenNote} = useStateContext();
  

  const _onsave = ()=>{
    console.log("test" + isNaN(+"122D"));

   const isValid =  isNaN(Number.parseInt(title)) && (title.length > 0)
    if(!isValid)
    return;

    const index = notes.indexOf(item)
    
    notes[index].title = title
    notes[index].description = description

    setopenNote(false)
    

    console.log("Im here")
   }

  return (
    <div className='container m-2 mt-2'>

       <div className='w-full border-black border '>
      
          <input type="text" className='w-full p-2 outline-0 font-bold' placeholder='Title' onChange={(e)=> settitle(e.target.value)} required value={title}/>
       </div>

       <textarea className='w-full mt-3 h-[400px] md:h-[500px] border border-black p-3 outline-0 max-h-[600px]' placeholder='Description' required onChange={(e)=> setdesciption(e.target.value)} value={description} >

       </textarea>

       <div className='flex justify-end '>
        <button className=' px-2 py-1 text-gray-900 font-bold rounded-xl ' onClick={()=> setopenNote(false)}>Cancel</button>
        <button type='submit' className='bg-main px-2 py-1 text-white font-bold rounded-xl' onClick={()=> _onsave()} >Edit</button>
       </div>
      
    </div>
  )
}

export default NoteContent