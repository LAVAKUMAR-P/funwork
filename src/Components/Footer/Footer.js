import React from 'react';
import _ from 'lodash';
import './Footer.css';

function Footer(props) {

 let CustomStyle=_.get(props,"Customcss",{});

  return (
    <div id='FooterDiv' style={CustomStyle}>&#169; Lavakumar (2022)</div>
  )
}

export default Footer