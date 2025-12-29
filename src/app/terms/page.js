import React from 'react'
import Link from 'next/link'
import '../../styles/Pages.css'
import "../../styles/Navbar.css";

function page() {
  return (
    <>
      <div className="pagesbody">
        <Navbar />

  <h1>Terms & Conditions</h1>
    <p className='bold'>Last Updated on 11 Dec 2024</p>

<br />
  <p className="bold">1. Definitions</p>
  <p>Unless otherwise specified, the capitalized terms shall have the meanings set out below:</p>
  <p><span className="semibold">Account:</span>{" "}Refers to the account created on the Denner platform by the User in accordance with these Terms and Conditions.</p>
  <p><span className="semibold">Agreement:</span>{" "}Refers to these Terms and Conditions, the Privacy Policy, and any other policies or terms mutually agreed upon between Denner and the User.</p>
  <p><span className="semibold">Applicable Law:</span>{" "}Includes all relevant statutes, regulations, ordinances, rules, judgments, orders, or guidelines from any regulatory authority in India that apply to this Agreement.</p>
  <p><span className="semibold">Partner / Broker:</span>{" "}Includes property brokers, channel partners, or agencies listing bachelor-friendly flats on the Denner platform in exchange for remuneration.</p>
  <p><span className="semibold">Content:</span>{" "}Includes all data and information displayed on the Denner app or website, including User listings, broker information, and other shared resources.</p>
  <p><span className="semibold">Denner:</span>{" "}Refers to Denner Technologies Private Limited, including its officers, employees, and representatives.</p>
  <p><span className="semibold">Personal Information:</span>{" "}Includes sensitive information provided by the User, such as Aadhaar details, contact information, and other data for verification or listing purposes.</p>
  <p><span className="semibold">User:</span>{" "}Refers to any individual using the Denner platform to find roommates or flats, including tenants, property owners, or brokers.</p>

<br />
  <p className="bold">2. Acceptance of Terms</p>
  <p>
    By accessing or using the <span className="bold">Denner</span>{" "}platform, the User agrees to comply with these Terms and Conditions and the Privacy Policy.
  </p>
  <p>Users must be at least 18 years old to create an Account. Minors may use the platform only with parental supervision.</p>
<br />
  <p className="bold">3. Account Creation and Usage</p>
  <p>Users must provide accurate and complete information during account creation.</p>
  <p>Denner reserves the right to verify the User's identity through OTP authentication or Aadhaar verification.</p>
  <p>Multiple accounts by the same User are not allowed. Any detected duplication may result in suspension or deactivation of the Account.</p>
<br />
  <p className="bold">4. Services Offered</p>
  <p>Denner provides the following services to Users:</p>
  <p>Roommate matchmaking based on preferences.<br/>
     Verified flat listings by brokers and property owners.<br/>
     Community features to connect bachelors for goods exchange, events, and local offers.
  </p>
<br />
  <p className="bold">5. User Responsibilities</p>
  <p>Users must not post false or misleading information on the platform.</p>
  <p>Users are responsible for keeping their login credentials secure.</p>
  <p>Users agree to comply with all applicable laws when using Denner's services.</p>
<br />
  <p className="bold">6. Broker Verification and Listings</p>
  <p>Denner works with verified brokers to list bachelor-friendly flats. Brokers must comply with Denner’s guidelines and maintain accurate and updated listings.</p>
  <p>Denner reserves the right to remove stale or inactive listings after notifying the broker.</p>
<br />
  <p className="bold">7. User Verification</p>
  <p>To ensure safety and authenticity, Users are required to verify their identity through Aadhaar or other government-issued documents.</p>
  <p>Verification helps prevent spamming, duplicate accounts, and enhances the trustworthiness of the platform.</p>
<br />
  <p className="bold">8. Limitations of Liability</p>
  <p>
    <span className="bold">Denner</span>{" "}acts solely as a facilitator connecting Users to potential roommates or flats. Denner is not liable for disputes, fraud, or losses resulting from User interactions.
  </p>
  <p>Denner does not guarantee the availability or suitability of any roommate or flat listed on the platform.</p>
<br />
  <p className="bold">9. Content Guidelines</p>
  <p>Users are prohibited from posting defamatory, obscene, or false content.</p>
  <p>Denner reserves the right to edit, remove, or disable content that violates these Terms or applicable laws.</p>
<br />
  <p className="bold">10. Community Features</p>
  <p>Denner’s community feature allows Users to interact, buy, sell goods, and participate in events.</p>
  <p>Users must adhere to the community guidelines and respect other members' privacy.</p>
<br />
  <p className="bold">11. Modification of Terms</p>
  <p>
    <span className="semibold">Denner</span>{" "}reserves the right to update or modify these Terms at any time. 
    Changes will be communicated through the platform, and continued use implies acceptance.
  </p>
<br />
  <p className="bold">12. Contact</p>
  <p>
    For any queries related to these Terms & Conditions, please contact us at: 
    <a href="mailto:connect@denner.in"> connect@denner.in</a>
  </p>
</div>

    </>
  )
}

export default page