import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote, toggleArchiveNote, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            toggleArchiveNote={toggleArchiveNote}
          />
        ))
      ) : (
        <p className="note-empty">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default NoteList;
