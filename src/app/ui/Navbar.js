"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles/deal-page.module.css";

const NAV_LINKS = [
  { label: "HOME", href: "#" },
  { label: "DESTINATIONS", href: "#" },
  { label: "DEALS", href: "#" },
  { label: "CONTACT", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <header className={styles.navHeader}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.navLogo}>
          {}
          <Image
            src="/mock-logo.png"
            alt="Low Cost Vibes"
            width={180}
            height={64}
            priority
            className={styles.navLogoImg}
          />
        </Link>

        <button
          type="button"
          className={styles.navToggle}
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}>
          <span className={styles.navBars} aria-hidden="true" />
        </button>

        <nav
          id="main-menu"
          aria-label="Main"
          className={`${styles.navMenu} ${isOpen ? styles.navMenuOpen : ""}`}>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}