import React, { useEffect } from 'react'

const Background = ({image, answer}) => {

  const setBackground = (image) =>{
    const url = `url('${image}')`
    let a = document.getElementById('background')
    a.style.backgroundImage = url
  }

  useEffect(()=>{
    setBackground(image);
  },[image])

  return (
    <div className="img" id='background'>
      <h1>{answer}</h1>
    </div>
  )
}

export default Background