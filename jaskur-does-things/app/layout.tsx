import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaskur Does Things",
  description: "A website to showcase all of the things Jaskur does.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
