import React from 'react'

const image =  "something"

const Card = (props) => {
  return (
    <div className='card'>

        <img src= {props.src} alt='preview'/>
        <p>Description</p>
        <p>Author : {props.auth}</p>



    </div>
  )
}

export default Card