import React, { useEffect }  from 'react'

import NavBar from './navBar'
import Notes from './notes'
import { useStateContext } from './context/context'
import Add from './add'
import get from './API/get';

import NoteContent from './noteContent'

// import Note from './noteContent';

function Home() {
  
  const {openAddModel , openNote , Item , setNotesList} = useStateContext();
  
  useEffect(()=>{
    get(setNotesList);

    // console.log(NotesList + "from notes")
   
  }, [])
  
  console.log(openAddModel);
 
  console.log("####"+openAddModel || openNote)
  return (
    <div>
     <div className='flex flex-col items-center bg-main'>
      <NavBar/>
      </div>

      <div className='flex justify-center'>
     {
     !( openAddModel || openNote) && <Notes/>
      
      
      //  openNote => Note
      
       
     } 

     {
      openAddModel  && <Add/>
     }

     {
      openNote && <NoteContent item = {Item}/>
     }

      </div>
      
    </div>
  )
}

export default Home