import React from "react";
import Navbar from "@/components/Navbar";
import "@/styles/Pages.css";
import Link from "next/link";

export const metadata = {
  title: "A Letter to Property Owners",
  description:
    "A note from Denner to property owners on building trust, renting with clarity, and creating a smoother rental journey.",
};


function page() {
  return (
    <>
      <div className="pagesbody" id="letter">
        <Navbar />

        <h1>A letter to property owners</h1>

        <p>
          Over the years, you have invested your time, effort, and trust in
          building and maintaining your property. You have worked to protect its
          value, managed responsibilities carefully, and ensured that it remains
          a reliable home for those who live in it.{" "}
        </p>

        <p>
          You have built relationships with tenants, handled concerns
          personally, and maintained your property with attention and care.
          Through this, you have earned experience and understanding that only
          comes from being directly involved in renting and managing a home.
        </p>

        <p>
          Now you may be looking for a better way to rent your flat. A way that
          feels more predictable, more transparent, and more secure. A partner
          who understands the challenges of renting in today’s market, from
          managing visits and documentation to avoiding scams and unclear
          commitments.
        </p>

        <p>
          At Denner, we aim to be that trusted partner. We are building a
          structured, scam-free renting experience for property owners and
          tenants, and we would be glad to support you in renting your flat with
          confidence.
        </p>

        <p id="salutation">Team Denner</p>

        
      </div>
        <div className="whitebox">
          <h1 className='serif'>Rent your flat within days!</h1>
          <p>It takes only a few minutes to get started.</p>
          <Link href={'/list-your-flat'}>
          <button>List your flat</button></Link>
         </div>
    </>
  );
}

export default page;
