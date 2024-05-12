




import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

// Function to update an item in Firestore
const update = async (id, newData) => {
  try {
    const noteDocRef = doc(db, "notes", id); // Reference to the document to update
    await updateDoc(noteDocRef, newData); // Update the document with new data
    console.log("Document updated successfully!");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

export default update;













