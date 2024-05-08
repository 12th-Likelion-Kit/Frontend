import "./TodoList.css";
import TodoItem from "./TodoItem.jsx";
import { useState } from "react";

const TodoList = ({ todo, onDelete }) => {
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

  return (
    <div className="todoList">
      <h4>Todo List🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((item) => (
          <TodoItem key={item.id} {...item} onDelete={onDelete}></TodoItem>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
