import React from "react";

const TodoList = ({ todolist, deleteHandler, itemHandler }) => {
  return (
    <div>
      {todolist?.map((todo, index) => (
        <div key={index}>
          <h5>
            {todo} &nbsp;{" "}
            <button onClick={() => deleteHandler(index)}>Delete</button>
            <button onClick={() => itemHandler(index)}>Add items</button>
          </h5>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
