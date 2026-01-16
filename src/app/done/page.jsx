"use client"

import React from 'react'
import "../../styles/List.css";


function Page() {
  return (
    <div className="denner-form-end">
      <h1 className="denner-form-title">
        Thank you!
      </h1>

      <p className="denner-form-description2">
        Our team will contact you shortly to list your property.
      </p>

      <div className="denner-form-support">
        <p>
          Need to get in touch quickly? <br />
          Drop message on WhatsApp.
        </p>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/919156005618?text=Hi%20Denner%20team%2C%20I%20need%20support%20regarding%20the%20flat%20onboarding%20form",
              "_blank"
            )
          }
        >
          tap for Support
        </button>
      </div>
    </div>
  );
}

export default Page;
