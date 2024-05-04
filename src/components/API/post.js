import 'firebase/firestore';
import { db } from './firebase';
import {
  collection,
  addDoc,
} from "firebase/firestore";

const moviesCollectionRef = collection(db, "notes");

 const post = async (inputValue) => {

    try {
      await addDoc(moviesCollectionRef, {
        title: inputValue.title,
        description: inputValue.description,
        id : inputValue.id
      });

      console.log("Added");
    } catch (err) {
      console.error(err);
    }
  };


export default post

