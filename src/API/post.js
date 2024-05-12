import 'firebase/firestore';
import { db } from './firebase';
import {
  collection,
  addDoc,serverTimestamp 
} from "firebase/firestore";

const notesCollectionRef = collection(db, "notes");

 const post = async (inputValue) => {

    try {
    var res = await addDoc(notesCollectionRef, {
        title: inputValue.title,
        description: inputValue.description,
        timestamp: serverTimestamp(),
      });

     

    } catch (err) {
      console.error(err);
    }
   
  };


export default post

