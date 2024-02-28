import React from 'react'
 import Addtodo from './components/Addtodo'
 import Todos from './components/Todos'
 import User from './User'
// import Home from './Compo/Home'


export default function App() {
  return (
    <div>
     
      <Addtodo/> 
     <Todos/> 
     <User data ={{name:'sarita pal age:24'}}/>
       {/* <Home/> */}
    </div>
  )
}
