import React from 'react'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'


export default function App() {
  return (
    <div>
      <h1>Start Redux with chai and code</h1>
      <Addtodo/>
      <Todos/>
    </div>
  )
}
