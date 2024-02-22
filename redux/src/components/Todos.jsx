import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../Features/todo/TodoSlice'

export default function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo)=>(
        <li key = {todo.id}>
          {todo.text}
          <button  onClick = {()=>dispatch(removeTodo(todo.id))}>
             x
          </button>
          <br/>
        <input type="text" placeholder='Update' />
          <button>
             Update
          </button>

        </li>
      ))}
    </div>
  )
}
