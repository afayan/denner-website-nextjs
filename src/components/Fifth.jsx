'use client'

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Fifth.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Fifth() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

useEffect(() => {
  const cards = cardsRef.current;

  // Text elements (div inside each card)
  const textElements = cards.map(card => card.querySelector("div"));

  // Phone elements (img inside span)
  const phoneElements = cards.map(card => card.querySelector("span img"));

  // Initial state for text
  gsap.set(textElements, {
    opacity: 0,
    y: 50,
  });

  // Initial state for phones
  gsap.set(phoneElements, {
    opacity: 0,
    scale: 0.8,
  });

  // Create scroll-triggered animations for each card
  cards.forEach((card, index) => {
    const textElement = card.querySelector("div");
    const phoneElement = card.querySelector("span img");

    if (textElement) {
      gsap.to(textElement, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    if (phoneElement) {
      gsap.to(phoneElement, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)", // nice pop effect
        delay: 0.2, // plays after text starts
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  });

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


  return (
    <section id="fifth" ref={sectionRef}>
      <h1 id="toptitle">
        Move Faster <br /> <span className="serif italic">Stress less.</span>{" "}
      </h1>

      <div className="roll hideonmobile">
        <div 
          className="fifthcards" 
          ref={el => cardsRef.current[0] = el}
        >
          <div>
            <h2>Tell us your vibe</h2>{" "}
            <p className="infoparas">
              Let us know your ideal rent, preferred area, and the kind of living experience you want — solo, shared, or social.
            </p>{" "}
          </div>

          <p className="number serif">1</p>

          <span>
            <img src="2phone1.webp" />
          </span>
        </div>

        <div 
          className="fifthcards"
          ref={el => cardsRef.current[1] = el}
          id="card2"
        >
          <span>
            <img src="2phone2.webp" />
          </span>

          <p className="number serif">2</p>

          <div>
            <h2>Meet your match</h2>{" "}
            <p className="infoparas">
            Denner shows you verified listings and real flatmate profiles that actually match your lifestyle. No spam. No random names.
            </p>{" "}
          </div>
        </div>

        <div 
          className="fifthcards"
          ref={el => cardsRef.current[2] = el}
        >
          <div>
            <h2>Say hi and move in</h2>{" "}
            <p className="infoparas"> 
             Message directly, set up your visit, and take the next step toward moving in. Just real people and real spaces.
            </p>{" "}
          </div>

          <p className="number serif">3</p>

          <span>
            <img src="2phone3.webp" />
          </span>
        </div>
      </div>

      <div className="roll mobile">
        <div 
          className="rollcard"
          ref={el => cardsRef.current[3] = el}
        >
          <img src="2phone1.webp" alt="" />

          <span>
            <h2>Tell us your vibe</h2>{" "}
            <p>
              Let us know your ideal rent, preferred area, and the kind of living experience you want — solo, shared, or social.
            </p>
          </span>
        </div>

        <div 
          className="rollcard"
          ref={el => cardsRef.current[4] = el}
        >
          <img src="2phone2.webp" alt="" />

          <span>
           <h2>Meet your match</h2>{" "}
            <p>
             Denner shows you verified listings and real flatmate profiles that actually match your lifestyle. No spam. No random names.
            </p>{" "}
          </span>
        </div>

        <div 
          className="rollcard"
          ref={el => cardsRef.current[5] = el}
        >
          <img src="2phone3.webp" alt="" />

          <span>
            <h2>Say hi and move in</h2>{" "}
            <p>
             Message directly, set up your visit, and take the next step toward moving in. Just real people and real spaces.
            </p>{" "}
          </span>
        </div>
      </div>
 
    </section>
  );
}

export default Fifth;