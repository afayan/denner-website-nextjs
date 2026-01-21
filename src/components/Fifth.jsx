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
            <h2>Find your flat</h2>{" "}
            <p className="infoparas">
Browse verified listings on Denner based on your location, budget, and preferences.            </p>{" "}
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
            <h2>Visit in person</h2>{" "}
            <p className="infoparas">
Request an in-person visit with a Denner partner. Get guided walkthroughs and clear answers before you decide.            </p>{" "}
          </div>
        </div>

        <div 
          className="fifthcards"
          ref={el => cardsRef.current[2] = el}
        >
          <div>
            <h2>Book and move in</h2>{" "}
            <p className="infoparas"> 
Finalize paperwork and book your flat easily. Denner partner guides you through every step until move-in.            </p>{" "}
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
            <h2>Find your flat</h2>{" "}
            <p>
              Browse verified listings on Denner based on your location, budget, and preferences.
            </p>
          </span>
        </div>

        <div 
          className="rollcard"
          ref={el => cardsRef.current[4] = el}
        >
          <img src="2phone2.webp" alt="" />

          <span>
           <h2>Visit in person</h2>{" "}
            <p>
            Request an in-person visit with a Denner partner. Get guided walkthroughs and clear answers before you decide.
            </p>{" "}
          </span>
        </div>

        <div 
          className="rollcard"
          ref={el => cardsRef.current[5] = el}
        >
          <img src="2phone3.webp" alt="" />

          <span>
            <h2>Book and move in</h2>{" "}
            <p>
             Finalize paperwork and book your flat easily. Denner partner guides you through every step until move-in.
            </p>{" "}
          </span>
        </div>
      </div>
 
    </section>
  );
}

export default Fifth;