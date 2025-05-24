"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Package, Code, User, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/packages", icon: Package, label: "Packages" },
  { href: "/frameworks", icon: Code, label: "Frameworks" },
  { href: "/", icon: Home, label: "Home" },
  { href: "/profile", icon: User, label: "Profile" },
  { href: "/search", icon: Search, label: "Search" },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 px-4 py-2 z-50">
      <div className="flex justify-evenly items-center max-w-md mx-auto">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href
          const isHome = href === "/"
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center p-3 rounded-2xl transition-all duration-200 relative",
                isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100",
                isHome && "scale-110",
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950/50 rounded-2xl scale-110 transition-all duration-200" />
              )}
              <Icon
                className={cn(
                  "w-6 h-6 relative z-10 transition-all duration-200",
                  isActive && "scale-110",
                  isHome && "w-7 h-7",
                )}
              />
              <span
                className={cn(
                  "text-xs mt-1 relative z-10 font-medium transition-all duration-200",
                  isActive && "font-semibold",
                )}
              >
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
