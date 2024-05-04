import React, { createContext , useState , useContext  } from "react";


const StateContext = createContext();



export const ContextProvider = ({children})=>{
    const [openAddModel, setopenAddModel] = useState(false)
    const [openNote , setopenNote]  = useState(false)
    const [Item, setItem] = useState(null)
    const [modelSheet, setmodelSheet] = useState((openNote || openAddModel))
    const [clickedId, setclickedId] = useState(null)
    const [NotesList, setNotesList] = useState([]);
    const [isGet, setisGet] = useState(false);
  
    return (
        <StateContext.Provider value={{
            openAddModel : openAddModel,
           setopenAddModel : setopenAddModel,
            openNote : openNote,
            setopenNote : setopenNote,
            Item : Item,
            setItem : setItem,
            modelSheet : modelSheet,
            setmodelSheet : setmodelSheet,
            clickedId : clickedId,
            setclickedId : setclickedId,
            NotesList : NotesList,
            setNotesList: setNotesList,
            isGet : isGet,
            setisGet  : setisGet

        }}>
                {children}
        </StateContext.Provider>
    )
}


export const useStateContext = ()=> useContext(StateContext)