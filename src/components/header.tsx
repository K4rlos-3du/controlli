"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {

  const pathname = usePathname();
  
  const headerItens = [
    {
      title: 'Inicio',
      href: '/',
    },
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
    <header className="w-full bg-card h-16 shrink-0 border-b px-10 flex items-center justify-between">

      <div className='w-full flex justify-between' >
      
        <h1>Controlli</h1>

        <nav>
          {headerItens.map((menu) => {
          const isActive = pathname === menu.href;

          return (
            <Link href={menu.href} className=""
                "flex items-center gap-3 px-3 py-2 text-sm rounded-md font-medium transition-colors duration-300",
                isActive ? "bg-brand-primary text-white" : "hover:bg-gray-600"
              >
              {menu.title}
            </Link>
          )
          })}
        </nav>

      </div>
    </header>
  );
}
