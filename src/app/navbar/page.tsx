'use client';
import { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function NavbarPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Head>
        <title>SaaS Navbar Demo</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" />
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
        <div className="flex items-center space-x-2">
          <iconify-icon icon="ph:cloud" width="24" height="24" class="text-blue-600"></iconify-icon>
          <span className="font-semibold text-lg text-gray-800">SaaSify</span>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Pricing</a>
          <a href="#" className="hover:text-blue-600">About Us</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">Login</a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Started</a>
        </div>
        <button
          className="md:hidden text-gray-600"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <iconify-icon icon="ph:list" width="24" height="24"></iconify-icon>
        </button>
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t shadow-md md:hidden">
            <div className="flex flex-col py-2 text-gray-700">
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Home</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Features</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Pricing</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">About Us</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Contact</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Login</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100 bg-blue-600 text-white rounded-md mx-4 text-center">Get Started</a>
            </div>
          </div>
        )}
      </nav>
      <main className="p-8 text-center text-gray-700">
        <p className="text-xl">Main content goes here.</p>
      </main>
    </div>
  );
}
