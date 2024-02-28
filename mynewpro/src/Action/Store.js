import {configureStore} from '@reduxjs/toolkit'
import menuReducer from '../Action/SidebarSlice'
 


 const Store = configureStore({
    reducer:{
      menu:menuReducer,
    },
});

export default Store