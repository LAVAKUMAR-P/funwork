import React from 'react';
import './Cards.css';
import _ from 'lodash';

function Cards(props) {
  const url = _.get(props, "URL", "https://dummyimage.com/400")
  const Name = _.get(props, "Name", "Name");
  return (
    <div className='customcardcontent'>
       
        <div
          style={{ backgroundImage: 'url(' + url + ')' }}
          className='customcard'
        >
          <h3>{Name}</h3>
        </div>
    
    </div>
  )
}

export default Cards