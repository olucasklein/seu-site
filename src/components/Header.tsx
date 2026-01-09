'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4 shadow-md md:shadow-none">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-semibold text-slate-900">Seu Site</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contato"
            className="hidden md:inline-flex px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            Fale Conosco
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <ul className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-slate-600 hover:text-slate-900 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contato"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
