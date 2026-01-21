import React from 'react'
import Navbar from '@/components/Navbar'
import '@/styles/Refer.css'
import Link from 'next/link'
import ReferralForm from '@/components/ReferralForm'

function page() {

  const steps =  [
  {
    "id": 1,
    "info": "Submit basic details of a flat owner you know."
  },
  {
    "id": 2,
    "info": "Our team reaches out to the owner and guides them through onboarding."
  },
  {
    "id": 3,
    "info": "Once the flat is verified, it is onboarded on Denner and you get paid instantly!"
  }
]


  return (
    <>
    <Navbar/>
    <div className="referpage" id="referpage">
        <h1 className='serif' id='first-title'>
            Refer a flat. <br /> Earn money.
        </h1>

        <p className='lightgraytext'>
            Know someone who wants to rent out their flat? Share their details with Denner and earn real money.
        </p>

        <Link href={'/'}>
        <button className='imp-button'>Refer a flat</button></Link>

        <div className="oldman-wrapper">
        <img src="/youngman.webp" alt="old man" />
      </div>
      <br />
      <br />
        <h1 className='serif'>How it works?</h1>
        <p className='secondblack'>Earn in thousands with simple steps!</p>
        {steps.map((card)=>{
          return <div className='card3' key={card.id}>
            <h2 className='serif number2'>step {card.id}</h2>
            <p className='gray'>{card.info}</p>
          </div>
        })}
        
        <br />
        <br />
        <h1 className='serif'>Refer now. <br className='mobile'/> Start earning!</h1>
        <p className='secondblack'>Introduce a flat owner to Denner and earn <br /> rewards on successful onboarding.</p>

        <ReferralForm/>
    </div>
    
    </>
  )
}

export default page


