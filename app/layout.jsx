import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import WhatsappButton from "@/components/WhatsappButton";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "TTM HUB",
  description: "The Talent Management Hub",
  generator: "Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AppContextProvider>
          {children}
        </AppContextProvider>
        <WhatsappButton />
        <Analytics />
        <Toaster position="top-right"/>
      </body>
    </html>
  );
}
