"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hiddden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackkish">
          <Link href="#" className="navbar__link relative">
            Home
          </Link>

          <Link href="#" className="navbar__link relative">
            Categories
          </Link>

          <Link href="#" className="navbar__link relative">
            Men&apos;s
          </Link>

          <Link href="#" className="navbar__link relative">
            Women&apos;s
          </Link>

          <Link href="#" className="navbar__link relative">
            Jewellry
          </Link>
          <Link href="#" className="navbar__link relative">
            Perfume
          </Link>
          <Link href="#" className="navbar__link relative">
            Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
