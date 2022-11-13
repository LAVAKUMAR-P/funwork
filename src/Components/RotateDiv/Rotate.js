import React from 'react';
import './Rotate.css'

function Rotate({Menu,setMenu}) {
    const handleMenu=()=>{
     try {
        setMenu(!Menu);
     } catch (error) {
        console.log(error);
     }
    }
  return (
    <div>
    <div id='MainMenu' className='rotating' onClick={handleMenu}>Menu</div>
    </div>
  )
}

export default Rotate