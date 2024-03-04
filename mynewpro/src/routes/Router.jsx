import React from 'react';
import {Route,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import FullLayout from '../Layout/FullLayout/FullLayout';
import Dashboard from '../Dashboards/Dashboard';
import ExAutoComplete from '../Components/Forms/AutoComplete/ExAutoComplete';
import ExButton from '../Components/Forms/Button/ExButton';
import ExCheckbox from '../Components/Forms/Checkbox/ExCheckBox'
import ExRadioBox from '../Components/Forms/Radiobox/ExRadioBox';
import ExSlider from '../Components/Forms/Slider/ExSlider';
import ExSwitch from '../Components/Forms/Switch/ExSwitch';
import FormLayouts from '../Components/Forms/FormLayouts/FormLayouts';
import Table from '../Components/table/Table';
import ExCards from '../Components/Forms/Cards/ExCards'
import MyCard from '../Components/Forms/MyCards/MyCard'
import ExOverview from '../Components/Overview/ExOverview';
// import BasicCards from '../Components/Overview/BasicCards';




    const routes = createBrowserRouter(
        createRoutesFromElements(
        <Route path='/' element={<FullLayout/>}>
         <Route index element={<Dashboard/>}/>
         <Route path='/dashboard'element={<Dashboard/>}/> 
         <Route path='/autoComplete'element={<ExAutoComplete/>}/>
         <Route path='/button' element={<ExButton/>}/>
         <Route path='/checkbox'element={<ExCheckbox/>}/>
         <Route path='/radio'element={<ExRadioBox/>}/>
         <Route path='/slider'element={<ExSlider/>}/>
         <Route path='/switch'element={<ExSwitch/>}/>
         <Route path='/form'element={<FormLayouts/>}/>
         <Route path='/table' element={<Table/>}/>
         <Route path='/cards' element={<ExCards/>}/>
         <Route path='/mycard' element={<MyCard/>}/>
         <Route path='/overview' element={<ExOverview/>}/>
         {/* <Route path='/basiccards' element={<BasicCards/>}/> */}

         
        
         
         
        </Route>
        
    )
    )

 
export default routes;