import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoToDbAction } from "../redux/todo/todoActions"; 
import { useNavigate } from "react-router-dom";
function AddToDo() {
  const [todo, setTodo] = useState({  title: "", completed: false });
  const dispatch=useDispatch()
  const navigate=useNavigate()
  function handleAddTodo(){
        dispatch(addTodoToDbAction(todo))
        navigate("/")
  }
  return (
    <div>
      <input type="text" name="title"  onChange={(e)=>setTodo({...todo,title:e.target.value})}/> todo title
      <button onClick={handleAddTodo} >add</button>
    </div>
  );
}

export default AddToDo;
