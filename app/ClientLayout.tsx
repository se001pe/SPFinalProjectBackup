"use client";

import { usePathname } from "next/navigation";
import Aside from "@/layout/aside";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideAside = pathname.startsWith("/pathways/");

  return (
    <div className="flex flex-1">
      {!hideAside && <Aside />}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}