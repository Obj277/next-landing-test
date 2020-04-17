import React from 'react';
import Link from 'next/link';

export default () => {
  return (
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/bridge'>Bridge</Link>
      </li>
    </ul>
  );
}