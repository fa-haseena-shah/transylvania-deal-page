import Button from "./Button";
import Divider from "./Divider";
import SafeImage from "./SafeImage";
import styles from "./styles/deal-page.module.css";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/lowcost.vibes/",
    src: "/footer-insta.png",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@lowcost.vibes",
    src: "/footer-tiktok.png",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@lowcostvibes",
    src: "/footer-youtube.png",
  },
];

function SocialIcons() {
  return (
    <ul className={styles.footerSocials}>
      {socialLinks.map(({ name, href, src }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Low Cost Vibes on ${name} (opens in a new tab)`}
          >
            <span>
              <SafeImage
                src={src}
                alt=""
                fill
                sizes="24px"
                unoptimized
                className={styles.footerSocialIcon}
              />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <section aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title"
              className={`${styles.footerHeading} ${styles.footerContactTitle}`}>
              Here for you
            </h2>
            <dl className={styles.footerContactList}>
              <div className={styles.footerContactRow}>
                <dt>Call</dt>
                <dd>
                  <a href="tel:02012345678">020 1234 5678</a>
                </dd>
              </div>
              <div className={styles.footerContactRow}>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:email@lcv.com">email@lcv.com</a>
                </dd>
              </div>
              <div className={styles.footerContactRow}>
                <dt>Visit</dt>
                <dd>London, UK</dd>
              </div>
            </dl>
          </section>

          <section
            className={styles.footerAbout}
            aria-labelledby="footer-about-title"
          >
            <h2 id="footer-about-title" className={styles.footerHeading}>
              We got you
            </h2>
            <p>
              Low Cost Vibes is also an IATA approved agent allowing the company to
              have access to all the leading international and domestic
              airlines that assures fair and uniform standards in booking
              flights for our customers. This gives our customers the complete
              customer protection system the market has to offer.
            </p>
          </section>

          <section
            className={styles.footerSocialSection}
            aria-labelledby="footer-social-title"
          >
            <h2 id="footer-social-title" className={styles.footerHeading}>
              Stay connected
            </h2>
            <SocialIcons />
            <Button className={styles.footerButton} href="#enquiry">
              Got Questions?
            </Button>
          </section>
        </div>
      </footer>
      <Divider className={styles.footerDivider} />
    </>
  );
}
