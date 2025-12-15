import React from 'react'
import '../styles/App.css'
import '../styles/Phone.css'
import Buttons from '@/components/Sub/Buttons'
import Second from '../components/Second'
import Third from '../components/Third'
import Fourth from '../components/Fourth'
import Fifth from '../components/Fifth'
import Sixth from '../components/Sixth'
import Seventh from '../components/Seventh'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AvatarStack from '../components/AvatarStack'
import ChangingText from '@/components/ChangingText'

import {gsap} from 'gsap'
import Cards from '../components/Cards'

function Home() {
  return (
    <>
     <Navbar/>

    <section id='first'>
    <h2 id='topline'>Move in with trust, not tension</h2>
    <h1 id='t2'>Find your perfect <br className='mobile' /> 
    <ChangingText/>
    </h1>

    <div className="avatars ddd">
      <AvatarStack/>
      <h5>trusted by 25,000+ tenants</h5>
    </div>


      <Buttons/>

      <img id='heroimg' src="/hero-illustration.webp" alt="" />

    </section>

    <Second/>
    <Third/>
    <Cards/>
    <Fifth/>
    <Sixth/>
    <Seventh/>

    </>
  )
}

export default Home




