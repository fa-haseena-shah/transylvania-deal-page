import styles from './styles/deal-page.module.css'
import Title from "./Title";

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function parseExcursions(html, defaultGroup = "Excursions") {
  if (!html) return [];
  const seen = new Set();
  const groups = new Map();

  for (const match of html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)) {
    const text = decodeEntities(match[1].replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
    if (!text || seen.has(text.toLowerCase())) continue;
    seen.add(text.toLowerCase());

    const priceMatch = text.match(/^(.*?)\s+-\s+(£[\d.,]+\s?pp)$/i);
    let title = priceMatch ? priceMatch[1] : text;
    const price = priceMatch ? priceMatch[2] : null;

    let group = defaultGroup;
    const colon = title.match(/^([^:]+):\s*(.+)$/);
    if (colon) {
      group = colon[1].trim();
      title = colon[2].trim();
    } else if (title.toLowerCase().startsWith(defaultGroup.toLowerCase() + " ")) {
      title = title.slice(defaultGroup.length).trim();
    }

    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push({ price, title });
  }
  return [...groups].map(([name, items]) => ({ name, items }));
}

export default function Excursions({ content, defaultGroup }) {
  const groups = parseExcursions(content, defaultGroup);
  if (groups.length === 0) return "No excursions listed...";

  return (
    <section id="excursions" className={styles.excursions} aria-labelledby="excursions-title">
      <div className={styles.excursionsInner}>
        <Title
          title="Excursions"
          id="excursions-title"
          className={`${styles.sectionTitle} ${styles.excursionsTitle}`}
        />
        {groups.map((group) => (
          <div className={styles.excursionGroup} key={group.name}>
            <h3 className={styles.excursionGroupTitle}>{group.name}</h3>
            <ul className={styles.excursionList}>
              {group.items.map((item) => (
                <li className={styles.excursionItem} key={item.title}>
                  <span className={styles.excursionPrice}>{item.price}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}