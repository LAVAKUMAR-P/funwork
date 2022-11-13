import React from 'react'
import "./MobileMenu.css"
import {HiOutlineHome} from 'react-icons/hi';
import {FaRegFileImage} from 'react-icons/fa';
import {MdSettings} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function MobileMenu() {
 const MenuOptions=[{Data:"Home",icon:<HiOutlineHome/>,Navigate:true},{Data:"Cards",icon:<FaRegFileImage/>,Navigate:true},{Data:"Settings",icon:<MdSettings/>,Navigate:true}]
 const Navigate=useNavigate();

 const handleOption=(Option)=>{
    try {
      switch (Option) {
        case "Home":
             Navigate("/")
            break;
        case "Cards":
             Navigate("/Cards")
        break;
        default:
            Navigate("/")
            break;
      }  
    } catch (error) {
        console.log(error);
    }
 }

  return (
    <div className='MobileMenuPosition'>
    <div id='MobileThreeOptionMenu'>
        {
            MenuOptions.map((data)=>{
                return(
                    <div className='mobileMenuOptions' onClick={()=>handleOption(data.Data)} key={data.Data}>{data.icon}</div>
                )
            })
        }
          
    </div>
    </div>
  )
}

export default MobileMenu