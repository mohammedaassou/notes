import React, { useState } from 'react'

import NoteModel from '../model/note'

import { useStateContext } from '../context/context';

import post from '../API/post'
import Model from './components/model';


function Add() {
  
  const [title, settitle] = useState("")
  const [desciption, setdesciption] = useState("")

  
  const {setopenAddModel , model , setmodel , openAddModel} = useStateContext();
  
  
  function handleKeyDown(event) {
    console.log(openAddModel)
    if (event.key === "Enter" && openAddModel) {
       _onsave()
       console.log("On save")
    }
  }
  

document.onkeydown = (event)=>handleKeyDown(event);
  

  const _onsave = ()=>{
   
   const isValid =  (title.length > 0)
    if(!isValid){
      setmodel(true);
    }else{
      var newNote = new NoteModel(title , desciption);
      post(newNote);
      setopenAddModel(false)
    }
   }

  return (
    <div className='container m-2 mt-2'>
      
      <Model show={model}  handleClose={()=> setmodel(false)}/>

      <form action="">

       <div className='w-full border-black border '>
      
          <input type="text" className='w-full p-2 outline-0 font-bold' placeholder='Title' onChange={(e)=> settitle(e.target.value)} />
       </div>

       <textarea className='w-full mt-3 h-[400px] md:h-[500px] border border-black p-3 outline-0 max-h-[600px]' placeholder='Description'  onChange={(e)=> setdesciption(e.target.value)}>

       </textarea>

       <div className='flex justify-end '>
        <button className=' px-2 py-1 text-gray-900 font-bold rounded-xl ' onClick={()=> setopenAddModel(false)}>Cancel</button>
        <button type='button' className='bg-main px-2 py-1 text-white font-bold rounded-xl' onClick={()=> _onsave()} >Save</button>
       </div>
       </form>
      
    </div>
  )
}

export default Add