import React from 'react'
import "./MobileMenu.css"
import {HiOutlineHome} from 'react-icons/hi';
import {FaRegFileImage} from 'react-icons/fa';
import {MdSettings} from 'react-icons/md';

function MobileMenu() {
 const MenuOptions=[{Data:"Home",icon:<HiOutlineHome/>},{Data:"Cards",icon:<FaRegFileImage/>},{Data:"Settings",icon:<MdSettings/>}]
  return (
    <div className='MobileMenuPosition'>
    <div id='MobileThreeOptionMenu'>
        {
            MenuOptions.map((data)=>{
                return(
                    <div className='mobileMenuOptions' key={data.Data}>{data.icon}</div>
                )
            })
        }
          
    </div>
    </div>
  )
}

export default MobileMenu