"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/saved", label: "Saved" },
  { href: "/list-property", label: "List a Property" },
] as const;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-tight text-text-main"
        >
          StayFinder
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-text-main transition-colors hover:bg-primary/10 hover:text-primary md:hidden"
          aria-label={
            isMobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>

        <div className="hidden md:flex md:items-center md:gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Button variant="secondary">Login</Button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-border-light bg-background animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-4 p-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-base font-medium text-text-main transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button
              variant="secondary"
              className="w-full"
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
