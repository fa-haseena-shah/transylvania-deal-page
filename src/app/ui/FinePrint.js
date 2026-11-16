import Dropdown from "./Dropdown";
import Title from "./Title";
import styles from "./styles/deal-page.module.css";

export default function FinePrint({ content = "" }) {
  if (!content) return null;

  const items = [
    {
      id: "fine-print",
      title: "Fineprint",
      contentHtml: content,
    },
  ];

  return (
    <section className={styles.finePrint} aria-labelledby="fine-print-title" >
      <Dropdown items={items} defaultOpenIndex={0} />
    </section>
  );
}
