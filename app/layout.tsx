import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CRUSADER — Architectural Modular Streetwear",
  description: "Independent Russian architectural modular streetwear brand. Monumental silhouettes, premium natural fabrics, restrained utility hardware.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow" style={{ marginTop: 'var(--header-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
