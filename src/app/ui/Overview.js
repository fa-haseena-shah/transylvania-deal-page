import SafeImage from "./SafeImage";
import styles from "./styles/deal-page.module.css";

const PHOTO_CAPTIONS = [
  "City",
  "Town of Sighisoara",
  "Bran Castle",
  "Unirii Square",
];

export default function Overview({ images = [] }) {
  return (
    <section id="overview" className={styles.overview} aria-label="Romania overview">
      <div className={styles.overviewStrip} role="list" aria-label="Overview photos">
        {images.slice(0, PHOTO_CAPTIONS.length).map((image, index) => (
          <figure className={styles.overviewMedia} key={image.path} role="listitem">
            <SafeImage
              src={image.path}
              alt={PHOTO_CAPTIONS[index]}
              fill
              sizes="(min-width: 48rem) 25vw, 42vw"
              className={styles.overviewImg}
            />
          </figure>
        ))}
      </div>

      <div className={styles.overviewContent}>
        <p>
          <strong>Romania</strong> is a country rich in culture, natural beauty,
          and history. Visitors are mesmerized by breathtaking mountain
          landscapes, exquisitely painted monasteries, and the old Saxon towns
          of Transylvania. But if you ask anyone, Dracula is unquestionably the
          first image they have when thinking of Romania. Visit Bran Castle, the
          site that may have provided Bram Stoker with the inspiration for his
          vampire lore, but Romania is home to much more than just Vlad the
          Impaler.
        </p>
        <p>
          Learn about Romania&apos;s vibrant and exciting art scene and the
          country&apos;s many architectural treasures.
        </p>
        <p className={styles.overviewClosing}>
          Romania is delighted to greet you.
        </p>
      </div>
    </section>
  );
}
