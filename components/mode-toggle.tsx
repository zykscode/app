'use client';
import React, { useCallback } from 'react';
import { useTheme } from 'next-themes';
 
export const ModeToggle = React.memo(({ size = 14, className = '' }: { size?: number, className?:string }) => {
  const { resolvedTheme = 'light', setTheme } = useTheme();

  const toggleTheme = useCallback(
    () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
    [resolvedTheme, setTheme]
  );

  return (

    <button
      type="button"
      onClick={toggleTheme}
      className={`${className} flex items-center justify-center rounded-full text-[color:var(--foreground-icon)]`}
      aria-label="Toggle mode"
      
    >
      <span className="sr-only">Toggle mode</span>
      {resolvedTheme === 'dark' ? (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height={size} width={size} xmlns="http://www.w3.org/2000/svg"><path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"></path></svg>
      ) : (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height={size} width={size} xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"></path><circle cx="256" cy="256" r="80" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"></circle></svg>
      )}
    </button>
  );
});
