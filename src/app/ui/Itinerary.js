import Dropdown from "./Dropdown";
import styles from "./styles/deal-page.module.css";

export default function Itinerary({ items }) {
    return(
        <section id="itinerary" className={styles.itinerary} aria-label="Itinerary">
            <div className={styles.itineraryTitle}>
                <h2>Itinerary</h2>
            </div>
            <div>
                <Dropdown items={items} defaultOpenIndex={2} />
            </div>
        </section>
    )
}