import React, { useState } from 'react'
import Cards from '../../Components/cards/Cards';
import {AiOutlineLike} from 'react-icons/ai';
import {BiDislike} from 'react-icons/bi';

function PageOne() {
  

  return (
    <div className='HomePageOverallDiv'>
      <div className='swapcardPosition'>
      <Cards/> 
      </div>
    </div>
  )
}

export default PageOne