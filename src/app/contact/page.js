import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import '../../styles/Pages.css'
import "../../styles/Navbar.css";

function page() {
  return (
    <>
      <div className="pagesbody">
        <Navbar />

  <h1>Contact Us</h1>

  <p>
    Have questions or need assistance? Feel free to reach out to us:
  </p>

  <p>
    <span>Email:</span>{" "}
    <a href="mailto:contactus.denner@gmail.com">contactus.denner@gmail.com</a>
  </p>

  <p>
    We’re here to help and always excited to connect with our community.
  </p>

  <p>
    Follow us on social media for updates, news, and more – join the conversation today!
  </p>

  <p className="black">
    Thank you for choosing <span className="bold">Denner</span>!<br/>
    We value your support and look forward to assisting you.
  </p>
</div>
    </>
  )
}

export default page