"use client";

import { useState } from "react";
import styles from "./styles/deal-page.module.css";
import Title from "./Title";

const TITLE = "Our customers say..."

const MOCK_TESTIMONIALS = [
  "It is very beautiful, it has an extraordinary view with a load of activities to do including a festival at night!",
  "The castles and mountain scenery made this a wonderful trip. Bucharest was full of places to explore.",
  "A lovely holiday with memorable sights, welcoming people, and plenty of time to enjoy each destination.",
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentTestimonial = MOCK_TESTIMONIALS[activeIndex];

  const showPrevious = () => {
    setActiveIndex(
      (index) => (index - 1 + MOCK_TESTIMONIALS.length) % MOCK_TESTIMONIALS.length,
    );
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % MOCK_TESTIMONIALS.length);
  };

  return (
    <section className={styles.testimonials} aria-labelledby="testimonials-title">
      <div className={styles.testimonialsInner}>
        <Title title={TITLE} className={`${styles.sectionTitle} ${styles.testimonialsTitle}`}/>
        <div
          className={styles.testimonialCarousel}
          role="group"
          aria-roledescription="carousel"
          aria-label="Sample traveller testimonials"
        >
          <button
            type="button"
            className={`${styles.testimonialArrow} ${styles.testimonialPrevious}`}
            aria-label="Previous testimonial"
            onClick={showPrevious}
          />
          <blockquote
            className={styles.testimonialQuote}
            aria-live="polite"
            aria-atomic="true"
          >
            <span className={styles.testimonialQuoteMark} aria-hidden="true">
              “
            </span>
            <p key={activeIndex}>{currentTestimonial}</p>
          </blockquote>
          <button
            type="button"
            className={`${styles.testimonialArrow} ${styles.testimonialNext}`}
            aria-label="Next testimonial"
            onClick={showNext}
          />
        </div>
      </div>
    </section>
  );
}
