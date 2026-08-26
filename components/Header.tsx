'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brandText} onClick={closeMenu}>CRUSADER</Link>
        <nav className={styles.navDesktop} aria-label="Main navigation">
          <Link href="/collection">Collection</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`}><span /><span /></span>
        </button>
      </div>
      {menuOpen && <nav className={styles.navMobile} aria-label="Mobile navigation">
        <Link href="/collection" onClick={closeMenu}>Collection</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </nav>}
    </header>
  );
}
