import React from 'react'
import Navbar from '@/components/Navbar'
import '@/styles/Pages.css'

export const metadata = {
  title: "The Denner Manifesto",
  description:
    "Our commitment to a transparent, scam-free rental experience for tenants and property owners across India.",
};


function page() {
  return (
   <>
      <div className="pagesbody" id='manifesto'>
        <Navbar />

        <h1>Manifesto</h1>

        <p>
          Renting a home in India should feel simple, transparent, and safe. It should not feel confusing, rushed, or uncertain. Yet for many people today, renting often means unclear terms, unverified listings, and constant follow-ups. Denner was created to change that experience.
        </p>

        <p>
          We believe trust is built through clarity. Every flat listed on Denner is reviewed, every tenant is verified, and every step is handled with structure and care. From listing to move-in, we bring predictability to a process that has long lacked it. Our goal is not to be the fastest platform, but to be the most reliable one.
        </p>

        <p>
          Denner is committed to building a rental ecosystem where owners feel protected, tenants feel confident, and decisions are made with transparency. By setting higher standards and introducing thoughtful systems, we aim to make a meaningful difference in how renting works across India. 
          </p>


          <img id='stamp' src="stamp.png" alt="" />
      </div>
    </>
  )
}

export default page