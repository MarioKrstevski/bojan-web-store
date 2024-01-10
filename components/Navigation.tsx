"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  data: Category[];
}
export default function Navigation({ data }: NavigationProps) {
  const pathname = usePathname();
  const routes = data.map((route) => {
    return {
      href: `/category/${route.id}`,
      label: route.name,
      active: pathname === `/category/${route.id}`,
    };
  });
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => {
        return (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "text-sm font-medium hover:text-black transition-colors",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
}
