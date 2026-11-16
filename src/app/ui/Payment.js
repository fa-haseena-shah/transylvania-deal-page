import Button from "./Button";
import Title from "./Title";
import styles from "./styles/deal-page.module.css";

const TITLE = "Payment";

function stripMarkup(value) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function parsePaymentContent(content = "") {
  const steps = Array.from(
    content.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi),
    (match) => stripMarkup(match[1]),
  );
  const paragraphs = Array.from(
    content.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi),
    (match) => stripMarkup(match[1]),
  );

  return { steps, note: paragraphs.at(-1) || "" };
}

export default function Payment({ content = "" }) {
  const { steps, note } = parsePaymentContent(content);

  if (!content) return null;

  return (
    <section
      id="payment"
      className={styles.payment}
      aria-labelledby="payment-title"
    >
      <div className={styles.paymentInner}>
        <Title title={TITLE} className={`${styles.sectionTitle} ${styles.paymentTitle}`} id="payment-title">Payment</Title>

        <ol className={styles.paymentSteps}>
          {steps.map((step, index) => (
            <li className={styles.paymentStep} key={`${index}-${step}`}>
              <span className={styles.paymentNumber} aria-hidden="true">
                {index + 1}
              </span>
              <span className={styles.paymentText}>{step}</span>
            </li>
          ))}
        </ol>

        <div className={styles.paymentContact}>
          <Button className={`${styles.btn} ${styles.paymentButton}`} href="#enquiry">Reach Out</Button>
          {note && <p className={styles.paymentNote}>{note}</p>}
        </div>
      </div>
    </section>
  );
}
