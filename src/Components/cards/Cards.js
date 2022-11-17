import React, { useState } from 'react';
import './Cards.css';
import _ from 'lodash';

function Cards(props) {
  const url = _.get(props, "URL", "https://dummyimage.com/400")
  const Name = _.get(props, "Name", "Name");
  const [Message, setMessage] = useState("loved");

  

  const ClearMessage =()=> {
    try {
      setMessage("")
    } catch (error) {
      console.log(error);
    }
  }

  

  const HandleButton = (data) => {
    try {
      // clearTimeout(myTimeout);
      setMessage(data);
      setTimeout(ClearMessage, 300);
    } catch (error) {
      console.log(error);
    }
  }

 
  return (
    <div className='customcardcontent'>
      <div className='CardImageHolder'>
        <div className={Message ? 'Message' : "noMessage"}>{Message}</div>
        <img src={url} className='cardPicture' alt="Picture" width="300" height="350" />
      </div>
      <div className='TitleName'>
        {Name}
      </div>
      <div className='CardBtnPostion'>
        <button className='BasicBtn' onClick={()=>{HandleButton("Like")}}>Like</button>
        <button className='BasicBtn' onClick={()=>{HandleButton("Loved")}}>Loved</button>
        <button className='BasicBtn' onClick={()=>{HandleButton("DisLike")}}>DisLike</button>
        <button className='BasicBtn' onClick={()=>{HandleButton("More")}}>More</button>
      </div>
    </div>
  )
}

export default Cards