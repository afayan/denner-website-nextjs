import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import "../../styles/Pages.css";
import Navbar from "@/components/Navbar";
import "../../styles/Navbar.css";

function page() {
  return (
    <>
      <div className="pagesbody">
        <Navbar />

        <h1>About Us</h1>

        <p>
          At Denner, we’re transforming the way you find your perfect home and
          ideal roommates.{" "}
        </p>

        <p>
          Our app makes it simple and enjoyable to explore exceptional
          accommodations tailored to your unique preferences. Whether it’s a
          cozy flat or a vibrant community, every listing is handpicked to
          ensure comfort and style.{" "}
        </p>

        <p>
          Discover compatible roommates who share your interests and values, and
          build a supportive living environment that truly feels like home.
        </p>

        <p>
          With Denner, your journey to extraordinary living is effortless and
          inspiring. Let us help you find a place where you can thrive, connect,
          and be yourself.
        </p>

        <p>Start your journey with Denner and make every day extraordinary! </p>
      </div>
    </>
  );
}

export default page;
