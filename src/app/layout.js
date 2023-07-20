import "./globals.css";
import { Roboto } from "next/font/google";

import NextProvider from "./NextProvider";

export const metadata = {
  title: "Desa Simpur",
  description: "Website Desa Simpur",
};

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <NextProvider>{children}</NextProvider>
      </body>
    </html>
  );
}
