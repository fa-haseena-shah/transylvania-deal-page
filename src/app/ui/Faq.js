import Dropdown from "./Dropdown";
import Title from "./Title";
import styles from "./styles/deal-page.module.css";

const TITLE = "FAQs";

export default function Faq({ faqs = [] }) {
  const items = faqs.map(({ id, question, answer }) => ({
    id,
    title: question,
    contentHtml: answer,
  }));

  return (
    <section
      id="faq"
      className={styles.faq}
      aria-labelledby="faq-title"
    >
      <Title id="faq-title" title={TITLE}/>
      <div className={styles.faqList}>
        <Dropdown items={items} defaultOpenIndex={2} />
      </div>
    </section>
  );
}
