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

export const metadata = {
  metadataBase: new URL("https://denner.in"),

  title: {
    default: "Verified Flats for Rent in Pune | Denner",
    template: "%s | Denner",
  },

  description:
    "Find verified rental flats in Pune on Denner. From shared flats and roommates to homes for bachelors and families, get clear pricing, trusted listings and complete support till you move in.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192" },
      { url: "/favicon-512.png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    siteName: "Denner",
    url: "https://denner.in/",
    title: "Verified Flats for Rent | Denner",
    description:
      "Find verified rental flats in Pune on Denner. From shared flats and roommates to homes for bachelors and families, get clear pricing, trusted listings and complete support till you move in.",
    images: [
      {
        url: "https://res.cloudinary.com/dtpco4jug/image/upload/v1766985904/Preview_IMG_zddk9q.png",
        width: 1200,
        height: 630,
        alt: "Denner rental platform preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@dennerapp",
    title: "Denner | Find Rental Tenants Fast & Free",
    description:
      "List your rental property and find verified tenants across Pune for free and fast with Denner.",
    images: [
      "https://res.cloudinary.com/dtpco4jug/image/upload/v1762010005/Pi7compressedPreviewIMG_hwxsl9.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
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
