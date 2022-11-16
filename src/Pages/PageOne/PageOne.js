import React, { useState } from 'react'
import Cards from '../../Components/cards/Cards';
import {AiOutlineLike} from 'react-icons/ai';
import {BiDislike} from 'react-icons/bi';

import './PageOne.css'
const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://dummyimage.com/400'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://dummyimage.com/400'
  },
  {
    name: 'Monica Hall',
    url: 'https://dummyimage.com/400'
  },
  {
    name: 'Jared Dunn',
    url: 'https://dummyimage.com/400'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://dummyimage.com/400'
  }
]
function PageOne() {
  const [Heart, setHeart] = useState('heart');
  const [Like, setLike] = useState('Like');
  console.log(Heart);
  const HandleHeart = () => {
    try {
      setHeart(Heart === 'heart' ? 'heart heart-blast' : 'heart')
    } catch (error) {
      console.log(error);
    }
  }
  const HandleLike = () => {
    try {
      setLike('Like')
    } catch (error) {
      console.log(error);
    }
  }

  const HandleDisLike = () => {
    try {
      setLike('disLike')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id='Swapcard'>
      <div>
        <Cards />
        <div className='ImagebtnPosition'>
          <span>
            <button className={Like === 'Like' ? 'green Lbtn' : 'Lbtn'} id='Likebtn' onClick={HandleLike} ><AiOutlineLike className='mobileMenuOptions'/> LIKE</button>
          </span>
          <div onClick={HandleHeart} className={Heart}></div>
          <span>
            <button className={Like === 'disLike' ? 'red Lbtn' : 'Lbtn'} id='DisLikebtn' onClick={HandleDisLike} ><BiDislike className='mobileMenuOptions'/> DISLIKE</button>
          </span>

         

        </div>
      </div>
    </div>
  )
}

export default PageOne