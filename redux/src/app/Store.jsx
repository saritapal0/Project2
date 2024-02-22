import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Features/todo/TodoSlice'


export const Store = configureStore({
    reducer:todoReducer
})



