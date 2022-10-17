import { createNewNote, deleteNote, loadNotes, updateNoteOnDB } from "../../firebase/collections";
import { fileUpload } from "../../helpers/fileUpload";
import { addNewEmptyNote, setActiveNote, savingNote, 
        setNotes, setSaving, updateNote, setPhotosToActiveNote, 
        deleteNoteById } from "./";

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        dispatch(savingNote());

        const { uid } = getState().auth;

        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime(),
        }
        const { id } = await createNewNote({ uid, newNote });
        newNote.id = id;

        dispatch( addNewEmptyNote(newNote));
        dispatch( setActiveNote( newNote ));
    }
}

export const startLoadingNotes = () => {
    return  async (dispatch, getState) => {
        const { uid } = getState().auth;
        const notes = await loadNotes({ uid });
        dispatch(setNotes( notes ));
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState ) => {
        dispatch( setSaving() );
        const { uid } = getState().auth;
        const { active:note } = getState().journal;
        await updateNoteOnDB({ uid, note });
        
        dispatch(updateNote( note ));
    }
}

export const startUploadingFiles = ( files = {} ) => {
    return async ( dispatch ) => {
        dispatch(setSaving());

        const fileUploadPromises = [] 
        
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file)  )            
        }

        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveNote( photosUrls ));
    }
}

export const startDeletingNote = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        await deleteNote({ uid, note });
        dispatch( deleteNoteById(note.id));
    }
}