import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../Features/todo/TodoSlice'
import { updateTodo } from '../Features/todo/TodoSlice'


export default function Todos() {
    const todos = useSelector(state => state.todos)
    const [UpdateText,setUpdateText] = useState('')
    const dispatch = useDispatch()
    const handleUpdate = (id) =>{
     
      dispatch(updateTodo({id, text:UpdateText}))
      setUpdateText('')
  }

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
          
        <input type="text" placeholder='Update' value={UpdateText} 
         onChange={(e)=>setUpdateText(e.target.value)}/>
        
          <button onClick={()=>handleUpdate(todo.id)}>
             Update
          </button>

        </li>
      ))}
    </div>
  )
}
