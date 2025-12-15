'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/Third.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Second() {
  // Create a ref for the main container
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Only run this effect after the component mounts
    if (!containerRef.current) return;
    
    // Find all elements with reveal-type class within our component
    const splitTypes = containerRef.current.querySelectorAll('.reveal-type');
    
    // Create an array to store our animations for cleanup
    const animations = [];
    
    splitTypes.forEach((element) => {
      const bg = element.dataset.bgColor;
      const fg = element.dataset.fgColor;
      
      // Initialize SplitType on the element
      const text = new SplitType(element, { types: 'chars' });
      
      // Create the animation
      const animation = gsap.fromTo(
        text.chars,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            // ...(window.innerWidth <= 800 ? { pin: true } : {}) // Add pin: true only for mobile
          },
        }
      );
      
      animations.push({ animation, text });
    });
    
    // Cleanup function to kill animations and revert splits when component unmounts
    return () => {
      animations.forEach(({ animation, text }) => {
        if (animation && animation.scrollTrigger) {
          animation.scrollTrigger.kill();
        }
        if (text && text.revert) {
          text.revert();
        }
      });
    };
  }, []);
  
  return (
    <div id='thirddiv'ref={containerRef}>
      <h2 
        id="splitTextAnimation" 
        className="reveal-type" 
        data-bg-color="#b6b6b6ff" 
        data-fg-color="#000000ff"
      >
        Renting flat means <br /> finding your 
        Second <br className='mobile'/> family. <br className='mobile'/>
         <br /> Let's change the way 
        <br className='mobile'/> We find <br className='hideonmobile'/> our "home- <br className='mobile'/> mates"<br />
        <br className='mobile'/>
        after all home is where <br/> the family is :)
      </h2>
    </div>
  );
}

export default Second;