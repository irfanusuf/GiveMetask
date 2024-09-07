import React, { useEffect } from 'react'
import './Contact.scss'
import Home from '../sharedComponents/Home'

const Contact = (props) => {


  useEffect(()=>{

    document.title = "ALGO ACADEMY | CONTACT"
  },[])



  return (
    <>
    <Home
        heading ={""}
        subheading={"For Further Details"}
        para = {"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ratione. Sunt error voluptatem, iure quo, at ipsam alias quisquam fuga ex pariatur commodi corporis eos dignissimos. Natus temporibus earum expedita."}
        punch1 = {""}
        punch2 = {""}
        punch3 = {""}
      />
    <div className='contact'>

    <h1> For further details contact : {props.y}</h1>


    </div>
    </>
  )
}

export default Contact