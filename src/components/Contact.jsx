import React, { useEffect, useState } from 'react'
import '../styles/Contact.scss'

const Contact = (props) => {

  const [message , setMesage] = useState("")



  const fetchUser = async ()=>{


    const getUser = await fetch("http://localhost:5000/getUser" , {


      method : "GET"
    })

    const data = await getUser.json()
    setMesage(data.message)
    console.log(data)



  }



  useEffect(()=>{
    fetchUser()
  },[])




  return (
    <div className='contact'>

    <h1> For further details contact : {props.y}</h1>


    <h1> {message}</h1>


    </div>
  )
}

export default Contact