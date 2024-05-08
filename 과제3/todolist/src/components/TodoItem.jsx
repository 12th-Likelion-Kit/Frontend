import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createDate , onDelete}) => {
  const [isChecked, setIsChecked] = useState(isDone);
  
    const onChangeCheckbox = () => {
        setIsChecked((prev => !prev));
    };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="todoItem">
      <div className="checkbox_col">
        <input
          checked={isChecked}
          type="checkbox"
          onChange={onChangeCheckbox}
        />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">{createDate}</div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
