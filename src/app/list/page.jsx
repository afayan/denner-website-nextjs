"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/List.css";

function DennerListFormPage() {
  const router = useRouter();

  const [ownerName, setOwnerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [flatType, setFlatType] = useState("");
  const [locality, setLocality] = useState("");
  const [expectedRent, setExpectedRent] = useState("");
  const [society, setSociety] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneNumber.trim().length !== 10) {
      alert("Invalid phone number");
      return;
    }

    if (!ownerName || !phoneNumber || !flatType || !locality || !expectedRent) {
      alert("Please fill all details");
      return;
    }

    setIsLoading(true);

    const payload = {
      name: ownerName,
      phone: phoneNumber,
      type: flatType,
      locality,
      rent: expectedRent,
      society
    };

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyZ2ISzzyaFLP8ITbbeWOPiIIOqM6RZ7RqGG7KHZVcN8wZqIL-ubKVvmFdyStPvGg9E/exec";

    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setOwnerName("");
    setPhoneNumber("");
    setFlatType("");
    setLocality("");
    setExpectedRent("");
    setSociety("");
    setIsLoading(false);

    router.push("/done");
  };

  return (
    <div className="denner-form-container">
      <img src="/denner-logo2.png" alt="Denner logo" className="denner-form-logo" />

      <h1 className="denner-form-title">
        List your knowing<br />
        property at ₹<span className="denner-form-highlight">0</span>
      </h1>

      <h3 className="denner-form-subtitle">
        No brokerage. Verified tenants. End-to-end support.
      </h3>

      <p className="denner-form-description">
        Fill out the quick form below and our team will reach out within 24 hours
        to help you rent your flat faster.
      </p>

      <form onSubmit={handleSubmit} className="denner-form">
        <div className="denner-form-group">
          <label className="denner-form-label">Flat Owner's Name</label>
          <input
            className="denner-form-input"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            placeholder="Enter name and surname"
          />
        </div>

        <div className="denner-form-group">
          <label className="denner-form-label">Phone Number</label>
          <div className="denner-form-phone-wrap">
            <span className="denner-form-code">+91</span>
            <input
              className="denner-form-input denner-form-phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
            />
          </div>
        </div>

        <div className="denner-form-group">
          <label className="denner-form-label">Type of flat</label>
          <select
            className="denner-form-input"
            value={flatType}
            onChange={(e) => setFlatType(e.target.value)}
          >
            <option value="">Select flat type</option>
            <option value="singleRoom">Single room</option>
            <option value="1rk">1 RK</option>
            <option value="1bhk">1 BHK</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="4bhk">4 BHK</option>
          </select>
        </div>

        <div className="denner-form-group">
          <label className="denner-form-label">Locality</label>
          <select
            className="denner-form-input"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          >
            <option value="">Select locality</option>
            <option value="Kothrud">Kothrud / Karvenagar</option>
            <option value="Bavdhan">Bavdhan</option>
            <option value="Baner">Baner / Aundh</option>
            <option value="Hinjawadi">Hinjawadi</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="denner-form-group">
          <label className="denner-form-label">Expected rent</label>
          <input
            type="number"
            className="denner-form-input"
            value={expectedRent}
            onChange={(e) => setExpectedRent(e.target.value)}
            placeholder="Enter expected rent"
          />
        </div>

        <div className="denner-form-group">
          <label className="denner-form-label">
            Society Name (Optional)
          </label>
          <input
            className="denner-form-input"
            value={society}
            onChange={(e) => setSociety(e.target.value)}
            placeholder="Enter society name"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`denner-form-submit ${
            isLoading ? "denner-form-loading" : ""
          }`}
        >
          {isLoading ? "Submitting..." : "Submit Details"}
        </button>
      </form>

      <div className="denner-form-support">
        <p>
          Facing issues? Drop message <br /> on WhatsApp for support.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://wa.me/919156005618?text=Hi%20Denner%20team%2C%20I%20need%20support%20regarding%20the%20flat%20onboarding%20form",
              "_blank"
            )
          }
        >
          Support
        </button>
      </div>
    </div>
  );
}

export default DennerListFormPage;
