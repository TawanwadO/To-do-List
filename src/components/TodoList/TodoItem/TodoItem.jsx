import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const [checkbox, setCheckbox] = useState(props.isFinished);
  const [isEdit, setIsEdit] = useState(false);
  const [curTask, setCurTask] = useState("");
  const [curDate, setCurDate] = useState("");

  const task = props.task;
  const dueDate = props.dueDate;
  const date = dueDate.getDate();
  const month = dueDate.getMonth();
  const year = dueDate.getFullYear();

  const resolveDueDate = (date, month, year) => {
    let convertedDate, convertedMonth;

    if(String(date).length === 1) {
      convertedDate = "0"+date;
    } else {
      convertedDate = date;
    }

    if(String(month).length === 1) {
      convertedMonth = "0"+month;
    } else {
      convertedMonth = month;
    }

    return `${year}-${convertedMonth}-${convertedDate}`; //ห้ามเว้นวรรค
  }

  const onClickEdit = () => {
    setIsEdit(true);
    setCurTask(props.task);
    const dateToSet = resolveDueDate(date, month, year);
    setCurDate(dateToSet);
  };

  const onClickDone = () => {
    const ediValues = {
      id: props.id,
      task: curTask,
      dueDate: new Date(curDate),
      isFinished: checkbox
    };
    setIsEdit(false);
    props.editHandler(props.id, ediValues);
  }

  if (isEdit) {
    return (
      <div className="form-control">
        <div className="cb-container">
          <input
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
            type="checkbox"
          />
        </div>
        <div className="tn-container">
          <input value={curTask} onChange={(e) => setCurTask(e.target.value)} />
        </div>
        <div className="dd-container">
          <input
            value={curDate}
            onChange={(e) => setCurDate(e.target.value)}
            type="date"
          />
        </div>
        <div className="ed-container">
          <button onClick={onClickDone}>Done</button>
        </div>
        <div className="dl-container">
          <button onClick={() => setIsEdit(false)}>Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-control">
      <div className="cb-container">
        <input
          checked={checkbox}
          onChange={(e) => setCheckbox(e.target.checked)}
          type="checkbox"
        />
      </div>
      <div className="tn-container">{task}</div>
      <div className="dd-container">
        {date}/{month}/{year}
      </div>
      <div className="ed-container">
        <button onClick={onClickEdit}>Edit</button>
      </div>
      <div className="dl-container">
        <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
