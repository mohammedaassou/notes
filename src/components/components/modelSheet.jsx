

import React from 'react'
import { useStateContext } from '../context/context';
import data from '../../data/data';


const {notes} = data;

function ModelSheet({item}) {
  const {setopenNote , setopenAddModel ,openNote , setItem , NotesList} = useStateContext();
  
  const deleteNote = ()=>{

    
    deleteNote(item.idDB);

    console.log(item.idDB);

    NotesList.shift(item);

  }


  return (
    <div className='h-32 w-32 sm:h-52  sm:w-52 bg-gray-100 absolute right-2 top-12 p-2 sm:p-5 rounded-xl flex flex-col justify-center font-semibold transition-colors z-40 text-black text-sm sm:text-xl ' style={{boxShadow : "0px 0px 3px 1px black"}}>
        <button className='hover:text-main my-1' onClick={()=>{
           setopenAddModel(false); 
           setopenNote(true);
           setItem(item);
           console.log(openNote);
        }}>Open</button>
        <button className='hover:text-main' onClick={()=> deleteNote()}>Delete</button>
    </div>
  )
}

export default ModelSheet