'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// Store the original title
const originalTitle = "AIFIER | Restaurant Management Platform";
const returnTitle = "🍽️ Come back! Try our 10-day free trial | AIFIER";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Update title when tab visibility changes
    const handleVisibilityChange = () => {
      document.title = document.hidden ? returnTitle : originalTitle;
    };

    // Set initial title
    document.title = originalTitle;

    // Add event listener
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('ServiceWorker registration successful');
          },
          (err) => {
            console.log('ServiceWorker registration failed: ', err);
          }
        );
      });
    }

    // Implement smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="description" content="Transform your restaurant with digital menus, contactless ordering, and zero-commission online orders. Start your 10-day free trial today!" />
        <meta name="keywords" content="digital menu, QR code menu, restaurant management, online ordering, table reservations, contactless ordering" />
        <meta name="author" content="AIFIER" />
        <meta property="og:title" content={originalTitle} />
        <meta property="og:description" content="Transform your restaurant with digital menus and smart ordering solutions. Start your 10-day free trial!" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} transition-colors duration-300 bg-white`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
