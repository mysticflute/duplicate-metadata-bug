import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Description text for search engines.",

  openGraph: {
    type: "website",
    url: "https://test.com",
    title: "Open Graph Title",
    description: "Description text for social media cards.",
    images: "https://test.com/image.png",
  },

  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
