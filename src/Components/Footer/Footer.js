import React from 'react';
import _ from 'lodash';
import './Footer.css';

function Footer(props) {

 let CustomStyle=_.get(props,"Customcss",{});

  return (
    <div id='FooterDiv' style={CustomStyle}>Footer</div>
  )
}

export default Footer