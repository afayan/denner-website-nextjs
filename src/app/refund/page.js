import React from 'react'
import Link from 'next/link'
import '../../styles/Pages.css'
import "../../styles/Navbar.css";

function page() {
  return (
    <>
      <div className="pagesbody">
        <Navbar />

  <h1>Refund Policy</h1>

  <p className='bold'>Last Updated on 11 Dec 2024</p>

  <p>
    At <span className="bold">Denner</span>{" "}, we strive to provide a seamless and satisfactory experience for all our users. 
    This Refund Policy outlines the terms and conditions under which refunds may be granted for services purchased through 
    the Denner app or platform.
  </p>

<br />
  <p className="bold">1. General Refund Conditions</p>
  <p>Refunds will be processed in accordance with Denner's terms and conditions. Refunds are applicable only under specific circumstances, as described below:</p>
  <p><span className="semibold">Eligibility:</span>{" "}Refunds will only be considered for users who meet the criteria outlined in this policy and provide sufficient evidence of their claim.</p>
  <p><span className="semibold">Refund Method:</span>{" "}Refunds will be made to the original payment method used during the transaction.</p>
  <p><span className="semibold">Processing Time:</span>{" "}Refunds will be processed within 10 business days upon approval, subject to payment gateway or banking delays.</p>

<br />
  <p className="bold">2. Refunds for Broker Services</p>
  <p><span className="semibold">Listing Fees:</span>{" "}Refunds for broker listing fees will only be provided if the listing fails to appear on the platform due to errors attributable to Denner.</p>
  <p>Brokers may request a partial refund if the listing is removed before the rental period ends.</p>
  <p><span className="semibold">Contact Details Purchase:</span>{" "}Refunds will not be granted for payments made to access contact details, as the service is fulfilled upon delivery.</p>

<br />
  <p className="bold">3. Refunds for Aadhaar Verification Fee</p>
  <p>
    Refunds for the Aadhaar verification fee are non-applicable once the verification process is initiated.
  </p>

<br />
  <p className="bold">4. Refunds for Special Services and Promotions</p>
  <p><span className="semibold">Event Tickets:</span>{" "}Refunds for event ticket purchases are subject to the terms of the event organizer. Denner acts as a facilitator and is not responsible for refunds unless explicitly stated.</p>
  <p><span className="semibold">Promotional Discounts:</span>{" "}No refunds or adjustments will be made for promotional offers once the payment is processed.</p>

<br />
  <p className="bold">5. Refund Request Process</p>
  <p><span className="semibold">Submitting a Request:</span>{" "}To initiate a refund, users must go through the process on the app.</p>
  <p><span className="semibold">Verification:</span>{" "}Denner may request additional information to verify the claim and process the refund request.</p>
  <p><span className="semibold">Approval:</span>{" "}Refunds are subject to review and approval by Denner's management.</p>

<br />
  <p className="bold">6. Non-Refundable Cases</p>
  <p>Refunds will not be granted under the following circumstances:</p>
  <p>User fails to meet the terms and conditions of Denner.<br/>
     Users change their mind after purchasing a service or plan.<br/>
     Misuse or non-compliance with Denner’s guidelines or policies.<br/>
     Claims made beyond the stipulated time frame.
  </p>

<br />
  <p className="bold">7. Denner's Right to Amend</p>
  <p>
    <span className="semibold">Denner</span>{" "}reserves the right to amend this Refund Policy at any time without prior notice. 
    Users are encouraged to review this policy periodically to stay updated on any changes.
  </p>

<br />
  <p className="bold">8. Contact for Refund Queries</p>
  <p>
    For any refund-related queries or assistance, please contact us at: 
    <a href="mailto:connect@denner.in"> connect@denner.in</a>
  </p>
</div>
    </>
  )
}

export default page