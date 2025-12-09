import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex gap-15'>
      <Link href="/product/mens">Mens</Link>
      <Link href="/product/women">women</Link>
      <Link href="/product/kids">kids</Link>
    </div>
  );
}

export default page