import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NewTodoTask from "./components/NewTodoTask/NewTodoTask";
import TodoList from "./components/TodoList/TodoList";

let count = 4;

function uniqueId() {
  count = count + 1;
  return count;
}

const INITIAL_TODO = [
  {
    id: 1,
    task: "Read a book",
    dueDate: new Date("2023-02-28"),
    isFinished: false,
  },
  {
    id: 2,
    task: "Buy dog food",
    dueDate: new Date("2024-06-14"),
    isFinished: true,
  },
  {
    id: 3,
    task: "Go to cinema",
    dueDate: new Date("2023-05-20"),
    isFinished: true,
  },
  {
    id: 4,
    task: "Print homework",
    dueDate: new Date("2024-07-26"),
    isFinished: true,
  },
];

function App() {

  const [todoList, setTodoList] = useState(INITIAL_TODO);
  const [curYear, setCurYear] = useState("2023");
  const [isShow, setIsShow] = useState(false);

  const addNewTodo = (newTodo) => {
    const newTodoItem = {
      ...newTodo,
      id: uniqueId(),
    }
    setTodoList([...todoList, newTodoItem]); //add อันใหม่ไว้ข้างหลัง
  }

  const deleteHandler = (id) => {
    const newTodoList =  todoList.filter((e) => e.id !== id);
    setTodoList(newTodoList);
  }

  const editHandler = (id, todo) => {
    const newTodoList = [...todoList];
    const index = todoList.findIndex(e => e.id === id)
    newTodoList[index] = {...todo};
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <Header value={curYear} onChange={e => setCurYear(e.target.value)}/>
      {isShow ? <NewTodoTask setIsShow={setIsShow} addNewTodo={addNewTodo}/> :
        <div style={{marginTop : "10px"}}>
          <button onClick={() => setIsShow(true)}>Add new Todo</button>
        </div>
      }
      <TodoList editHandler={editHandler} deleteHandler={deleteHandler} currentYear={curYear} todoList={todoList} />
    </div>
  );
}

export default App;
