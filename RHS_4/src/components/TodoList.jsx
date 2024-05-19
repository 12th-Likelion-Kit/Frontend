import "./TodoList.css";
import TodoItem from "./TodoItem.jsx";
import { useState } from "react";

const TodoList = ({ todo, setTodo }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((item) =>
          item.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const handleDelete = (id) => {
    const updatedTodos = todo.filter((item) => item.id !== id);
    setTodo(updatedTodos);
  };

  return (
    <div className="todoList">
      <h4>Todo List🌱</h4>
      <input
        className="searchbar"
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
