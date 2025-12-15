'use client'

export default function Buttons(){
    return(<>
    <div className="download">
  <button
    onClick={() => window.open("https://apps.apple.com/in/app/denner/id6464025021", "_blank")}
  >
    <img src="appstore.png" alt="Download on the App Store" />
  </button>

  <button
    onClick={() => window.open("https://play.google.com/store/apps/details?id=com.denner.denner", "_blank")}
  >
    <img src="playstore.png" alt="Get it on Google Play" />
  </button>
</div>
    </>)
}