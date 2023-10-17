import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [todo, setTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);


function implementsubmit(e)
{
  e.preventDefault();
  setTodoList([...todoList,todo]);
  setTodo("");
}

function implementdelete(idx)
{
console.log(idx);
setTodoList(todoList.filter((val,index)=>index!=idx));
}

  return (
    <div>
      <form onSubmit={implementsubmit}>
        <input type="text" placeholder="Enter text" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
        <button type="submit">Add Todo</button>
      
      </form>

      {todoList.map((val,idx) => (
        <ul>
          <li>
            {val}
            <button onClick={()=>implementdelete(idx)}>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default App;
