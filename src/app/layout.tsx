import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fitzgerald Home Interiors",
  description: "Luxury interior design services in the greater Boston area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
