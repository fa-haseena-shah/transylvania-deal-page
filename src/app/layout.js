import { Albert_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./ui/styles/globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

const berlinSans = localFont({
  src: "./fonts/berlinsans.otf",
  variable: "--font-berlin-sans",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${albertSans.variable} ${berlinSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
