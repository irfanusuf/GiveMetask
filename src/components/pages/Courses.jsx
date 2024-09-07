import React, { useEffect } from 'react'
import './Courses.scss'
import Home from '../sharedComponents/Home'

const Courses = () => {

  useEffect(() => {
    document.title = "ALGO ACADEMY | Courses";
  }, []);
  return (
    <>
    <Home
        subheading={"Courses We Offer!"}
        para = {"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ratione. Sunt error voluptatem, iure quo, at ipsam alias quisquam fuga ex pariatur commodi corporis eos dignissimos. Natus temporibus earum expedita."}
        punch1 = {""}
        punch2 = {""}
        punch3 = {""}
    />
    <div className='about'>
    <h1>About</h1>
    </div>

    
    </>
  )
}

export default Courses