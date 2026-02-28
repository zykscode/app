'use client'

import Link from 'next/link';
import React, { memo } from 'react';
import { ModeToggle } from './mode-toggle';
import type { MainNavItem } from '@/types';

type Props = {
  items?: MainNavItem[];
  className?: string;
};

function MainNav({ items, className }: Props) {

  const memoizedItems = React.useMemo(() => {
    return items?.map((item) => (
      <Link
        key={item.href}
        className="rounded-md border-b-2 border-transparent p-3 transition-colors duration-150 ease-linear hover:bg-accent hover:text-accent-foreground hover:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-4"
        href={item.href}
      >
        {item.title}
      </Link>
    ));
  }, [items]);

  return (
    <div className={`${className} flex gap-6 md:gap-10`}>
     
      {memoizedItems?.length ? (
        <nav aria-label='navbar' role={'navigation'} className="flex items-center justify-between gap-2 text-sm md:gap-8">
          {memoizedItems}
          <ModeToggle size={18} className="xs:block" />
        </nav>
      ) : null}
    </div>
  );
}

export default memo(MainNav);
