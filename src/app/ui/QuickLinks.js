import Image from "next/image";
import styles from "./styles/deal-page.module.css";

const SECTIONS = [
  { label: "Itinerary", href: "#itinerary", icon: "/ql-itinerary.png" },
  { label: "Hotel", href: "#hotel", icon: "/ql-hotel.png" },
  { label: "Excursions", href: "#excursions", icon: "/ql-exc.png" },
  { label: "Payment", href: "#payment", icon: "/ql-pay.png" },
];

export default function QuickLinks() {
  return (
    <nav className={styles.sectionNav} aria-label="Deal sections">
      <ul className={styles.sectionNavList}>
        {SECTIONS.map(({ label, href, icon }) => (
          <li key={href} className={styles.sectionNavItem}>
            <a className={styles.sectionNavLink} href={href}>
              <Image
                src={icon}
                alt=""
                width={70}
                height={70}
                className={styles.sectionNavIcon}
              />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
