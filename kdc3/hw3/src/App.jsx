// App.jsx
import "./App.css";
import Header from "./components/Header.jsx";
import TodoEditor from "./components/TodoEditor.jsx";
import TodoList from "./components/TodoList.jsx";
import { useState, useRef } from "react";
import dayjs from "dayjs";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: dayjs().format("YYYY-M-D"),
  },
  {
    id: 1,
    isDone: false,
    content: "React Hook 공부하기",
    createDate: dayjs().format("YYYY-M-D"),
  },
  {
    id: 2,
    isDone: false,
    content: "React Router 공부하기",
    createDate: dayjs().format("YYYY-M-D"),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: dayjs().format("YYYY-M-D"),
    };
    setTodo([...todo, newItem]);
    idRef.current += 1;
  };

  const onDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onDelete={onDelete} />
    </div>
  );
}

export default App;
