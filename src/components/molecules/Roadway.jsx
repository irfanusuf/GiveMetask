import React, { useContext } from 'react'
import itman from "../../assets/itman.webp"
import Context from "../../App"

const Roadway = () => {

 const user =  useContext(Context)

 console.log(user)

  return (
    <div className='roadway'>

       <div className='roadway-left'>

        <img src= {itman} alt="It-man"/>


       </div>



       <div className='roadway-right'>

        <h1>
        Your Roadmap to Success
        </h1>


        <h3><span>1.</span>Create Your Account</h3>
        <h3><span>2.</span>Choose Your Plan and make payment if needed</h3>
        <h3><span>3.</span>Access the Virtual Classroom </h3>
        <h3><span>4.</span> Join Daily Virtual Classes</h3>
        <h3><span>5.</span> Track Your Progress </h3>
        <h3><span>6.</span> further.......developing </h3>
        <h3><span>6.</span> Developed by : {user}</h3>

      
       </div>

    </div>
  )
}

export default Roadway