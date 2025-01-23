import React from "react";
import { FaTrashAlt, FaArchive, FaInbox } from "react-icons/fa";
import { showFormattedDate } from "../utils/date";

function NoteItem({ note, deleteNote, toggleArchiveNote }) {
  return (
    <div className="card">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p className="text-muted">Dibuat pada: {showFormattedDate(note.createdAt)}</p>
      <div className="flex">
        <button className="btn-delete" onClick={() => deleteNote(note.id)}>
          <FaTrashAlt /> Hapus
        </button>
        <button className="btn-archive" onClick={() => toggleArchiveNote(note.id)}>
          {note.archived ? (
            <>
              <FaInbox /> Pindahkan
            </>
          ) : (
            <>
              <FaArchive /> Arsipkan
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
