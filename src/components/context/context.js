import React, { createContext , useState , useContext  } from "react";


const StateContext = createContext();



export const ContextProvider = ({children})=>{
    const [openAddModel, setopenAddModel] = useState(false)

    const [openNote , setopenNote]  = useState(false)
    const [Item, setItem] = useState(null)
    const [modelSheet, setmodelSheet] = useState((openNote || openAddModel))


    return (
        <StateContext.Provider value={{
            openAddModel : openAddModel,
           setopenAddModel : setopenAddModel,
            openNote : openNote,
            setopenNote : setopenNote,
            Item : Item,
            setItem : setItem,
            modelSheet : modelSheet,
            setmodelSheet : setmodelSheet
        }}>
                {children}
        </StateContext.Provider>
    )
}


export const useStateContext = ()=> useContext(StateContext)