import SafeImage from "./SafeImage";
import Button from "./Button";
import styles from "./styles/deal-page.module.css";

function formatGBP(value) {
  if (value === null || value === undefined || value === "") return null;
  const n = Number(value);
  if (Number.isNaN(n)) return null;
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(n);
}

function splitTitle(title) {
  const words = (title || "").trim().split(/\s+/).filter(Boolean);
  if (words.length < 2) return { lead: "", emphasis: words[0] || "" };
  return { lead: words.slice(0, -1).join(" "), emphasis: words[words.length - 1] };
}

const CTA_LABEL = "book now";
const CTA_TARGET = "#enquire"; 
const FALLBACK_ALT = "Bran Castle on a hilltop surrounded by green forest near Transylvanian Alps";

export default function Hero({ title, image, price, originalPrice, priceType }) {
  const { lead, emphasis } = splitTitle(title);

  const current = formatGBP(price);
  // show farePrice if price is less than originalPrice
  const original = Number(originalPrice) > Number(price) ? formatGBP(originalPrice) : null;
  const basis = priceType === "pp" ? "per person" : null;

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroMedia}>
        <SafeImage
          src={image?.path}
          alt={image?.alt || FALLBACK_ALT}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage} />
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={`${styles.container} ${styles.heroTitleWrap}`}>
          <h1 id="hero-title" className={styles.heroTitle}>
            {lead && <span className={styles.heroLead}>{lead}</span>}
            <span className={styles.heroEmphasis}>{emphasis}</span>
          </h1>
        </div>
      </div>

      <div className={`${styles.container} ${styles.heroCardWrap}`}>
        <div className={styles.heroCard}>
          {current && (
            <div className={styles.heroPrice}>
              {original && <p className={styles.heroPriceWas}>{original}</p>}
              <p className={styles.heroPriceAmount}>{current}</p>
              {basis && <p className={styles.heroPriceBasis}>{basis}</p>}
            </div>
          )}
          <div className={styles.heroCta}>
            <Button href={CTA_TARGET}>{CTA_LABEL}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}