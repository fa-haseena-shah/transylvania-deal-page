import styles from "./deal-page.module.css";

export default function Button({ href, onClick, type = "button", children, ...rest }) {
    // if a link tag was passed in,
    if (href) {
    return (
      <a className={styles.btn} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    // if a button tag was passed in
    <button className={styles.btn} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}