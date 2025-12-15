import Image from "next/image";
import "../styles/Seventh.css";

const Seventh = () => {
  return (
    <section id="seventh">
      <h1 className="serif italic">
        Join India’s new way to rent.
      </h1>

      <p>More trust. More clarity. More connection.</p>

      <div className="store-buttons">
        <a
          href="https://apps.apple.com/in/app/denner/id6464025021"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/appstore.png"
            alt="Download on the App Store"
            className="store-badge"
          />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.denner.denner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/playstore.png"
            alt="Get it on Google Play"
            className="store-badge"
          />
        </a>
      </div>

      <div className="phones">
        <img
          src="/3phone0.webp"
          alt="Denner app preview left"
          className="phone phone-left"
        />

        <img
          src="/2phone2new.webp"
          alt="Denner app preview center"
          className="phone phone-center"
        />

        <img
          src="/3phone2.webp"
          alt="Denner app preview right"
          className="phone phone-right"
        />
      </div>
    </section>
  );
};

export default Seventh;
