import React from 'react'
import { useState,useDispatch } from 'react-redux'
import { addTodo } from '../Features/todo/TodoSlice'


export default function Addtodo() {
    const [input,setInput] = useState('')
    const [dispatch] = useDispatch()
    const addTodoHnadler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }



  return (
    <form onSubmit={addTodoHnadler} className='space-x-3 mt-12'>

    <input type='text' className='bg-grey-800'
     placeholder='Enter Todo' value={input}
    onChange={(e)=>setInput(e.target.value)}/>

    <button
    type='submit'
    className='text'
    >
     Add Todo
    </button>
    </form>
  )
}
