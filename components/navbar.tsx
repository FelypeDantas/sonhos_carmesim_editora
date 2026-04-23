"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Início", href: "/" },
  { name: "Sobre nós", href: "/about" },
  { name: "Exemplares de capa", href: "/portfolio" },
  { name: "Contato", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <nav
      className="
        fixed top-0 w-full z-50
        backdrop-blur-md
        border-b border-black/10 dark:border-white/10
        bg-white/70 dark:bg-black/40
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* 🌹 Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <Image
            src="/logo.png" // 👈 coloque sua logo na pasta /public
            alt="Sonhos Carmesim"
            width={42}
            height={42}
            priority
            className="
              object-contain
              drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]
              transition-transform duration-300
              group-hover:scale-105
            "
          />

          <span
            className="
              font-bold text-lg md:text-xl tracking-widest
              text-black dark:text-white
              group-hover:text-red-500
              transition-colors duration-300
            "
          >
            SONHOS CARMESIM
          </span>
        </Link>

        {/* 📖 Links Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group text-sm tracking-wide"
              >
                <span
                  className={`
                    transition-colors duration-300
                    ${
                      isActive
                        ? "text-red-500"
                        : "text-black/70 dark:text-white/70 group-hover:text-red-400"
                    }
                  `}
                >
                  {link.name}
                </span>

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[1px] bg-red-500
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* ⚙️ Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
        </div>

        {/* 🍔 Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black dark:text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all duration-500
          ${
            open
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-6 pb-6 flex flex-col gap-6">
          
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`
                  text-base tracking-wide transition-colors
                  ${
                    isActive
                      ? "text-red-500"
                      : "text-black/80 dark:text-white/80 hover:text-red-400"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}

          {/* 🌗 Theme no mobile */}
          <div className="pt-2 border-t border-black/10 dark:border-white/10">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}