import styles from "./styles/deal-page.module.css";

export default function Title({ title, className = "", id }) {
  return (
    <h2 id={id} className={`${styles.sectionTitle} ${className}`.trim()}>
      {title}
    </h2>
  );
}