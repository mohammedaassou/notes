import React, { useEffect, useState } from 'react'

import data from '../data/data'
import { useStateContext } from './context/context';
import { NoteModel } from './model/note';


import post from './API/post'
import { get } from 'firebase/database';


var {notes} = data;


function Add() {
  
  const [title, settitle] = useState("")
  const [desciption, setdesciption] = useState("")

  
  const {setopenAddModel , NotesList , setNotesList , setisGet} = useStateContext();
  

  const _onsave = ()=>{
    // console.log(isNaN(Number.parseInt(title)));

   const isValid =  isNaN(Number.parseInt(title)) && (title.length > 0)
    if(!isValid)
    return;
    
    var newNote = new NoteModel(title , desciption);

    post(newNote);

    NotesList.push(newNote);

    setopenAddModel(false)
    
    setisGet(prev=> !prev);
    
   }

  return (
    <div className='container m-2 mt-2'>
      <form action="">

       <div className='w-full border-black border '>
      
          <input type="text" className='w-full p-2 outline-0 font-bold' placeholder='Title' onChange={(e)=> settitle(e.target.value)} required/>
       </div>

       <textarea className='w-full mt-3 h-[400px] md:h-[500px] border border-black p-3 outline-0 max-h-[600px]' placeholder='Description' required onChange={(e)=> setdesciption(e.target.value)}>

       </textarea>

       <div className='flex justify-end '>
        <button className=' px-2 py-1 text-gray-900 font-bold rounded-xl ' onClick={()=> setopenAddModel(false)}>Cancel</button>
        <button type='submit' className='bg-main px-2 py-1 text-white font-bold rounded-xl' onClick={()=> _onsave()} >Save</button>
       </div>
       </form>
      
    </div>
  )
}

export default Add