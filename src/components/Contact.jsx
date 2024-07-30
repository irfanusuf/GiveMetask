import React from 'react'
import '../styles/Contact.scss'
import Home from './sharedComponents/Home'

const Contact = (props) => {




  return (
    <>
    <Home/>
    <div className='contact'>

    <h1> For further details contact : {props.y}</h1>


    </div>
    </>
  )
}

export default Contact