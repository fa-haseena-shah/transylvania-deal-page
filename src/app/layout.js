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
      <meta charset="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>Mysterious Vibes in Transylvania | Low Cost Vibes</title>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
