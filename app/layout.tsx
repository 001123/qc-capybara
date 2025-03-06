import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
    <html lang="en">
      <body>{children}</body>

      <Toaster position="top-center" reverseOrder={false} />
    </html>
  );
}
