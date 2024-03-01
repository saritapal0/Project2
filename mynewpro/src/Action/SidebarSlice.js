import { createSlice } from "@reduxjs/toolkit";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import SwitchCameraOutlinedIcon from '@mui/icons-material/SwitchCameraOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';



const initialState = {
  menuItems: [],
}

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuItems: (state, action) => {
      state.menuItems = action.payload
    }
  }
})

export const { setMenuItems } = menuSlice.actions
export const fetchMenuItems = () => (dispatch) => {

  const active = true;
  const menuItems =
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
  const filteredMenuItems = menuItems.filter((item) => item.visible)
  dispatch(setMenuItems(filteredMenuItems))
}

export default menuSlice.reducer

