"use client"
import React, { useState } from "react";

export default function ReferralForm() {

  const [formData, setFormData] = useState({
    yourName: "",
    yourPhone: "",
    ownerName: "",
    ownerPhone: "",
    relation: "",
    locality: "",
    flatType: "",
    availableFrom: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  

  const {
    yourName,
    yourPhone,
    ownerName,
    ownerPhone,
    locality,
    flatType
  } = formData;

  // Basic required field check
  if (
    !yourName ||
    !yourPhone ||
    !ownerName ||
    !ownerPhone ||
    !locality ||
    !flatType
  ) {
    alert("Please fill all required fields.");
    return;
  }

  // Phone number validation (India - 10 digits)
  // const phoneRegex = /^[6-9]\d{9}$/;

  // if (!phoneRegex.test(yourPhone)) {
  //   alert("Please enter a valid 10-digit phone number (Your phone).");
  //   return;
  // }

  // if (!phoneRegex.test(ownerPhone)) {
  //   alert("Please enter a valid 10-digit phone number (Owner phone).");
  //   return;
  // }

  // Passed all validations
  console.log("Validated form data:", formData);

  const body = new URLSearchParams(formData).toString();

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyB372ycvN276HoJ2GfHUFCL7nk8NqoR9rPzn_gxZQI5UFoMddZbXqEKlcVKATVb7qh/exec",
    {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  }
  );



// const data = await response.json()
// console.log(data);



  alert("Form submitted successfully!");

  // Optional: reset form

//   setFormData({
//     yourName: "",
//     yourPhone: "",
//     ownerName: "",
//     ownerPhone: "",
//     relation: "",
//     locality: "",
//     flatType: "",
//     availableFrom: ""
//   });
  
};


  return (
    <div className="denner-referral-wrapper">
      <form className="denner-referral-card" onSubmit={handleSubmit}>
        
        {/* STEP 1 */}
        <h2 className="denner-referral-step">Step 1: Your details</h2>

        <div className="denner-referral-group">
          <label>Full Name*</label>
          <input
            name="yourName"
            placeholder="Enter name and surname"
            value={formData.yourName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="denner-referral-group">
          <label>Phone Number*</label>
          <div className="denner-referral-phone">
            <b>+91</b>
            <input
              name="yourPhone"
              placeholder="Enter your phone number"
              value={formData.yourPhone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <hr />

        {/* STEP 2 */}
        <h2 className="denner-referral-step">Step 2: Flat Owner Details</h2>

        <div className="denner-referral-group">
          <label>Owner’s Full Name*</label>
          <input
            name="ownerName"
            placeholder="Enter flat owner name"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="denner-referral-group">
          <label>Owner’s Phone Number*</label>
          <div className="denner-referral-phone">
            <b>+91</b>
            <input
              name="ownerPhone"
              placeholder="Enter owner phone number"
              value={formData.ownerPhone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Dropdown: Friend / Relative / Neighbor / Other */}

        <div className="denner-referral-group">
          <label>How do you know owner?</label>
          <select
            name="relation"
            placeholder="Eg: Friend, Family, Neighbor"
            value={formData.relation}
            onChange={handleChange}
          >
            <option value="">Tap to select option</option>
            <option value="Friend">Friend</option>
            <option value="relative">Relative</option>
            <option value="neighbour">Neighbour</option>
            <option value="other">Other</option>
          </select>
        </div>

        <hr />

        {/* STEP 3 */}
        <h2 className="denner-referral-step">Step 3: Property Details</h2>

        <div className="denner-referral-group">
  <label>Locality*</label>
  <select
    name="locality"
    value={formData.locality}
    onChange={handleChange}
    required
  >
    <option value="">Select locality</option>
    <option value="Kothrud">Kothrud</option>
    <option value="Bavdhan">Bavdhan</option>
    <option value="Loni Kalbhor">Loni Kalbhor</option>
    <option value="Kondhwa / Bibwewadi">Kondhwa / Bibwewadi</option>
    <option value="Kharadi">Kharadi</option>
    <option value="Hinjawadi">Hinjawadi</option>
    <option value="Other">Other</option>
  </select>
</div>


        <div className="denner-referral-group">
          <label>Type of Flat*</label>
          <select
            name="flatType"
            value={formData.flatType}
            onChange={handleChange}
            required
          >
            <option value="">Select flat type</option>
            <option value="1rk">1 RK</option>
            <option value="1bhk">1 BHK</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
          </select>
        </div>

        <div className="denner-referral-group">
          <label>Available From (Date)</label>
          <input
            type="date"
            name="availableFrom"
            value={formData.availableFrom}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="denner-referral-submit">
          Submit details
        </button>
      </form>
    </div>
  );
}
