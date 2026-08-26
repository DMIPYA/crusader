import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Architectural
            <br />
            Modular
            <br />
            Streetwear
          </h1>
          <p className={styles.heroSubtitle}>
            Monumental silhouettes. Premium natural fabrics.
            <br />
            Restrained utility hardware.
          </p>
          <Link href="/collection" className={styles.heroCta}>
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featured}>
        <div className={styles.featuredInner}>
          <div className={styles.featuredGrid}>
            <ProductCard
              title="Modular Field Jacket"
              category="Outerwear"
              price="32,000"
            />
            <ProductCard
              title="Cargo Trousers"
              category="Bottoms"
              price="18,000"
            />
            <ProductCard
              title="Utility Vest"
              category="Vests"
              price="24,000"
            />
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className={styles.statement}>
        <div className={styles.statementInner}>
          <div className={styles.statementContent}>
            <h2 className={styles.statementTitle}>
              Built for the urban environment
            </h2>
            <p className={styles.statementText}>
              CRUSADER combines architectural precision with modular construction.
              Each piece is designed for adaptability — hardware that serves function,
              fabrics that age with character, silhouettes that command presence
              without shouting.
            </p>
            <Link href="/about" className={styles.statementLink}>
              Learn More →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({
  title,
  category,
  price,
}: {
  title: string;
  category: string;
  price: string;
}) {
  return (
    <Link
      href={`/product/${title.toLowerCase().replace(/\s+/g, '-')}`}
      className={styles.productCard}
    >
      <div className={styles.productImageWrapper}>
        <div className={styles.productImagePlaceholder}>
          {/* Placeholder until real images */}
          <span className={styles.productImageText}>{title}</span>
        </div>
      </div>
      <div className={styles.productInfo}>
        <span className={styles.productCategory}>{category}</span>
        <h3 className={styles.productTitle}>{title}</h3>
        <span className={styles.productPrice}>{price} ₽</span>
      </div>
    </Link>
  );
}
