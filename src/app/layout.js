import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The Travels of Zee - Professional Services",
  description: "Professional services offering content writing, graphic designing, and mobile & software development.",
  icons: {
    icon: [
      { url: '/our Identity/T favicon b&w.png' },
      { url: '/our Identity/T favicon 512x512 pixels.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: '/our Identity/T favicon 512x512 pixels.png', sizes: '512x512', type: 'image/png' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/our Identity/T favicon b&w.png" />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
