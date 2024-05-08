import { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
      };
    
      const onKeyDown = (e) => {
        if (e.key === "Enter") {
          onSubmit();
        }
      }
    
      const onSubmit = () => {
        if (!content) {
          inputRef.current.focus();
          return;
        }
    
        onCreate(content);
        setContent("");
      }
  return (
    <div className="todoEditor">
      <h4>새로운 Todo 작성하기✏️</h4>
      <div className="editor_wrapper">
        <input ref={inputRef} value={content} onKeyDown={onKeyDown} onChange={onChangeContent} placeholder="새로운 Todo..." />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;