import React from 'react'
import Header from '../header/header.component';
import "./home-left.styles.scss";

const HomeLeft = ({beginAnimation}) => {

  return(
    <div className='home-left'>
      <Header beginAnimate={beginAnimation}/>

      <div className='left-container'>
        <h1 className={`${beginAnimation ? 'active' : ''} title`}>DAVID HARRIS</h1>
        <div className={`${beginAnimation ? 'active' : ''} about`}>
          about me about me about meeee
          about me about me about meeee
          about me about me about meeee
          about me about me about meeee
          about me about me about meeee
          about me about me about meeee
          about me about me about meeee
        </div>
      </div>
    </div>
  )
  
}

export default HomeLeft;