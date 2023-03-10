import React from "react";
import { addNote } from "../utils/local-data";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";

function AddNotes() {
  const navigate = useNavigate();

  function onAddNoteHandler({title, body}) {
    addNote({title, body});
    navigate('/');
  }
  return (
    <>
    <NoteInput addNote={onAddNoteHandler}/>
    </> 
  );
}

export default AddNotes;
