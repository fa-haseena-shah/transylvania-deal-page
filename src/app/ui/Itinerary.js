import Dropdown from "./Dropdown";
import Title from "./Title";
import styles from "./styles/deal-page.module.css";

const TITLE = "Itinerary";

export default function Itinerary({ itineraries }) {
  const items = itineraries.map(({ id, day, content }) => {
    const heading = content.match(/<p>\s*<strong>(.*?)<\/strong>.*?<\/p>/i);

    if (!heading) {
      throw new Error(`Itinerary day ${day} is missing its heading.`);
    }

    return {
      id,
      label: `DAY ${day}`,
      title: heading[1].replace(/&nbsp;/g, " ").trim(),
      contentHtml: content.replace(heading[0], ""),
    };
  });

  return (
    <section id="itinerary" className={styles.itinerary} aria-label="Itinerary">
      <Title title={TITLE} />
      <div>
        <Dropdown items={items} defaultOpenIndex={2} />
      </div>
    </section>
  );
}