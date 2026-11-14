"use client";

import { useId, useState } from "react";
import styles from "./styles/deal-page.module.css";

export default function Dropdown({ items = [], defaultOpenIndex = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const id = useId();

  return (
    <div className={styles.dropdownList}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${id}-panel-${index}`;

        return (
          <section
            className={`${styles.dropdownItem} ${
              isOpen ? styles.dropdownItemOpen : ""
            }`}
            key={item.id ?? index}
          >
            <h3 className={styles.dropdownHeading}>
              <button
                type="button"
                className={styles.dropdownTrigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}>
                {item.label && (
                  <>
                    <span className={styles.dropdownLabel}>{item.label}</span>
                    {item.title && (
                      <span className={styles.dropdownSeparator} aria-hidden="true">
                        ✶
                      </span>
                    )}
                  </>
                )}
                <span className={styles.dropdownTitle}>
                  {item.title ?? item.label}
                </span>
                <span className={styles.dropdownChevron} aria-hidden="true" />
              </button>
            </h3>
            <div
              className={styles.dropdownPanel}
              id={panelId}
              hidden={!isOpen}>
              {item.contentHtml !== undefined ? (
                <div
                  className={styles.dropdownContent}
                  dangerouslySetInnerHTML={{ __html: item.contentHtml }}
                />
              ) : (
                <div className={styles.dropdownContent}>{item.content}</div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
