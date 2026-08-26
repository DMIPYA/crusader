import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <span className={styles.brandText}>CRUSADER</span>
            <p className={styles.footerTagline}>
              Architectural modular streetwear
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerHeading}>Shop</h4>
              <Link href="/collection">Collection</Link>
              <Link href="/new">New Arrivals</Link>
              <Link href="/archive">Archive</Link>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.footerHeading}>Info</h4>
              <Link href="/about">About</Link>
              <Link href="/materials">Materials</Link>
              <Link href="/sizing">Sizing</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.footerHeading}>Support</h4>
              <Link href="/shipping">Shipping</Link>
              <Link href="/returns">Returns</Link>
              <Link href="/care">Care</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} CRUSADER. All rights reserved.
          </p>
          <div className={styles.footerLegal}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
