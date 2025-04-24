"use client";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center">
      <h1 className="text-xl font-bold">ClassAid</h1>

      {/* Desktop */}
      <nav className="flex gap-6 items-center">
        <Link href="/" className="">
          Pricing
        </Link>
        <Link href="/" className="">
          Sign In
        </Link>
        <Link href="/">
          <button className="text-white bg-blue-800 hover:bg-blue-900 font-medium rounded-full text-sm text-center p-2 w-35 cursor-pointer">
            Create Account
          </button>
        </Link>
      </nav>
      {/* <button className="md:hidden p-2"></button> */}
    </header>
  );
}

export default Header;
