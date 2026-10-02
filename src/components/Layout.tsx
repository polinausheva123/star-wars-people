import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
};
