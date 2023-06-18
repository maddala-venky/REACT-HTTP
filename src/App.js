import React, { useState } from "react";
import "./App.css";
import TodoList from "./component/TodoList";

//import ParentComponent from "./component/ParentComponent";
//import Todos from "./component/Todos";
// import Message from "./component/Message";
//import DataFetchingOne from "./component/DataFetchingOne";
//import CounterOne from "./component/CounterOne";
//import DataFetching from "./component/DataFetching";
//import IntervalClassCounter from "./component/IntervalClassCounter";
//import MouseContainer from "./component/MouseContainer";
//import PostList from "./component/PostList";
//import PostForm from "./component/PostForm";
//import PostList from "./component/PostList";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
    console.log(task);
  };
  const deleteHandler = (indexvalue) => {
    const newTodos = todos.filter((todo, index) => index !== indexvalue);
    setTodos(newTodos);
  };

  const itemHandler = (newvalue) => {
    const newTodos = todos.filter((todo, index) => index !== newvalue);
    setTodos(newTodos);
  };
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo Mangement Application</h5>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                name="task"
                value={task}
                onChange={changeHandler}
              />
              &nbsp;
              <input type="submit" value="Add" name="Add" />
            </form>
            <TodoList
              todolist={todos}
              deleteHandler={deleteHandler}
              itemHandler={itemHandler}
            />
          </div>
        </div>
      </center>

      {/* <Message /> */}
      {/* <Todos /> */}
      {/* /<ParentComponent /> */}
      {/* <DataFetchingOne /> */}
      {/* <CounterOne /> */}
      {/* <DataFetching /> */}
      {/* <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
    </div>
  );
};

export default App;
