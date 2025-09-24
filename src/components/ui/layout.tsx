import { type ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen relative bg-main-layout font-family-sans">
      <main className="relative z-10 flex flex-col h-full">
        {children}
      </main>
    </div>
  );
}
