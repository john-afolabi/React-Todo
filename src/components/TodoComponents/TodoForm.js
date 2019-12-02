import React from 'react';

const Form = props => {
  return (
    <form>
      <input
        onChange={props.onInputChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default Form;