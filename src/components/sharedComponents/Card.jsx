import React from 'react'

const image =  "something"

const Card = (props) => {
  return (
    <div className='card' id= {props.id}>

        <img src= {props.src} alt='preview'/>
        <span>{props.id}</span>
        <span>{props.auth}</span>



    </div>
  )
}

export default Card