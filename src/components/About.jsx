import React, { useEffect } from 'react'
import '../styles/About.scss'
import Home from './sharedComponents/Home'

const About = () => {

  useEffect(() => {
    document.title = "ALGO ACADEMY | ABOUT";
  }, []);
  return (
    <>
    <Home
        subheading={"About Us"}
        smallpara = {"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ratione. Sunt error voluptatem, iure quo, at ipsam alias quisquam fuga ex pariatur commodi corporis eos dignissimos. Natus temporibus earum expedita."}
    
    />
    <div className='about'>
    <h1>About</h1>
    </div>

    
    </>
  )
}

export default About