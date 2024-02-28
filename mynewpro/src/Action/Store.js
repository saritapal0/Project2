import {configureStore} from '@reduxjs/toolkit'
import SidebarReducer from '../Action/SidebarSlice'
 


 const Store = configureStore({
    reducer:{
      sidebar:SidebarReducer,
    },
});

export default Store