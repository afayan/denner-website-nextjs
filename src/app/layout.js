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
    default: "Denner | Find Rental Tenants Fast & Free in Pune",
    template: "%s | Denner",
  },

  description:
    "Denner helps property owners and landlords in Pune find verified tenants quickly and for free. List your rental property, connect with tenants, and close faster.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "Denner",
    url: "https://denner.in/",
    title: "Denner | Find Rental Tenants Fast & Free",
    description:
      "Find verified tenants for your rental property in Pune. Denner is a free, fast, and simple platform for landlords and property owners.",
    images: [
      {
        url: "https://res.cloudinary.com/dtpco4jug/image/upload/v1762010005/Pi7compressedPreviewIMG_hwxsl9.png",
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
                "Denner helps landlords and property owners in India find verified tenants quickly and for free.",
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
