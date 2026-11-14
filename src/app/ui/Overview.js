import SafeImage from "./SafeImage";
import styles from "./styles/deal-page.module.css";

const PHOTO_CAPTIONS = [
  "City",
  "Town of Sighisoara",
  "Bran Castle",
  "Unirii Square",
];

export default function Overview({ images = [], content }) {
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

      <div className={styles.overviewContent}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}
