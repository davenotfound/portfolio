import React from 'react'
import Header from '../header/header.component';

import "./contact-central.styles.scss";

const ContactCentral = ({beginAnimation}) => {
  return (  
    <div className='contact-central'>
      <Header beginAnimate={beginAnimation}/>


      <div className='central-container'>
        
      </div>
    </div>
  );
}


export default ContactCentral;