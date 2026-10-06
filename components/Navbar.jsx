"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import { business } from "@/lib/siteData";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/gallery", "Gallery"],
  ["/contact", "Contact Us"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="container-wide flex min-h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Sri Sainath Nursery logo"
            width={145}
            height={98}
            priority
            className="logo-float h-16 w-auto object-contain sm:h-[72px]"
          />
          <span className="sr-only">{business.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive(href)
                  ? "bg-sage text-forest"
                  : "text-gray-700 hover:bg-sage hover:text-forest"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${business.phone.replace(/\s/g, "")}`}
          className="hidden items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white transition hover:bg-forestDark md:flex"
        >
          <FiPhone />
          Call Now
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 text-forest hover:bg-sage lg:hidden"
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-green-100 bg-white px-4 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 font-semibold ${
                  isActive(href)
                    ? "bg-sage text-forest"
                    : "text-gray-700 hover:bg-sage hover:text-forest"
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href={`tel:${business.phone.replace(/\s/g, "")}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-forest px-4 py-3 font-bold text-white"
            >
              <FiPhone />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
