import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodoAction, deleteTodoFromDbAction } from '../redux/todo/todoActions' 

function Todo({todo}) {
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{todo.title} </h1>
        <h2>{todo.completed?"done":"not done"}</h2>
        <button onClick={()=>dispatch(deleteTodoFromDbAction(todo))}>delete todo</button>
    </div>
  )
}

export default Todo