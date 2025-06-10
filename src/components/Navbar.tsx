"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-4 inset-x-0 z-50 hidden sm:block">
        <div className="max-w-3xl mx-auto">
          <Menu setActive={setActive} active={active} />
        </div>
      </nav>

      {/* Mobile Toggle Button */}
      <div className="fixed top-4 right-4 z-50 sm:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-full bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-gray-200"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 rounded-full bg-gray-900 transition-transform ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-gray-900 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-gray-900 transition-transform ${
                mobileMenuOpen ? "translate-y-[-8px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-20 bg-white/95 backdrop-blur-md sm:hidden"
          >
            <div className="px-6 py-4 space-y-4">
              <Image
                src="/logos/belas.png"
                alt="Belas Logo"
                width={123}
                height={110}
                className="object-contain min-w-[123px] max-w-[100px] h-auto"
              />
              <MobileMenuItem
                href="/"
                text="Home"
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <MobileMenuItem
                href="/courses"
                text="Hoardings"
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <MobileMenuItem
                href="/EV"
                text="EV"
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <MobileMenuItem
                href="/contact"
                text="Digital Marketing"
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <MobileMenuItem
                href="/contact"
                text="Contact Us"
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileMenuItem({
  href,
  text,
  setMobileMenuOpen,
}: {
  href: string;
  text: string;
  setMobileMenuOpen: (value: boolean) => void;
}) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 text-lg font-medium rounded-lg hover:bg-gray-100"
      onClick={() => setMobileMenuOpen(false)}
    >
      {text}
    </Link>
  );
}

function Menu({
  setActive,
  active,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
}) {
  return (
    <div className="flex justify-center items-center rounded-full bg-white/80 px-4 py-2 shadow-lg ring-1 ring-gray-200 backdrop-blur-md">
      {/* Logo + Home */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logos/belas.png"
          alt="Belas Logo"
          width={60}
          height={40}
          className="object-contain w-[50px] h-auto"
        />
        <MenuItem item="Home" setActive={setActive} active={active} />
      </Link>

      <Link href="/courses">
        <MenuItem item="Hoardings" setActive={setActive} active={active} />
      </Link>

      <Link href="/EV">
        <MenuItem item="EV" setActive={setActive} active={active} />
      </Link>

      <MenuItem item="Other Services" setActive={setActive} active={active}>
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/contact">Digital Marketing</HoveredLink>
          <HoveredLink href="/contact">Website Designing</HoveredLink>
          <HoveredLink href="/contact">Social Media Management</HoveredLink>
          <HoveredLink href="/contact">Flex Designing</HoveredLink>
        </div>
      </MenuItem>

      <Link href="/contact">
        <MenuItem item="Contact us" setActive={setActive} active={active} />
      </Link>
    </div>
  );
}

function MenuItem({
  item,
  children,
  setActive,
  active,
}: {
  item: string;
  children?: React.ReactNode;
  setActive: (item: string | null) => void;
  active: string | null;
}) {
  return (
    <div className="relative">
      <div
        onMouseEnter={() => setActive(item)}
        onMouseLeave={() => setActive(null)}
        className="cursor-pointer rounded-full px-4 py-2 text-gray-700 hover:text-gray-900 relative z-10"
      >
        {item}
        {active === item && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 -z-10 rounded-full bg-blue-500"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </div>
      {children && active === item && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 top-full mt-2 w-48 rounded-lg bg-white shadow-lg"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

function HoveredLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
    >
      {children}
    </Link>
  );
}
