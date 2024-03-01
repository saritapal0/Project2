import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import SwitchCameraOutlinedIcon from '@mui/icons-material/SwitchCameraOutlined';
import SwitchLeftOutlinedIcon from '@mui/icons-material/SwitchLeftOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';


const active = true;


const Data = [
  {
    title: "Dashboard",
    icon: DashboardOutlinedIcon,
    href: "/dashboard",
    visible: active,
   
  },
  {
    title: "Autocomplete",
    icon: AddToPhotosOutlinedIcon,
    href: "/autocomplete",
  },
  {
    title: "Buttons",
    icon: AspectRatioOutlinedIcon,
    href: "/button",
  },
  {
    title: "Checkbox",
    icon: AssignmentTurnedInOutlinedIcon,
    href: "/checkbox",
    visible: active,
  },
  {
    title: "Radio",
    icon: AlbumOutlinedIcon,
    href: "/radio",
  },
  {
    title: "Slider",
    icon: SwitchCameraOutlinedIcon,
    href: "/slider",
    visible: active,
  },
  {
    title: "Switch",
    icon: SwitchLeftOutlinedIcon,
    href: "/switch",
  },
  {
    title: "Form",
    icon: DescriptionOutlinedIcon,
    href: "/form",
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

];

const Menuitems = Data.filter((item)=>item.visible)



export default Menuitems;
