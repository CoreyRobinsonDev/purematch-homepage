import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return <footer className={styles.container}>
    <div>
      <Link className={styles.logo_container} href="/">
        <Image
          className={styles.logo__img}
          src="/images/Pure-Match-Logo.png"
          alt="Pure Match Logo"
          width={72}
          height={72}
        />
        <h2 className={styles.logo__name}>Pure Match</h2>
      </Link>
      <small className={styles.copyright}>&#169; 2022 Pure Match</small>
      <ul className={styles.socials_container}>
        <li>
          <Link href="https://facebook.com/" target="_blank" rel="noreferrer">
            <Image
              src="/images/Facebook.png" 
              alt="Facebook"
              width={32}
              height={32}
            />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/" target="_blank" rel="noreferrer">
            <Image
              src="/images/twitter.png" 
              alt="Twitter"
              width={32}
              height={32}
            />
          </Link>
        </li>
        <li>
          <Link href="https://instagram.com/" target="_blank" rel="noreferrer">
            <Image
              src="/images/instagram.png" 
              alt="Instagram"
              width={32}
              height={32}
            />
          </Link>
        </li>
        <li>
          <Link href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <Image
              src="/images/linkedin.png" 
              alt="LinkedIn"
              width={32}
              height={32}
            />
          </Link>
        </li>
      </ul>
    </div>

    <div>
      <h3 className={styles.section__title}>About</h3>
      <p className={styles.section__description}>Pure Match is a free networking app for like-minded 
followers of Christ to connect, date, and socialize.</p>
      <h3 className={styles.section__title}>Our Mission</h3>
      <p className={styles.section__description}>We&#8217;re on a mission to bring true followers of Christ
together in a safe, fun, and innovative new networking
app! And to transform single-hood into the exciting, 
enriching, and <strong>FUN</strong> season it was meant to be.</p>
    </div>

    <div className={styles.navigation_section}>
      <h3 className={styles.section__title}>Navigation</h3>
      <ul className={styles.navigation_list}>
        <li><Link className={styles.link_item} href="#">Home</Link></li>
        <li><Link className={styles.link_item} href="#">About</Link></li>
        <li><Link className={styles.link_item} href="#">Blog</Link></li>
        <li><Link className={styles.link_item} href="#">Contact</Link></li>
        <li><Link className={styles.link_item} href="#">Donate</Link></li>
      </ul>

    </div>

  </footer>
}

export default Footer;