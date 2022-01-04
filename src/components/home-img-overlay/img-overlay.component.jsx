import React from 'react'
import "./img-overlay.styles.scss";

const ImageOverlay = ({beginAnimation}) => {
  return(
    <div className='image-container'>
      <div className='overlay' style={ beginAnimation ? { animation:'slide 1s forwards', opacity: 1} : {animation : '', opacity: 0}} ></div>
      <img src={require('../../assets/mtns-1080.jpg')} style={ beginAnimation ? { animation:'slide-perm 1s forwards', opacity: 1} : {animation : '', opacity: 0}}alt=""/>
      
    </div>
  );
}

export default ImageOverlay;