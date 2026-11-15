"use client";

import { useEffect, useState } from "react";
import SafeImage from "./SafeImage";
import styles from "./styles/Carousel.module.css";

export default function Carousel({
  images = [],
  label,
  fallbackAlt = label,
  variant = "hotel",
  autoPlay = false,
  interval = 6000,
  prioritizeFirstImage = false,
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const currentImage = images[imageIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) setIsPlaying(false);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!autoPlay || !isPlaying || prefersReducedMotion || images.length < 2) {
      return;
    }

    const timerId = window.setInterval(() => {
      setImageIndex((index) => (index + 1) % images.length);
    }, interval);

    return () => window.clearInterval(timerId);
  }, [autoPlay, images.length, interval, isPlaying, prefersReducedMotion]);

  if (!currentImage) return null;

  const showPrevious = () => {
    setImageIndex((index) => (index - 1 + images.length) % images.length);
  };
  const showNext = () => {
    setImageIndex((index) => (index + 1) % images.length);
  };

  return (
    <div
      className={`${styles.carousel} ${styles[variant]}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      aria-live={isPlaying ? "off" : "polite"}
    >
      {variant === "hotel" && images.length > 1 && (
        <button
          type="button"
          className={`${styles.arrow} ${styles.previous}`}
          aria-label={`Previous ${label} image`}
          onClick={showPrevious}
        />
      )}

      <div className={styles.frame}>
        <SafeImage
          key={currentImage.path}
          src={currentImage.path}
          alt={currentImage.alt || fallbackAlt}
          fill
          fetchPriority={prioritizeFirstImage && imageIndex === 0 ? "high" : undefined}
          sizes={variant === "hero" ? "100vw" : "(min-width: 64rem) 50vw, 80vw"}
          className={styles.image}
        />
      </div>

      {variant === "hotel" && images.length > 1 && (
        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          aria-label={`Next ${label} image`}
          onClick={showNext}
        />
      )}

      {autoPlay && images.length > 1 && (
        <button
          type="button"
          className={styles.playPause}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          onClick={() => setIsPlaying((playing) => !playing)}
        >
          <span
            className={isPlaying ? styles.pauseIcon : styles.playIcon}
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
}
