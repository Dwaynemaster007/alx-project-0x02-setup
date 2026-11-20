import React from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Welcome' },
  { href: '/home', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/users', label: 'Users' },
  { href: '/about', label: 'About' },
];

const Header = () => {
  return (
    <nav className="bg-blue-200 p-4">
      <ul className="flex flex-wrap gap-x-10 gap-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-lg font-bold text-gray-900 hover:underline">{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
