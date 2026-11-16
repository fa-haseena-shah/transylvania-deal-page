import SafeImage from "./SafeImage";
import styles from "./styles/deal-page.module.css";

const BENEFITS = [
  { id: "flights", match: "return flights", icon: "plane" },
  { id: "airports", match: "regional airports", icon: "airport" },
  { id: "hotel", match: "stay ", icon: "hotel" },
  { id: "protected", match: "financially protected", icon: "protected" },
];

const BENEFIT_ICONS = {
  plane: "/pinhead_plane-top-right-and-plane-bottom-left.png",
  airport: "/material-symbols_multiple-airports.png",
  hotel: "/mingcute_hotel-line.png",
  protected: "/lock.png",
};

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;|&#x27;/g, "'");
}

function parseListItems(html = "") {
  const root = { children: [], text: "" };
  const stack = [root];

  for (const match of html.matchAll(/<li\b[^>]*>|<\/li>|([^<]+)|<[^>]*>/gi)) {
    const token = match[0];
    if (/^<li\b/i.test(token)) {
      const item = { children: [], text: "" };
      stack[stack.length - 1].children.push(item);
      stack.push(item);
    } else if (/^<\/li/i.test(token)) {
      if (stack.length > 1) stack.pop();
    } else if (match[1]) {
      stack[stack.length - 1].text += match[1];
    }
  }

  return root.children.map((item) => ({
    text: decodeEntities(item.text).replace(/\s+/g, " ").trim(),
    children: item.children.map((child) =>
      decodeEntities(child.text).replace(/\s+/g, " ").trim(),
    ),
  }));
}

function getHighlightImage(image, referenceImage) {
  if (typeof image !== "string" || typeof referenceImage !== "string") {
    return null;
  }

  const origin = /^(https:\/\/[^/]+)\//i.exec(referenceImage)?.[1];
  if (!origin) return null;

  const value = image.trim();
  const relativePath = value.startsWith(`${origin}/`)
    ? value.slice(origin.length + 1)
    : value;
  const pathSegments = relativePath.split("/");

  if (
    !/^deals\/[A-Za-z0-9._/-]+$/.test(relativePath) ||
    pathSegments.some((segment) => !segment || segment === "." || segment === "..")
  ) {
    return null;
  }

  return `${origin}/${relativePath}`;
}

function BenefitIcon({ type }) {
  return (
    <SafeImage
      src={BENEFIT_ICONS[type]}
      alt=""
      fill
      sizes="3.5rem"
      className={styles.benefitIconImage}
    />
  );
}

export default function Highlights({ highlight, referenceImage }) {
  const items = parseListItems(highlight?.content);
  const findItem = (match) =>
    items.find((item) => item.text.toLowerCase().includes(match));
  const benefits = BENEFITS.map(({ id, match, icon }) => ({
    id,
    icon,
    item: findItem(match),
  })).filter(({ item }) => item);
  const restaurants = findItem("nearby restaurants");
  const attractions = findItem("nearby attractions");
  const tour = findItem("complimentary tour");
  const [tourLabel, ...tourTitle] = (tour?.text || "").split(":");
  const imageSrc = getHighlightImage(highlight?.image, referenceImage);

  return (
    <section
      id="highlights"
      className={styles.highlights}
      aria-labelledby="highlights-title"
    >
      <div className={styles.banner}>
        {imageSrc && (
          <SafeImage
            src={imageSrc}
            alt={highlight?.imageAlt || ""}
            fill
            sizes="100vw"
            className={styles.bannerImage}
          />
        )}
        <div className={styles.bannerOverlay} aria-hidden="true" />
        <div className={styles.bannerTitle}>
          <p>Summarizing your</p>
          <h2 id="highlights-title">Highlights</h2>
        </div>
      </div>

      <div className={styles.highlightsContent}>
        {benefits.length > 0 && (
          <ul className={styles.benefitGrid} aria-label="Package highlights">
            {benefits.map(({ id, icon, item }) => (
              <li className={styles.benefitItem} key={id}>
                <span className={styles.benefitIcon} aria-hidden="true">
                  <BenefitIcon type={icon} />
                </span>
                <span className={styles.benefitText}>
                  {item.text.replace(/\.$/, "").replace(/⭐/g, "☆")}
                </span>
              </li>
            ))}
          </ul>
        )}

        {(restaurants || attractions) && (
          <div className={styles.nearbyGrid}>
            {[restaurants, attractions].map(
              (group) =>
                group && (
                  <section
                    className={styles.nearbyGroup}
                    key={group.text}
                    aria-label={group.text}
                  >
                    <h3>{group.text}</h3>
                    <ul>
                      {group.children.map((place) => (
                        <li key={place}>{place}</li>
                      ))}
                    </ul>
                  </section>
                ),
            )}
          </div>
        )}

        {tour && (
          <div className={styles.complimentaryTour}>
            <h3>{tourLabel}</h3>
            <p>{tourTitle.join(":").trim()}</p>
          </div>
        )}
      </div>
    </section>
  );
}