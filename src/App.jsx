import React, { useState } from "react";
import { getInitialData } from "./utils/data";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import "./styles/style.css";

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState("");

  const addNote = (note) => {
    setNotes((prevNotes) => [note, ...prevNotes]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const toggleArchiveNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Aplikasi Catatan Pribadi</h1>
      <SearchBar searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
      <NoteInput addNote={addNote} />
      <NoteList
        notes={filteredNotes.filter((note) => !note.archived)}
        deleteNote={deleteNote}
        toggleArchiveNote={toggleArchiveNote}
        title="Catatan Aktif"
      />
      <NoteList
        notes={filteredNotes.filter((note) => note.archived)}
        deleteNote={deleteNote}
        toggleArchiveNote={toggleArchiveNote}
        title="Catatan Arsip"
      />
    </div>
  );
}

export default App;
