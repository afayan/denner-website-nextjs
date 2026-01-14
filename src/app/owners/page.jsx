import React from 'react'
import '../../styles/Owners.css'
import Navbar from '@/components/Navbar'

function page() {
  return (
    <>
   <Navbar></Navbar>
    <div className='ownerspage'>
      <p id='toptag'>Save up to 30000, coz it's free!</p>
      <h1>Rent your flat <br />with confidence!</h1>

      <p className='lightgraytext'>
       From listing to move-in, Denner takes care of the details so renting feels effortless.
      </p>

      <button className='imp-button'>List your flat</button>

      {/* IMAGE WRAPPER */}
      <div className="oldman-wrapper">
        <img src="/oldman.png" alt="old man" />
      </div>
<br />
<br />
<br />
      <h1>Made for flat owners</h1>
      <p className='secondblack'>
        Simple steps, verified tenants, and clear support <br />
        throughout the rental journey.
      </p>

      <div className='cardcontainer'>
        {
          [1, 2, 3, 4, 5].map((n)=>{
            return <img key={n} className='ownercard' src={`ownercard${n}.png`} alt="" />
          })
        }
      </div>

      <br />
      <br />

      <h1>How denner works for you?</h1>
        <p className="secondblack">A simple, structured process</p>
    </div>

     </>
  )
}


export default page