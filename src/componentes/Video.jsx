import React from 'react';
import "./Video.css"

const Video = () => {
  return (
    <div className='video'>
        <img className='ejer' src={"/Imagen1.jpg"} alt={"ejercicio"} />
        <div className='play'> <img src={"/triangle.svg" }alt={"play"} /> </div>
    </div>
  )
}

export default Video