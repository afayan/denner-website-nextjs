'use client'

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Fourth.css";

gsap.registerPlugin(ScrollTrigger);

function Fourth() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%", // animation starts when title is 80% down the viewport
          toggleActions: "play none none none", 
          once: true, // ensures it plays only once
        },
      }
    );
  }, []);
  return (
    <section id="fourthsection">

      <img id="topimage" src="diamond.webp" alt="" />
      <h2 id="toptitle" ref={titleRef}>
        It's not magic,<br />
        <span className="italic serif"> it's Denner</span>
      </h2>

      <div className="features-container hideonmobile">
        {/* for PC */}
        <div className="feature large" id="large">
          <span>
            <h2>Matchmaking</h2>
            <p>We match you with the right <br /> flat or roommate</p>
          </span>

          <img src="group.webp" alt="" />
        </div>

        <div className="leftcol">
          <div className="feature" id="f2">

            <img src="lady2.webp" alt="" />

            <span>
              <h3>Verified Profiles</h3>
              <p>Aadhaar & social profiles verified for safety.</p>
            </span>
          </div>

          <div className="feature" id="f3">

               <img src="map.webp" alt="" />

       <span>
              <h3>Schedule Visits</h3>
              <p>Plan in-person flat tours with just a tap.</p>
            </span>
      
          </div>
        </div>

        <div className="rightcol">
          <div className="feature" id="f4">

             <img src="hourglass2.webp" alt="" />

     
                  <span>
              <h3>Auto Delisting</h3>
              <p>Listings are auto-removed when inactive.</p>
            </span>
          </div>
          
          <div className="feature" id="f5">

         <img src="calendar2.webp" alt="" />

            <span>
              <h3>Safety-First</h3>
              <p>We keep things clean and real with reports.</p>
            </span>
          </div>
        </div>
      </div>


      <div className="featurescontainer_mobile mobile">
       <div className="mfeature">
          <img src="group.webp" alt="" />

          <h1>Matchmaking</h1>
          <p>We match you with the right <br /> flat or roommate</p>
       </div>


       <div className="mfeature">
        <img src="lady2.webp" alt="" />
          <h1>Verified Profiles</h1>
          <p>Aadhaar & social profiles <br /> verified for safety.</p>
       </div>


       <div className="mfeature">
        <img src="hourglass2.webp" alt="" />

        <h1>Auto Delisting</h1>
        <p>Listings are auto- <br /> removed when inactive</p>
       </div>


       <div className="mfeature">
        <img src="map.webp" alt="" />
        <h1>Schedule Visits</h1>
        <p>Plan in-person flat tours <br /> with just a tap.</p>
       </div>

       
       <div className="mfeature">
        <img src="calendar2.webp" alt="" />
        <h1>Safety-First</h1>
        <p>We keep things clean and <br /> real with reports</p>
       </div>

        </div>

        
    </section>
  );
}

export default Fourth;
