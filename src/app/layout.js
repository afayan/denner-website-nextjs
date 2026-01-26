import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// app/layout.tsx
export const metadata = {
  metadataBase: new URL("https://denner.in"),

  title: {
    default: "Verified Flats for Rent in Pune | Denner",
    template: "%s | Denner",
  },

  description:
    "Find verified rental flats in Pune on Denner. From shared flats and roommates to homes for bachelors and families, get clear pricing, trusted listings, and end-to-end move-in support.",

  openGraph: {
    type: "website",
    siteName: "Denner",
    url: "https://denner.in",
    images: [
      {
        url: "https://res.cloudinary.com/dtpco4jug/image/upload/v1766985904/Preview_IMG_zddk9q.png",
        width: 1200,
        height: 630,
        alt: "Denner – Verified Rental Flats in Pune",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: [
      "https://res.cloudinary.com/dtpco4jug/image/upload/v1766985904/Preview_IMG_zddk9q.png",
    ],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ScrollToTop/>
        {children}
        <Footer/>

        <Script
          id="schema-webapp"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Denner",
              url: "https://denner.in/",
              applicationCategory: "RealEstateApplication",
              operatingSystem: "Web",
              description:
                "Find verified rental flats in Pune on Denner. From shared flats and roommates to homes for bachelors and families, get clear pricing, trusted listings and complete support till you move in.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
            }),
          }}
        />

      </body>
    </html>
  );
}
