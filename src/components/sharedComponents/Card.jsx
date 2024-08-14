import React from 'react'

const Card = (props) => {
  return (
    <>

        <img src= {props.src} alt='preview'/>
        <span>{props.auth}</span>



    </>
  )
}

export default Card