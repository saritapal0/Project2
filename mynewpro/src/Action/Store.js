import {configureStore} from '@reduxjs/toolkit'
 import menuReducer from '../Action/SidebarSlice'
import movieReducer from '../Action/movieSlice'


 const Store = configureStore({
    reducer:{
      menu:menuReducer,
      movie:movieReducer,
    },
});

export default Store