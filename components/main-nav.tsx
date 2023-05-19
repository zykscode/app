'use client'

import Link from 'next/link';
import React, { memo, useState } from 'react';
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
        className="duration-['2ms'] ease-lieaar hover:bg-accent-light hover:dark:bg-accent-dark border-colours-blue p-3 transition-colors hover:border-b-2 hover:opacity-80 md:p-4"
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
