"use client"

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const names = ["sharing flat", "private flat", "roommates"];

export default function ChangingText() {
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(textRef.current, {
        y: -25, // stronger movement
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          setIndex((prev) => (prev + 1) % names.length);

          // reset before entry
          gsap.set(textRef.current, { y: 25, opacity: 0 });

          gsap.to(textRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
          });
        },
      });
    }, 2500); // faster cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <span ref={textRef} style={{ display: "inline-block" }}>
      {names[index]}
    </span>
  );
}
