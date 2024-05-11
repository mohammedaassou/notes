import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";



const deleteNote = async (id) => {
    // try {
    //   const movieDoc = doc(db, "notes", id);
    //   await deleteDoc(movieDoc);
    // } catch (error) {
    //    console.error(error)
    // }
  };
  

  export default deleteNote