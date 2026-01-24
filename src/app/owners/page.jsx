import React from 'react'
import '../../styles/Owners.css'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export const metadata = {
  title: "For Property Owners",
  description:
    "List your flat with verified tenant matching, visit coordination, and move-in support. Free for flat owners on Denner.",
};


function page() {

  const testimonials = [
  {
    "id": 1,
    "review": "My flat in Kothrud was rented out in just 5 days. The visits were coordinated well and the tenant profiles were verified.",
    "name": "SADASHIV P.",
    "location": "Kothrud, Pune"
  },
  {
    "id": 2,
    "review": "Professional service without any charges for owners. The entire experience was smooth and stress free.",
    "name": "SAMARTH P.",
    "location": "Pune"
  },
  {
    "id": 3,
    "review": "I saved 25,000 on brokerage and other charges by using Denner. The service and professionalism were top notch.",
    "name": "RAJESH S.",
    "location": "Hinjewadi, Pune"
  },
  {
    "id": 4,
    "review": "Denner handled the entire process properly from listing to finish. Their team kept me informed and everything felt well managed.",
    "name": "KEDAR M.",
    "location": "Kothrud, Pune"
  },
  {
    "id": 5,
    "review": "Professional service without any charges for owners. The entire experience was smooth and stress free.",
    "name": "SAMARTH P.",
    "location": "Pune"
  },
  {
    "id": 6,
    "review": "Denner partner assigned to my listing was extremely helpful and efficient throughout the process.",
    "name": "RAJESH S.",
    "location": "Hinjewadi, Pune"
  },
  {
    "id": 7,
    "review": "I saved 25,000 on brokerage and other charges by using Denner. The service and professionalism were excellent.",
    "name": "ABHAY R.",
    "location": "Katraj, Pune"
  }
]


  const carddata = [
  {
    "id": 1,
    "title": "Share your flat details",
    "info": "Provide basic information about your flat, including configuration and preferences. This helps us understand your property and requirements clearly from the start."
  },
  {
    "id": 2,
    "title": "Review and verification",
    "info": "A dedicated Denner partner is assigned to your property. They connect with you to verify details, guide you through the process, and onboard your flat smoothly for listing."
  },
  {
    "id": 3,
    "title": "Tenant discovery and visits",
    "info": "Based on your preferences, we identify suitable, verified tenants and manage all inquiries, follow-ups, and visit coordination on your behalf."
  },
  {
    "id": 4,
    "title": "Confirm and move in",
    "info": "You review shortlisted tenants and choose who you would like to rent your flat to. Once approved, Denner handles the rental agreement, police verification, and move-in coordination."
  }
]


  return (
    <>
   <Navbar></Navbar>
    <div id='ownerspage' className='ownerspage'>
      <p id='toptag'>Save up to 30000, coz it's free!</p>
      <h1 className='serif' id='first-title'>Rent your flat <br />with confidence!</h1>

      <p className='lightgraytext'>
       From listing to move-in, Denner takes care <br className='hideonmobile'/> of the details so renting feels effortless.
      </p>

      <Link href={'/list-your-flat'} className='imp-button'>List your flat</Link>

      {/* IMAGE WRAPPER */}
      <div className="oldman-wrapper">
        <img src="/oldman.webp" alt="old man" />
      </div>
<br />
<br />
<br />
      <h1 className='serif'>Made for <br className='mobile'/> flat owners</h1>
      <p className='secondblack'>
        Simple steps, verified tenants, and clear <br /> support
        throughout the rental journey.
      </p>

      <div className='ownercardcontainer'>
        {
          [1, 2, 3, 4, 5].map((n)=>{
            return <img key={n} className='ownercard' src={`ownercard${n}.png`} alt="" />
          })
        }
      </div>

      <br />
      <br />

      <h1 className='serif'>How denner <br className='mobile'/> works for you?</h1>
        <p className="secondblack">A simple, structured process</p>
        <div className="flex ownerstepcontainer">
        {carddata.map((card)=>{
          return <div className='card2' key={card.id}>
            <h2 className='serif number2'>{card.id}.</h2>
            <h2 className='poppins title2' id='title2'>{card.title}</h2>
            <p className='gray'>{card.info}</p>
          </div>
        })}
        </div>

         <h1 className='serif'>Trusted by homeowners</h1>

         <TestimonialsCarousel data={testimonials}/>

         <div className="bluebox">
          <h1 className='serif'>Rent your flat within days!</h1>
          <p>It takes only a few <br className='mobile' /> minutes to get started.</p>
          <Link href={'/list-your-flat'}>
          <button className='imp-button2'>List your flat</button></Link>
         </div>
    </div>

     </>
  )
}


export default page

function TestimonialsCarousel({ data }) {
  return (
    <div className="denner-carousel-wrapper">
      <div className="denner-carousel-track">
        {data.map((item) => (
          <div className="denner-carousel-card" key={item.id}>
            <p className="denner-carousel-review gray">
              {item.review}
            </p>
              <div className="denner-carousel-user">
                <p className="denner-carousel-name">{item.name}</p>
                <p className="denner-carousel-location">{item.location}</p>
            </div>
          </div>
        ))}

         {data.map((item) => (
          <div className="denner-carousel-card" key={item.id}>
            <p className="denner-carousel-review gray">
              {item.review}
            </p>
              <div className="denner-carousel-user">
                <p className="denner-carousel-name">{item.name}</p>
                <p className="denner-carousel-location">{item.location}</p>
            </div>
          </div>
        ))}

         {data.map((item) => (
          <div className="denner-carousel-card" key={item.id}>
            <p className="denner-carousel-review gray">
              {item.review}
            </p>
              <div className="denner-carousel-user">
                <p className="denner-carousel-name">{item.name}</p>
                <p className="denner-carousel-location">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

