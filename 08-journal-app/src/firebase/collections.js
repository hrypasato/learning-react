import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "./config"

export const createNewNote = async ({ uid, newNote }) =>{
    const newDoc = doc(collection(FirebaseDB,`${uid}/journal/notes`));
    await setDoc(newDoc, newNote);
    return {
        id:newDoc.id,
    }
}

export const loadNotes = async ({ uid }) => {
    const userCollection = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(userCollection);
    
    const notes = [];
    
    docs.forEach( doc => {
        notes.push({ id:doc.id, ...doc.data() });
    });

    return notes;
}

export const updateNoteOnDB = async ({ uid, note }) => {
    const noteToUpdate = { ...note };
    delete noteToUpdate.id;

    const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
    await setDoc(docRef, noteToUpdate, { merge:true });
}

export const deleteNote = async ({ uid, note }) => {
    const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
    await deleteDoc(docRef);
}