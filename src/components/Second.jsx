import React from "react";
import "../styles/Second.css";


function Second() {
  return (
    <div id="second">
      {/* Section 1 */}
      <div className="second-section" id="aaa">
        <div className="text">
        <img src="house.webp" alt="" />
          <h2>Book verified <br /> flats on rent</h2>
          <p>Find verified flats with pro book <br /> assistance till move-in.</p>
        </div>
       
        <img src="phone1.webp" alt="" />

      </div>

      {/* Section 2 */}
      <div className="second-section">
        <div className="text">
        <img src="bed.webp" alt="" />

          <h2>Your space in a shared home</h2>
          <p>Find shared flats listed by <br />verified roommates.</p>
        </div>
           <img src="phone2.webp" alt="" />

      </div>

      {/* Section 3 */}
      <div className="second-section">
        <div className="text">
                    <img src="friends.webp" alt="" />

          <h2>Match with the <br className="hideonmobile"/> right roommate</h2>
          <p>Find verified roommates who <br /> match your vibe.</p>
        </div>
             <img src="1phone3.webp" alt="" />

      </div>
    </div>
  );
}

export default Second;
