'use client'

import React from 'react';
import '../styles/Sixth.css';
import AvatarStack from './AvatarStack';
import { useState, useEffect } from 'react';

const reviews = [
  {
    name: "Ayush P.",
    username: "@ayush",
    body: "what an app was worth the download. would recommend 10/10",
    img: "https://avatar.vercel.sh/ayush",
  },
  {
    name: "Pranjal Z.",
    username: "@pranjal",
    body: "found a roommate in a day! it was so worth it had been struggling for a month and you guys blindly trust the app and go for it!!!!!!!!!",
    img: "https://avatar.vercel.sh/pranjal",
  },
  {
    name: "Seema N.",
    username: "@seema",
    body: "what an app! they deserve an round of applause for solving a major problem in pune! i say i too found a roommate within a week",
    img: "https://avatar.vercel.sh/seema",
  },
  {
    name: "Aryan J.",
    username: "@aryan",
    body: "thanks to Denner!! it helped me to search 2 flatmates, otherwise i had to rent my flat...",
    img: "https://avatar.vercel.sh/aryan",
  },
  {
    name: "Aditi",
    username: "@aditi",
    body: "i love this app because within just 3 days, i received several roommate inquiries.",
    img: "https://avatar.vercel.sh/aditi",
  },
  {
    name: "Khushi D.",
    username: "@khushi",
    body: "this app is quite useful for all the students as well as workers who stays in pune and one to find rooms as well as roommates.",
    img: "https://avatar.vercel.sh/khushi",
  },
  {
    name: "Sameer C.",
    username: "@sameer",
    body: "one of the best apps for finding sharing flats. got many inquiries in a week!",
    img: "https://avatar.vercel.sh/sameer",
  },
  {
    name: "Asif P.",
    username: "@asif",
    body: "great app user friendly interface. great concept that will help students",
    img: "https://avatar.vercel.sh/asif",
  },
  {
    name: "Atharva M.",
    username: "@atharva",
    body: "it is very nice app and a great idea, especially for pune. because students struggle to find flats and roommates.",
    img: "https://avatar.vercel.sh/atharva",
  },
  {
    name: "Vedant L.",
    username: "@vedant",
    body: "amazing interface too smooth and easy to use n most important has no useless advertisement!!",
    img: "https://avatar.vercel.sh/vedant",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className="review-card">
      <h3 className='user-name'>{name}</h3>
      <p>" {body} "</p>
    </figure>
  );
};

const Marquee = ({ children, reverse = false, pauseOnHover = false, className = "" }) => {
  const marqueeClass = `marquee ${reverse ? 'reverse' : ''} ${pauseOnHover ? 'pause-on-hover' : ''} ${className}`;
  
  return (
    <div className={marqueeClass}>
      <div className="marquee-content">
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};

export default function Sixth() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // adjust breakpoint
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="sixth-container">

        <h1 id='toptitle' className='bb' style={{color:'white'}}>Real stories. <br /> 
        <span className='italic serif '>
        Real people.
        </span>
        </h1>

   <div className="avatars white trusted">
      <AvatarStack/>
      <h4>Trusted by 25,000+ tenants</h4>
    </div>
<div className="fade-top mobile"></div>

      <Marquee pauseOnHover={!isMobile} className="marquee-20s">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="marquee-20s below hideonmobile">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      
      <div className="fade-bottom mobile"></div>
      <div className="fade-left hideonmobile"></div>
      <div className="fade-right hideonmobile"></div>
    </div>
  );
}