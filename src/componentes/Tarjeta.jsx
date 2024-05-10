import React from 'react';
import Texto from './Texto';
import Video from './Video';
import "./Tarjeta.css";

const Tarjeta = () => {
  return (
    <div className='tarjeta'>
        <Video/>
        <Texto/>
    </div>
  )
}

export default Tarjeta