import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Capybaraaaa",
  description: "Bui Khuong Duy - Capybara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
      <Toaster position="top-center" reverseOrder={false} />
    </html>
  );
}
