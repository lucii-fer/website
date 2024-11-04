import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "QiweckSolutions | Freelancer",
  description:
    "Discover the latest in technology with insights, tutorials, and resources on software development, AI, and cybersecurity. Join our tech community and enhance your skills. | QiweckSolutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>{children}</body>
    </html>
  );
}
