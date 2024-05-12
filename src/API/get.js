import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

const notesCollectionRef = collection(db, "notes");

const get = async (setNotesList) => {
  try {
    const q = query(notesCollectionRef, orderBy("timestamp", "asc")); // Order by timestamp in ascending order
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notesList = snapshot.docs.map((doc, index) => ({
        ...doc.data(),
        idFirebase: doc.id,
        id: index
      }));
      setNotesList(notesList);
    });

    console.log("Subscribed to Firestore changes.");

    // Return unsubscribe function if you want to stop listening to changes later
    return unsubscribe;
  } catch (error) {
    console.error("Error fetching notes: ", error);
  }
};

export default get;
