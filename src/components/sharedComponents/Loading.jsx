import React from 'react'
import "../../styles/loading.scss"
import loader from "../../assets/loader.gif"

const Loading = () => {
  return (
    <div className='loading'>
        
       <img src={loader}/>
       </div>
  )
}

export default Loading