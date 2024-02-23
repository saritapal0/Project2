import {createSlice,nanoid} from '@reduxjs/toolkit'


const initialState = {
    todos: [{id:1,text:"Hello Sarita"}]
}


export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todos)=>todos.id!==action.payload)
        },

        updateTodo:(state,action)=>{
           const {id,text} = action.payload
           const oldTodo = state.todos.find(todo=>todo.id===id)
           if(oldTodo){
            oldTodo.text=text
           }
        }
    }
})


export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer