import React from 'react';
import '../styles.css';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    setInputText('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="form-container">
      <form className="form">
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-input-btn" type="submit">
          Enter todo
        </button>
      </form>
      <select onChange={statusHandler} className="filter-todo" name="todos">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default Form;
