"use client"

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Cards.css";

gsap.registerPlugin(ScrollTrigger);

function Cards() {
  const cardsRef = useRef([]);

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

useEffect(() => {
  cardsRef.current.forEach((card) => {
    if (!card) return;

    gsap.fromTo(
      card,
      { opacity: 0, y: 40 },  // match CSS translateY(40px)
      {
        opacity: 1,
        y: 0,
        ease: "expo.out",
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}, []);


  return (
<>

<img className="yqtwedg7352e" id="topimage" src="diamond.webp" alt="" />
      <h2 id="toptitle" ref={titleRef}>
        It's not magic,<br />
        <span className="italic serif"> it's Denner</span>
      </h2>

    <div className="cardcontainer">
      {[1, 2, 3, 4].map((n, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className={`roll-card card-${i + 1}`}
        >
          <img src={`card${n}.png`} alt="" />
        </div>
      ))}
    </div>

    </>
  );
}

export default Cards;
