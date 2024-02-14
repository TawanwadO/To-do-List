import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  const todoList = props.todoList;
  const currentYear = props.currentYear;
  const filteredTodo = todoList.filter(
    (t) => t.dueDate.getFullYear() === Number(currentYear)
  );

  return (
    <div className="tdl-container">
      {filteredTodo.map((e) => (
        <TodoItem
          editHandler={props.editHandler}
          deleteHandler={props.deleteHandler}
          id={e.id}
          key={e.id}
          task={e.task}
          isFinished={e.isFinished}
          dueDate={e.dueDate}
        />
      ))}
    </div>
  );
}

export default TodoList;
