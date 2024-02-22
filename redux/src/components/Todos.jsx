import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../Features/todo/TodoSlice'

export default function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo)=>(
        <li key = {todo.id}>
          {todo.tex}
          <button  onClick = {()=>dispatch(removeTodo(todo.id))}>
             x
          </button>
        </li>
      ))}
    </div>
  )
}
