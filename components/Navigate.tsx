import Link from 'next/link';
import React from 'react';

const Navigate = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/services'>services</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigate;
