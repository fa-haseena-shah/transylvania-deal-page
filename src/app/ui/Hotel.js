"use client";

import { useId, useState } from "react";
import Carousel from "./Carousel";
import Title from "./Title";
import styles from "./styles/deal-page.module.css";

const TITLE = "Hotel";
const AMENITIES_VISIBLE_COUNT = 8;

function AmenityGroup({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const listId = useId();
  const hasMore =
    (content.match(/<li\b/gi) || []).length > AMENITIES_VISIBLE_COUNT;

  return (
    <div className={styles.hotelAmenityGroup}>
      <h4 className={styles.hotelAmenityTitle}>{title}</h4>
      <div
        id={listId}
        className={`${styles.hotelAmenityList} ${
          isExpanded ? styles.hotelAmenityListExpanded : ""
        }`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {hasMore && (
        <button
          type="button"
          className={styles.hotelViewMore}
          aria-expanded={isExpanded}
          aria-controls={listId}
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          {isExpanded ? "View Less" : "View More..."}
        </button>
      )}
    </div>
  );
}

function HotelCard({ hotel }) {
  const images = hotel.images ?? [];

  return (
    <article className={styles.hotelCard}>
      {images.length > 0 && (
        <Carousel images={images} label={`${hotel.name} photos`} />
      )}

      <div className={styles.hotelNameRow}>
        <h3 className={styles.hotelName}>{hotel.name}</h3>
        <span className={styles.hotelRating}>{hotel.rating}-STAR</span>
      </div>

      <div
        className={styles.hotelDescription}
        dangerouslySetInnerHTML={{ __html: hotel.description }}
      />

      <div className={styles.hotelAmenities}>
        <AmenityGroup title="Hotel Amenities" content={hotel.amenities} />
        <AmenityGroup title="Room Amenities" content={hotel.roomAmenities} />
      </div>
    </article>
  );
}

export default function Hotel({ hotels = [] }) {
  return (
    <section id="hotel" className={styles.hotel} aria-labelledby="hotel-title">
      <div className={styles.hotelInner}>
        <Title title={TITLE} />
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id ?? hotel.name} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}
