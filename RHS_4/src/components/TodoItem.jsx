import "./TodoItem.css";
import dayjs from "dayjs";

const TodoItem = ({ id, isDone, content, createData, handleDelete }) => {
  return (
    <div className="todoItem">
      <div className="checkbox_col">
        <input checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">{dayjs().format("YYYY.M.D")}</div>
      <div className="btn_col">
        <button onClick={handleDelete}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
