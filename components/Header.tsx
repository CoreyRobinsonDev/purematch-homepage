import Image from "next/image";
import Link from "next/link";
import { FaCoins } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

import styles from "../styles/Header.module.css";

const Header = () => {
  const [y, setY] = useState(0);
  const { scrollY } = useScroll();
  const successComponentStart = 1100;
  const successComponentEnd = 2000;

  useEffect(() => {
  return scrollY.onChange((latest) => {
    setY(latest);
  })
}, [scrollY])

  return <header className={styles.container}>
    <Link className={styles.logo_container} href="/">
      <motion.img className={styles.logo__img}
        src="/images/Pure-Match-Logo.png" alt="Pure Match Logo"
        animate={y >= successComponentStart && y < successComponentEnd ? {filter: "brightness(0) invert(1)"} : {filter: "none"}}
      />
      <motion.h1 className={styles.logo__name}
        animate={y >= successComponentStart && y < successComponentEnd ? {color: "white"} : {color: "#0089ff"}}>Pure Match</motion.h1>
    </Link>
    <nav className={styles.nav_container}>
      <ul className={styles.nav__list}>
        <li><Link className={styles.nav__item} href="/">Home</Link></li>
        <li><Link className={styles.nav__item} href="#">About</Link></li>
        <li><Link className={styles.nav__item} href="#">Blog</Link></li>
        <li><Link className={styles.nav__item} href="#">Contact</Link></li>
        <li><Link className={`${styles.nav__item} ${styles.nav__donate_link}`} href="#"><FaCoins/> Donate</Link></li>
        
      </ul>
    </nav>
      <motion.a className={`${styles.nav__item} ${styles.nav__purematch_btn}`} href="#" animate={y >= successComponentStart && y < successComponentEnd ? {color: "#0089ff", backgroundColor: "white"} : {color: "white", backgroundColor: "#0089ff"}}>Get PureMatch</motion.a>
  </header>
}

export default Header;