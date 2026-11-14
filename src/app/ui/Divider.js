import styles from "./styles/deal-page.module.css";

export default function Divider({ className = "" }) {
  return (
    <div
      className={`${styles.divider} ${className}`.trim()}
      role="separator"
      aria-orientation="horizontal"
    />
  );
}