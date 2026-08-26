import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutInner}>
        {/* Hero */}
        <section className={styles.aboutHero}>
          <h1 className={styles.aboutTitle}>About CRUSADER</h1>
          <p className={styles.aboutLead}>
            An independent Russian architectural modular streetwear brand.
            We build garments that adapt to the urban environment.
          </p>
        </section>

        {/* Philosophy */}
        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>Philosophy</h2>
          <div className={styles.sectionContent}>
            <p>
              CRUSADER emerged from a simple observation: most streetwear either shouts
              for attention or disappears into generic uniformity. We took a different path.
            </p>
            <p>
              Our approach is architectural. We design modular systems—pieces that can be
              combined, adapted, and reconfigured. Hardware that serves function, not decoration.
              Silhouettes that command presence through proportion and structure, not graphics
              or logos.
            </p>
            <p>
              Every piece is built to last and age with character. We use premium natural
              fabrics—heavyweight cotton, linen, wool—combined with restrained utility hardware.
              No seasonal trends. No planned obsolescence.
            </p>
          </div>
        </section>

        {/* Audience */}
        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>Who We&rsquo;re For</h2>
          <div className={styles.sectionContent}>
            <p>
              Designers, architects, IT specialists, and creative professionals who value
              quality, restraint, and considered design. People who work with their hands
              and their minds. Who appreciate when something is built right.
            </p>
            <p>
              If you&rsquo;re tired of logos screaming from your chest, of oversized graphics
              trying too hard, of garments that fall apart after a season—this is for you.
            </p>
          </div>
        </section>

        {/* Materials */}
        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>Materials &amp; Construction</h2>
          <div className={styles.sectionContent}>
            <ul className={styles.materialsList}>
              <li>
                <strong>Heavyweight cotton canvas</strong> — 12oz minimum, garment-washed
                for immediate softness
              </li>
              <li>
                <strong>Japanese denim</strong> — selvedge, raw, and sanforized options
              </li>
              <li>
                <strong>European linen</strong> — breathable, textured, ages beautifully
              </li>
              <li>
                <strong>Merino wool</strong> — temperature-regulating, odor-resistant
              </li>
              <li>
                <strong>YKK hardware</strong> — zippers, snaps, and buckles built to last
              </li>
              <li>
                <strong>Bartacked stress points</strong> — reinforced construction throughout
              </li>
            </ul>
          </div>
        </section>

        {/* Manufacturing */}
        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>Production</h2>
          <div className={styles.sectionContent}>
            <p>
              All CRUSADER pieces are manufactured in Russia, primarily in Moscow and
              Saint Petersburg. We work with small-batch production partners who share
              our standards for quality and craft.
            </p>
            <p>
              Limited runs. No overstock. Made to order when necessary. This approach
              allows us to maintain quality control and avoid waste.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className={styles.aboutCta}>
          <h2 className={styles.ctaTitle}>Questions?</h2>
          <p className={styles.ctaText}>
            Reach out. We&rsquo;re happy to discuss materials, sizing, construction,
            or anything else.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
}
