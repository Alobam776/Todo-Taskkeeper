import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdUndo } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

function TaskList(props) {
  const [completed, setCompleted] = useState(props.completed);

  function handleClick() {
    props.onDelete(props.id);
  }

  const handleToggle = () => {
    setCompleted(!completed);
    props.onToggle();
  };

  return (
    <div className={`note ${completed ? "completed" : ""}`}>
      <h1 style={{ textDecoration: completed ? "line-through" : "none" }}>
        {props.title}
      </h1>
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>
        {props.content}
      </p>
      <button onClick={handleToggle}>
        {completed ? <MdUndo /> : <GiCheckMark />}
      </button>
      <button onClick={handleClick}>
        <MdDelete />
      </button>
    </div>
  );
}

export default TaskList;
