import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Cs Association",
  description: "Web Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-secondary"
      >
        {children}
      </body>
    </html>
  );
}
