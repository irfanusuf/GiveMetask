import React from 'react'
import "./Loading.scss"
import loader from "../../assets/loader.gif"

const Loading = () => {
  return (
    <div className='loading'>
        
       <img src={loader} alt='loader'/>
       </div>
  )
}

export default Loading