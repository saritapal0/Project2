import {configureStore} from '@reduxjs/toolkit'
import menuReducer from '../Action/SidebarSlice'
import movieReducer from '../Action/movieSlice'
import NewsReducer from './NewsSlice'


 const Store = configureStore({
    reducer:{
      menu:menuReducer,
      movie:movieReducer,
      News:NewsReducer,
    },
});

export default Store