'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="navbar-container">
      <div className="navbar-links-display">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={"navbar-links"}
            >
              {item.name}
              <span
                className={`navbar-link-underline ${
                  isActive 
                    ? "active" 
                    : ""
                }`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 