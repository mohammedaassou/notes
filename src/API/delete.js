import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";



const deleteNoteFromDB = async (id) => {
    try {
        const noteDoc = doc(db, "notes", id);
        await deleteDoc(noteDoc);
        } catch (error) {
        console.error(error);
        }
  };
  

  export default deleteNoteFromDB