import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between p-5">
      <h1>hello</h1>

      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/product">product</Link>
      </div>
    </div>
  );
}

export default Navbar