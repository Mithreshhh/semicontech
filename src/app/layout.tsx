import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "SemicoreTech | Advanced Semiconductor & VLSI Solutions",
  description: "Engineering the future of semiconductor innovation with advanced VLSI, embedded systems, and software engineering solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-navy text-white selection:bg-cyan selection:text-navy" suppressHydrationWarning>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="9950f2d2-ab51-4309-b156-10479d473175"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "SemicoreTech", "version": "1.0.0"}'
        />
        <Navbar />
        <main>{children}</main>
        <ContactForm />
        <Footer />
        <WhatsAppButton />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
