import React, { useContext, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ComputerIcon from '@mui/icons-material/Computer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import DesignCompo from './DesignCompo';
import LearnCompo from './LearnCompo';
import PlansCompo from './PlansCompo';
import EduactionCompo from './EduactionCompo';
import BuisenessCompo from './Buiseness';
import Sidebar from '../Sidebar';
import { Context } from '../../contextApi/Context';
import PageSize from '../editpage/PageSize';

function Navbar() {
  const {designCompo,setDesignCompo,buisenessCompo,setBuisenessCompo,educationCompo,setEducationCompo,plansAndPriceCompo,setPlansAndPriceCompo,learnCompo,setLearnCompo,sidebar,setSidebar,pagesize,setPageSize} = useContext(Context)

   //functions for hover effect
   const buisenesscompo =()=>{
    setBuisenessCompo('flex')
    setDesignCompo('none')
    setEducationCompo('none')
    setPlansAndPriceCompo('none')
    setLearnCompo('none')
   }
   const designcompo =()=>{
    setBuisenessCompo('none')
    setDesignCompo('flex')
    setEducationCompo('none')
    setPlansAndPriceCompo('none')
    setLearnCompo('none')
   }
   const educationcompo =()=>{
    setBuisenessCompo('none')
    setDesignCompo('none')
    setEducationCompo('flex')
    setPlansAndPriceCompo('none')
    setLearnCompo('none')
   }
   const plansandpricecompo =()=>{
    setBuisenessCompo('none')
    setDesignCompo('none')
    setEducationCompo('none')
    setPlansAndPriceCompo('flex')
    setLearnCompo('none')
   }
   const learncompo =()=>{
    setBuisenessCompo('none')
    setDesignCompo('none')
    setEducationCompo('none')
    setPlansAndPriceCompo('none')
    setLearnCompo('flex')
   }

   //conplete



  return (
    <div className='navbar'>
      <div className='n-left'>
        <div className={ sidebar ? 'menu-active menuIcon' : 'menuIcon'} onClick={()=>{setSidebar(!sidebar)}}>
            <MenuIcon/>
        </div>
        <div className='logo'>
            <img src="https://1000logos.net/wp-content/uploads/2021/10/Canva-logo.png" alt="" />
        </div>
        <div className='n-center'>
        <label onMouseEnter={designcompo} >Design spotlight <ExpandMoreIcon/></label>
        <label onMouseEnter={buisenesscompo} >Buiseness <ExpandMoreIcon/></label>
        <label onMouseEnter={educationcompo} >Education <ExpandMoreIcon/></label>
        <label onMouseEnter={plansandpricecompo} >Plans and pricing <ExpandMoreIcon/></label>
        <label onMouseEnter={learncompo}>Learn <ExpandMoreIcon/></label>
      </div>
      </div>
      <div className='n-right'>
        <div className='icons'>
            <div className='icon'>
            <ComputerIcon/>
            </div>
            <div className='icon'>
            <SettingsIcon />
            </div>
            <div className='icon'>
            <NotificationsIcon />
            </div>
        </div>
        <div className='design-button' onClick={()=>setPageSize(!pagesize)}>
            <label>Create Design</label>
        </div>
        <div className='profile'>
            <img src="https://lh3.googleusercontent.com/a/ACg8ocLF5PwZQJ9c4iJiZBWUplO1xJM5fYmpznHh6RoMYbXfSQ=s96-c-rg-br100" alt="" />
        </div>
      </div>
      {designCompo && <DesignCompo designCompo={designCompo} setDesignCompo={setDesignCompo}/>}
      {buisenessCompo && <BuisenessCompo buisenessCompo={buisenessCompo} setBuisenessCompo={setBuisenessCompo}/>}
      {educationCompo && <EduactionCompo educationCompo={educationCompo} setEducationCompo={setEducationCompo} />}
      {plansAndPriceCompo && <PlansCompo plansAndPriceCompo={plansAndPriceCompo} setPlansAndPriceCompo={setPlansAndPriceCompo}/>}
      {learnCompo && <LearnCompo learnCompo={learnCompo} setLearnCompo={setLearnCompo}/>}
      {sidebar && <Sidebar/>}
      {pagesize && <PageSize pagesize={pagesize}/>}
    </div>
  )
}

export default Navbar
