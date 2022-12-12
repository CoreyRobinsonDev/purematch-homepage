import Image from "next/image";
import Link from "next/link";
import { FaCoins } from "react-icons/fa";

import styles from "../styles/Header.module.css";

const Header = () => {
  return <header className={styles.container}>
    <Link className={styles.logo_container} href="/">
      <Image
        className={styles.logo__img}
        src="/images/Pure-Match-Logo.png"
        alt="Pure Match Logo"
        width={56}
        height={56}
      />
      <h1 className={styles.logo__name}>Pure Match</h1>
    </Link>
    <nav className={styles.nav_container}>
      <ul className={styles.nav__list}>
        <li><Link className={styles.nav__item} href="/">Home</Link></li>
        <li><Link className={styles.nav__item} href="#">About</Link></li>
        <li><Link className={styles.nav__item} href="#">Blog</Link></li>
        <li><Link className={styles.nav__item} href="#">Contact</Link></li>
        <li><Link className={`${styles.nav__item} ${styles.nav__donate_link}`} href="#"><FaCoins/> Donate</Link></li>
        <li><Link className={`${styles.nav__item} ${styles.nav__purematch_btn}`} href="#">Get PureMatch</Link></li>
      </ul>
    </nav>
  </header>
}

export default Header;