'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="flex justify-center items-center py-6 px-4">
      <div className="flex space-x-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-lg transition-colors duration-200`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-1/2 h-0.5 transform -translate-x-1/2 transition-all duration-300 ${
                  isActive 
                    ? 'w-full' 
                    : 'w-0 hover:w-full'
                }`}
                style={{
                  backgroundColor: 'var(--foreground)'
                }}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 