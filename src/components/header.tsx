'use client';

import { ThemeToggle } from '@/components/themeToggle';
import { LogOut, Package } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  const headerItens = [
    {
      title: 'Produtos',
      href: '/products',
    },
    {
      title: 'Novo',
      href: '/products/new',
    },
  ];

  return (
    <header className="w-full border-b bg-card">
      <div className="h-16 max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-md bg-primary/10">
            <Package size={22} />
          </div>

          <span className="text-xl font-semibold text-primary">Controlli</span>
        </Link>

        <nav className="flex items-center gap-2 md:gap-6 text-sm font-medium">
         {headerItens.map((menu) => {
          const isActive =
            pathname === menu.href ||
            (pathname.startsWith(menu.href + "/") && !pathname.startsWith(menu.href + "/new"));

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={`
                  transition-colors
                  ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }
                `}
              >
                {menu.title}
              </Link>
            );
          })}

          <ThemeToggle />

          <Link
            className="p-2 rounded-md hover:bg-out-soft transition"
            href="/"
          >
            <LogOut className="text-out" size={18} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
