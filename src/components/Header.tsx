'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            RevCryl
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('quem-somos')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Quem Somos
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('produtos')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Produtos
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contato
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="py-4">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('quem-somos')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
              >
                Quem Somos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('produtos')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              >
                Produtos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}