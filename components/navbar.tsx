
"use client";

import Image from "next/image";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { usePathname } from "next/navigation";

import { ThemeToggle } from "./theme-toggle";

const links = [
  { name: "Início", href: "/" },
  { name: "Sobre nós", href: "/about" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Como Funciona", href: "/how-it-work" },
  { name: "Contato", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  // Fecha o menu quando a rota muda
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Gerencia o estado da navbar durante a rolagem
  useEffect(() => {
    let frameId: number | null = null;

    const handleScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        frameId = null;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  // Fecha o menu com Escape
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeMenu]);

  return (
    <header>
      <nav
        aria-label="Navegação principal"
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-300

          ${
            scrolled
              ? `
                backdrop-blur-xl
                bg-white/75
                dark:bg-black/75
                border-b
                border-black/10
                dark:border-white/10
                shadow-lg
              `
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            h-20
            flex
            items-center
            justify-between
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            aria-label="Sonhos Carmesim, página inicial"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-red-500/20
                  blur-lg
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                "
              />

              <Image
                src="/logo.png"
                alt=""
                width={46}
                height={46}
                priority
                className="
                  relative
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </div>

            <div className="hidden sm:block">
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-red-500
                "
              >
                Editora
              </p>

              <span
                className="
                  block
                  text-lg
                  font-bold
                  tracking-widest
                  text-zinc-900
                  dark:text-zinc-100
                  transition-colors
                "
              >
                SONHOS CARMESIM
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-8
            "
          >
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className="
                    relative
                    group
                    text-sm
                    tracking-wide
                    focus-visible:outline-none
                    focus-visible:text-red-500
                  "
                >
                  <span
                    className={`
                      transition-colors
                      duration-300

                      ${
                        active
                          ? "text-red-500"
                          : "text-zinc-600 dark:text-zinc-400"
                      }

                      group-hover:text-red-500
                    `}
                  >
                    {link.name}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`
                      absolute
                      left-0
                      -bottom-1
                      h-[2px]
                      rounded-full
                      bg-red-500
                      transition-all
                      duration-300

                      ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* DESKTOP ACTIONS */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-4
            "
          >
            <ThemeToggle />

            <Link
              href="/contact"
              className="
                px-5
                py-2.5
                rounded-xl
                bg-red-600
                hover:bg-red-700
                text-white
                text-sm
                font-medium
                transition-all
                hover:scale-105
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-red-500
                focus-visible:ring-offset-2
                shadow-[0_0_20px_rgba(220,38,38,0.3)]
              "
            >
              Publicar Obra
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="
              md:hidden
              p-2
              rounded-lg
              text-zinc-900
              dark:text-zinc-100
              hover:bg-black/5
              dark:hover:bg-white/5
              transition
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-red-500
            "
          >
            {open ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          id="mobile-navigation"
          aria-hidden={!open}
          inert={!open}
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-500

            ${
              open
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              backdrop-blur-xl
              bg-white/90
              dark:bg-black/90
              border-t
              border-black/10
              dark:border-white/10
              px-6
              py-6
              flex
              flex-col
              gap-5
            "
          >
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMenu}
                  className={`
                    text-base
                    transition-colors
                    focus-visible:outline-none
                    focus-visible:text-red-500

                    ${
                      active
                        ? "text-red-500"
                        : `
                          text-zinc-700
                          dark:text-zinc-200
                          hover:text-red-500
                          dark:hover:text-red-400
                        `
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}

            <div
              className="
                pt-4
                border-t
                border-black/10
                dark:border-white/10
                flex
                items-center
                justify-between
              "
            >
              <ThemeToggle />

              <Link
                href="/contact"
                onClick={closeMenu}
                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-red-600
                  text-white
                  text-sm
                  hover:bg-red-700
                  transition
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-red-500
                "
              >
                Publicar
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
