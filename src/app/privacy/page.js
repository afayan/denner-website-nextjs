import React from 'react'
import Link from 'next/link'
import '../../styles/Pages.css'
import "../../styles/Navbar.css";
import Navbar from '@/components/Navbar';

function page() {
  return (
    <>
      <div className="pagesbody">
        <Navbar />

  <h1>Privacy Policy</h1>

  <p className='bold'>Last Updated on 15 Jan 2026</p>

  <p>
    <span className='bold'>Denner{' '}</span>
    is operated by Denner Ventures Private Limited.
  </p>

  <p>
    The website <a href="https://www.denner.in">https://www.denner.in</a> and the mobile application <span className='bold'> ‘Denner’ {' '}</span>
    (together referred to as “Platform”) are owned and operated by <span className='bold'> Denner Ventures Private Limited </span>, a company incorporated in India. 
    The Company is engaged in the business of providing a platform to help bachelors find compatible roommates and bachelor-friendly flats 
    through verified brokers, along with other services aimed at simplifying bachelor living (“Services”).
  </p>

  <p>
    This <span className='bold'> Privacy Policy {' '}</span> outlines the privacy practices of Denner with respect to the content of the Platform and explains 
    how we collect, use, disclose, and protect your personal information.
  </p>

  <p>
    By using our Services and accessing the Platform, you agree to the terms of this Privacy Policy and the Terms of Use. 
    If you do not agree, please refrain from using the Platform or providing us with your information.
  </p>

<br />
  <p id='big' className='bold'>1. Collection of Information</p>
  <p>We collect information when you use the Platform, including but not limited to:</p>
  <p>Personal Information: Data you provide during account registration, such as name, Aadhaar number, email address, phone number, gender, and preferences for flats or roommates.</p>
  <p>Usage Information: Information collected automatically, such as IP address, device details, browser type, and interactions on the Platform.</p>
  <p>Location Data: With your consent, we may access your location to display nearby flat listings or events.</p>

<br />
  <p id='big' className='bold'>2. Use of the Information</p>
  <p>We use the information collected for the following purposes:</p>
  <p>To provide and improve our Services.<br/>
     To match users with compatible roommates or flats.<br/>
     To notify you about updates, changes to the Platform, or new features.<br/>
     To prevent fraud, ensure user verification, and maintain platform safety.<br/>
     To perform analytics, troubleshoot issues, and conduct market research.<br/>
     To comply with legal obligations and resolve disputes.
  </p>

<br />
  <p id='big' className='bold'>3. Sharing of Information</p>
  <p>We may share your information in the following circumstances:</p>
  <p>With Brokers and Service Providers: To facilitate flat listings and roommate matches.</p>
  <p>For Targeted Advertising: With third-party advertising partners to show you relevant ads based on your activity.</p>
  <p>Legal Obligations: To comply with applicable laws, regulations, or legal processes.</p>
  <p>We do not sell or rent your personal information to third parties for marketing purposes without your explicit consent.</p>

<br />
  <p id='big' className='bold'>4. Security of Information</p>
  <p>
    We take reasonable measures to secure your information against unauthorized access, alteration, disclosure, or destruction. 
    However, the transmission of data over the internet is inherently insecure, and we cannot guarantee complete security.
  </p>
  <p>
    In case of any breach, we will promptly notify affected users and take appropriate remedial actions.
  </p>

<br />
  <p id='big' className='bold'>5. Data Retention</p>
  <p>
    We retain your personal information only for as long as necessary to provide our Services or comply with legal obligations. 
    Upon account deactivation, certain information may still be retained for dispute resolution or regulatory compliance.
  </p>

<br />
  <p id='big' className='bold'>6. Your Rights</p>
  <p>You have the following rights regarding your personal information:</p>
  <p>Access and Correction: You may review and correct your personal data.</p>
  <p>Withdrawal of Consent: You may withdraw consent for specific data processing activities by contacting us.</p>
  <p>Deletion: You may request the deletion of your personal information, subject to legal and regulatory requirements.</p>

<br />
  <p id='big' className='bold'>7. Third-Party Links and Services</p>
  <p>
    Our Platform may contain links to third-party websites. We are not responsible for their privacy practices or content. 
    We encourage you to review their privacy policies before sharing any information.
  </p>

<br />
  <p id='big' className='bold'>8. Changes to the Privacy Policy</p>
  <p>
    We may update this Privacy Policy periodically. Changes will be effective immediately upon posting. 
    For significant updates, we will notify you via email or the Platform.
  </p>

<br />
  <p id='big' className='bold'>9. Contact Us</p>
  <p>
    For any questions regarding this Privacy Policy or our privacy practices, please contact us at: 
    <a href="mailto:connect@denner.in"> connect@denner.in</a>
  </p>
</div>

    </>
  )
}

export default page