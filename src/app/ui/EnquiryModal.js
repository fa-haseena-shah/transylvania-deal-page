"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Title from "./Title";
import styles from "./styles/deal-page.module.css";

const TITLE = "Reach out to us!";
const ENQUIRY_HASH = "#enquiry";

function clearEnquiryHash() {
  if (window.location.hash !== ENQUIRY_HASH) return;

  window.history.replaceState(
    window.history.state,
    "",
    `${window.location.pathname}${window.location.search}`,
  );
}

function formatDealTitle(title) {
  return title
    .toLowerCase()
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase())
    .replace(/\bIn\b/g, "in");
}

export default function EnquiryModal({
  title,
  phone = "02012345678",
  email = "email@lcv.com",
}) {
  const dialogRef = useRef(null);
  const nameInputRef = useRef(null);
  const confirmationRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const displayTitle = formatDealTitle(title);

  useEffect(() => {
    if (submitted) confirmationRef.current?.focus();
  }, [submitted]);

  useEffect(() => {
    const dialog = dialogRef.current;
    let originalBodyOverflow;

    const handleClose = () => {
      if (originalBodyOverflow !== undefined) {
        document.body.style.overflow = originalBodyOverflow;
        originalBodyOverflow = undefined;
      }
      setSubmitted(false);
      clearEnquiryHash();
    };

    const syncWithHash = () => {
      if (window.location.hash === ENQUIRY_HASH) {
        if (!dialog.open) {
          originalBodyOverflow = document.body.style.overflow;
          document.body.style.overflow = "hidden";
          dialog.showModal();
          nameInputRef.current?.focus();
        }
      } else if (dialog.open) {
        dialog.close();
      }
    };

    dialog.addEventListener("close", handleClose);
    window.addEventListener("hashchange", syncWithHash);
    syncWithHash();

    return () => {
      window.removeEventListener("hashchange", syncWithHash);
      dialog.removeEventListener("close", handleClose);
      if (dialog.open) dialog.close();
      if (originalBodyOverflow !== undefined) {
        document.body.style.overflow = originalBodyOverflow;
      }
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <dialog
      ref={dialogRef}
      id="enquiry"
      className={styles.enquiryDialog}
      aria-labelledby="enquiry-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      <div className={styles.enquiryShell}>
        <header className={styles.enquiryTopbar}>
          <a href={`tel:${phone}`}>CALL US</a>
          <a href={`mailto:${email}`}>EMAIL US</a>
          <button
            type="button"
            className={styles.enquiryClose}
            aria-label="Close enquiry form"
            onClick={() => dialogRef.current?.close()}
          />
        </header>

        <div className={styles.enquiryContent}>
          <div className={styles.enquiryIntro}>
            <Title title={TITLE} id="enquiry-title" className="sectionTitle">Reach out to us!</Title>
          </div>

          {submitted ? (
            <div
              ref={confirmationRef}
              className={styles.enquiryConfirmation}
              role="status"
              aria-live="polite"
              tabIndex={-1}
            >
              <h3>
                Thanks! <i className="bi bi-emoji-smile" />
              </h3>
              <p>
                We will be in touch with you soon.
              </p>
            </div>
          ) : (
          <form className={styles.enquiryForm} onSubmit={handleSubmit}>
            <div className={styles.enquiryDealRow}>
              <label htmlFor="enquiry-deal">Inquiring about:</label>
              <div className={styles.enquirySelectWrap}>
                <select
                  id="enquiry-deal"
                  name="deal"
                  className={styles.enquiryControl}
                  defaultValue={title}
                >
                  <option value={title}>{displayTitle}</option>
                </select>
              </div>
            </div>

            <div className={styles.enquiryFieldGrid}>
              <input
                ref={nameInputRef}
                className={styles.enquiryControl}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Name"
                aria-label="Name"
                required
              />
              <input
                className={styles.enquiryControl}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                aria-label="Email"
                required
              />
              <input
                className={styles.enquiryControl}
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                pattern="(?=(?:[^0-9]*[0-9]){7,15}[^0-9]*$)\+?(?:[0-9]|\(|\s)(?:[0-9]|\(|\)|\.|\s|-)*[0-9]"
                placeholder="Phone"
                aria-label="Phone"
                title="Please enter 7–15 digits."
              />
            </div>

            <textarea
              className={`${styles.enquiryControl} ${styles.enquiryMessage}`}
              name="message"
              placeholder="Your message"
              aria-label="Your message"
            />

            <div className={styles.enquiryFormFooter}>
              <fieldset className={styles.enquiryPreferences}>
                <legend>How would you like us to contact you?</legend>
                <div className={styles.enquiryPreferenceOptions}>
                  {["Email", "Call", "Text"].map((preference) => (
                    <label key={preference}>
                      <input
                        type="radio"
                        name="contactPreference"
                        value={preference}
                        required
                      />
                      {preference}
                    </label>
                  ))}
                </div>
              </fieldset>
              <Button
                type="submit"
                className={`${styles.btn} ${styles.enquirySubmit}`}>
                Submit
              </Button>
            </div>
          </form>
          )}
        </div>
      </div>
    </dialog>
  );
}
