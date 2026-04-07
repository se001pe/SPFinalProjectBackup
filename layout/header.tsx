'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between h-28 px-10">

        {/* Logo + Title */}
        <div className="flex items-center space-x-6">
          <Image
            src="/aitestamford.png"
            alt="AITE Logo"
            width={95}
            height={95}
            className="object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-4xl font-serif font-bold text-gray-900">
              Academy of Information Technology
            </h1>
            <p className="text-lg tracking-wide text-blue-700 font-medium">
              & Engineering
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-10 text-lg font-semibold text-gray-700">
          <Link href="/" className="hover:text-blue-700 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-700 transition">
            About
          </Link>
          <Link href="#" className="hover:text-blue-700 transition">
            Contact Us
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;