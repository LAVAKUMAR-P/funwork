import React, { useEffect, useState } from 'react';
import './Cards.css';
import _ from 'lodash';
import { useSelector } from 'react-redux';

function Cards(props) {
  const Alldata = useSelector(state =>  _.get(state, "PictureReducer.AllPicture",[]));
  const [cardData, setCardData] = useState([]);
  const [number, setNumber] = useState(0)

  useEffect(() => {
    setCardData([...Alldata])
  }, [Alldata])
  
 
  const [Message, setMessage] = useState("");



  

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
      if( (number+1) < cardData.length){
        setNumber(number+1);
      }else{
        alert("No more pictures")
      }
      setTimeout(ClearMessage, 300);
    } catch (error) {
      console.log(error);
    }
  }

 console.log(number , cardData.length);
  return (
    <div className='customcardcontent'>
      <div className='CardImageHolder'>
        <div className={Message ? 'Message' : "noMessage"}>{Message}</div>
        <img src={_.get(cardData[number], "Url","https://dummyimage.com/500")} className='cardPicture' alt="Picture" width="300" height="350" />
      </div>
      <div className='TitleName'>
        {_.get(cardData[number], "Name","Name")}
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