import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdUndo } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

function TaskList(props) {
  const [disabled, setDisabled] = useState(false);

  function handleClick() {
    props.onDelete(props.id);
  }

  const handleToggle = () => {
    setDisabled(!disabled);
    props.onToggle();
  };

  return (
    <div className={`note ${disabled ? "disabled" : ""}`}>
      <h1 style={{ textDecoration: props.completed ? "line-through" : "none" }}>
        {props.title}
      </h1>
      <p style={{ textDecoration: props.completed ? "line-through" : "none" }}>
        {props.content}
      </p>
      <button onClick={handleToggle}>
        {props.completed ? <MdUndo /> : <GiCheckMark />}
      </button>
      <button onClick={handleClick}>
        <MdDelete />
      </button>
    </div>
  );
}

export default TaskList;
