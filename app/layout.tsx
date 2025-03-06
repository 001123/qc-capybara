import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

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
      <body>{children}</body>

      <Toaster position="top-center" reverseOrder={false} />
      <Analytics />
    </html>
  );
}
