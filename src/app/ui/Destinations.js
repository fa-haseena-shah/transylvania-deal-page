import SafeImage from "./SafeImage";
import Title from "./Title";
import styles from "./styles/deal-page.module.css";

function getYoutubeVideoId(videoUrl) {
  const url = new URL(videoUrl);
  const videoId =
    url.searchParams.get("v") ||
    url.pathname.match(/\/(?:embed|shorts)\/([^/]+)/)?.[1] ||
    (url.hostname === "youtu.be" ? url.pathname.slice(1) : null);

  if (!videoId) {
    throw new Error(`Could not find a YouTube video ID in "${videoUrl}".`);
  }

  return videoId;
}

export default function Destinations({ dealDestination, videoUrl }) {
  const { destination, noOfNights } = dealDestination;
  const airport = destination.airport;
  const videoId = getYoutubeVideoId(videoUrl);

  return (
    <section
      id="destinations"
      className={styles.destination}
      aria-labelledby="destination-title"
    >
      <div className={styles.destinationBackdrop} aria-hidden="true">
        <SafeImage
          src={destination.image.path}
          alt=""
          fill
          sizes="100vw"
          className={styles.destinationBackgroundImage}
        />
      </div>

      <div className={styles.destinationContent}>
        <p className={styles.destinationEyebrow}>Destinations</p>
        <Title
          id="destination-title"
          title={`${destination.name}, ${destination.country}`}
          className={`${styles.sectionTitle} ${styles.destinationTitle}`}
        />

        <div className={styles.destinationFacts}>
          <p>
            <strong>Stay-Duration:</strong> {noOfNights}-nights
          </p>
          <p>
            <strong>Landing at:</strong> {airport.airportName} (
            {airport.airportCode})
          </p>
        </div>

        <div className={styles.destinationVideo}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={`${destination.name}, ${destination.country} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}