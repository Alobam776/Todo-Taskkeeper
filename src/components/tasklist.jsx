import React from "react";
import { MdDelete } from "react-icons/md";
import { MdUndo } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

function TaskList(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1 style={{ textDecoration: props.completed ? "line-through" : "none" }}>
        {props.title}
      </h1>
      <p style={{ textDecoration: props.completed ? "line-through" : "none" }}>
        {props.content}
      </p>
      <button onClick={props.onToggle}>
        {props.completed ? <MdUndo /> : <GiCheckMark />}
      </button>
      <button onClick={handleClick}>
        <MdDelete />
      </button>
    </div>
  );
}

export default TaskList;
