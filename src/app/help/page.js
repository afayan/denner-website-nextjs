import React from 'react'
import Link from 'next/link'
import '../../styles/Pages.css'
import "../../styles/Navbar.css";
import Navbar from '@/components/Navbar';

function Help() {
  return (
    <>
      <div className="pagesbody">
        <Navbar />
  <h1>Help</h1>

  <p>
    To remove your profile from Denner:
  </p>

 <p>
    1. Click the <span className="bold">profile button</span> at the bottom
    right to access your profile.
        <br />
    2. Next, select the <span className="bold">"Advanced"</span> option.
        <br />
    3. Choose <span className="bold">"Delete Account."</span>
 <br />
    4. Confirm with <span className="bold">"Yes"</span> to proceed with account
    deletion.
  </p>

  <p>
    Please note that no user data is stored, except for the account creation
    and deletion dates, along with the email ID used during account creation.
  </p>

  <p>
    For any questions regarding this Privacy Policy or our privacy practices,
    please contact us at: <span className="bold">connect@denner.in</span>
  </p>
</div>
    </>
  )
}

export default Help