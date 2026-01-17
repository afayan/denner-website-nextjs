"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";


gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarInnerRef = useRef(null);
  const logoRef = useRef(null);
  const downloadRef = useRef(null);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const router = useRouter();


  function close() {
    setMenuOpen(false)
  }

  // Detect clicks outside (mobile only)
  useEffect(() => {
    if (window.innerWidth <= 800) {
      function handleClickOutside(e) {
        if (
          menuRef.current &&
          !menuRef.current.contains(e.target) &&
          hamburgerRef.current &&
          !hamburgerRef.current.contains(e.target)
        ) {
          setMenuOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  // Desktop scroll animation – animate ONLY the inner container
  useEffect(() => {
    if (window.innerWidth > 800) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          toggleActions: "play none none reverse",
        },
      });

      // No element crossovers; we just shrink the inner container

      tl.to(
        navbarInnerRef.current,
        {
          width: "50vw",
          paddingLeft: 16,
          paddingRight: 16,
          gap: 12,
          borderRadius: '50px',
  
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          duration: 0.4,
          ease: "power2.out",
          // keep it centered while shrinking
          marginLeft: "auto",
          marginRight: "auto",
        },
        0
      );
    }
    else{
           const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          toggleActions: "play none none reverse",
        },
      });

      // No element crossovers; we just shrink the inner container

      tl.to(
        navbarInnerRef.current,
        {
          width: "70vw",
          paddingLeft: 16,
          paddingRight: 16,
          gap: 12,
          borderRadius: '50px',
  
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          duration: 0.4,
          ease: "power2.out",
          // keep it centered while shrinking
          marginLeft: "auto",
          marginRight: "auto",
        },
        0
      );
    }
  }, []);

  return (
    <nav className="navbar">
      <div ref={navbarInnerRef} className="navbar-inner">
        {/* Logo */}
        <Link href={'/'}>
        <img
          ref={logoRef}
          id="navlogo"
          src="/logo-text.png"
          alt="Denner Logo"
          className="logo"
        />
        </Link>

        {/* Center Nav (desktop only) */}
        <div className="navbar-center hideonmobile">
          <Link href={'/owners'} className="nav-btn">For owners</Link>
          <Link href={'/about'} className="nav-btn">About us</Link>
          <Link href={'/refer-and-earn'} className="nav-btn">Refer & earn</Link>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <button ref={downloadRef} className="download-btn hideonmobile" onClick={() => { 

            if (!document.getElementById("seventh")) {
             
              router.push('/')
              
            }

            close()
            document.getElementById("seventh")?.scrollIntoView({ behavior: "smooth" })
            }}>
            Download app
          </button>

          <div
            ref={hamburgerRef}
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div ref={menuRef} className="mobile-menu">
          <Link href={'/owners'} className="nav-btn" >For owners</Link>
          <Link href={'/about'} className="nav-btn">About us</Link>
          <Link href={'/refer-and-earn'} className="nav-btn">Refer & earn</Link>
          <button className="download-btn" onClick={() => { 

            if (!document.getElementById("seventh")) {
              router.push('/')
              
            }

            close()
            document.getElementById("seventh")?.scrollIntoView({ behavior: "smooth" })}} >Download app
            </button>
          <img id="close" src="cross.png" alt="" onClick={()=>{close()}} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
