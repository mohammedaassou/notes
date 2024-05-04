import {
    getDocs,
    collection,
  } from "firebase/firestore";


import { db } from "./firebase";

const moviesCollectionRef = collection(db, "notes");


const get = async (setNotesList) => {


    try {

      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc , index) => ({
        ...doc.data(),
        id : index,
        idDB : doc.id
      }));
    
      console.log(filteredData);

      setNotesList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

export default get
