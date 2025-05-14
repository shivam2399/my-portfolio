// app/components/layout/Header.tsx
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/30 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">SDBuilds</Link>
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
      </div>
    </header>
  );
}
