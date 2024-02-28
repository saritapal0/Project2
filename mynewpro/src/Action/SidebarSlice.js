import { createSlice } from "@reduxjs/toolkit";


const initialState = {
      MenuItems:[],
}

export const sidebarSlice = createSlice({
    name:"sidebar",
    initialState,
    reducers:{
        setSidebarData:(state,action)=>{
            state.Sidebar = action.payload
        }
    }
})

export const {setSidebarData} = sidebarSlice.actions
export const fetchSidebarData = () => (dispatch)=>{

  const active = true;
    const MeniItems =
        [{
            title: "Dashboard",
            icon: DashboardOutlinedIcon,
            href: "/dashboard",
            visible: active,
           
          },
          {
            title: "Checkbox",
            icon: AssignmentTurnedInOutlinedIcon,
            href: "/checkbox",
            visible: active,
          },
          {
            title: "Slider",
            icon: SwitchCameraOutlinedIcon,
            href: "/slider",
            visible: active,
          },
          {
            title: "Table",
            icon: AutoAwesomeMosaicOutlinedIcon,
            href: "/table",
            visible: active,
          },
          {
            title: "Cards",
            icon: AutoAwesomeMosaicOutlinedIcon,
            href: "/cards",
            visible: active,
            
          },
          

        ]
        
        const MenuItems = Sidebar.filter((item)=>item.visible)
        dispatch(setSidebarData(MenuItems))
}

export default sidebarSlice.reducer


