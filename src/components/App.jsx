import React from "react";
import { useState } from "react";
import Header from "./header";
import TaskForm from "./taskform";
import TaskList from "./tasklist";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function toggleCheckbox(index) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes[index] = {
        ...updatedNotes[index],
        completed: !updatedNotes[index].completed,
      };
      return updatedNotes;
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <TaskForm onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <TaskList
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            completed={noteItem.completed}
            onToggle={() => toggleCheckbox(index)}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
