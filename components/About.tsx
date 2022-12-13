import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

import styles from "../styles/About.module.css";


const About = () => {
  const container = useRef() as React.RefObject<HTMLDivElement>;
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref1IsInView = useInView(ref1, {root: container})
  const ref2IsInView = useInView(ref2, {root: container})
  const ref3IsInView = useInView(ref3, {root: container})

  useEffect(() => {
    if (ref1IsInView) console.log(1)
    if (ref2IsInView) console.log(2)
    if (ref3IsInView) console.log(3)

  }, [ref1IsInView, ref2IsInView, ref3IsInView])

  return <section className={styles.container}>
    <div className={styles.about__summary}>
      <h2 className={styles.summary__header}>Connect, Date, and Socialize.</h2>
      <p className={styles.summary__description}><strong>Pure Match</strong> is on a mission to bring like-minded followers of Christ together in a safe, innovative, and <strong>FREE</strong> networking app! Join us as we transform singlehood into the exciting, enriching, <strong>FUN</strong> season it was meant to be.</p>
      <Link className={styles.summary__support_btn} href="#">Support the app</Link>
      <span className={styles.summary__store_container}>
        <Link href="#">
          <Image
            src="/images/App-Store.png"
            alt="Apple app store link"
            width={166.15}
            height={48}
          /></Link>
        <Link href="#">
          <Image
            src="/images/Google-Play.png"
            alt="Google play store link"
            width={166.15}
            height={48}
          />
        </Link>
      </span>
    </div>
    <figure className={styles.hero_image_container}>
      <Image
        className={`${styles.hero_image} ${styles["--1"]}`}
        src="/images/hero-1.png" 
        alt=""
        width={515.71}
        height={569.34}
      />
      <Image
        className={`${styles.hero_image} ${styles["--2"]}`}
        src="/images/hero-2.png" 
        alt=""
        width={515.71}
        height={569.34}
      />
    </figure>
    <figure className={styles.feature_image_container}>
      <motion.img className={styles.feature_image} src="/images/Feature-Photo-1.png" alt=""
        initial={{opacity: 0}}
        animate={ref1IsInView ? {opacity: 1} : {opacity: 0}}
      />
      <motion.img className={styles.feature_image} src="/images/Feature-Photo-2.png" alt=""
        initial={{opacity: 0}}
        animate={ref2IsInView ? {opacity: 1} : {opacity: 0}}
      />
      <motion.img className={styles.feature_image} src="/images/Feature-Photo-3.png" alt=""
        initial={{opacity: 0}}
        animate={ref3IsInView ? {opacity: 1} : {opacity: 0}}
      />
      
    </figure>
    <div className={styles.feature_container} ref={container}>
      <motion.article className={styles.feature} ref={ref1}>
        <h2 className={`${styles.feature__header} ${styles["--1"]}`}>Connect as a community</h2>
        <p className={styles.feature__description}>Dating and marriage may not be the sole focus of discipleship, but we all need connection. As Christians, it’s important to have deep relationships with like-minded believers we trust and respect; our app facilities that.</p>
      </motion.article>
      <motion.article className={styles.feature} ref={ref2}>
        <h2 className={`${styles.feature__header} ${styles["--2"]}`}>Form organic relationships</h2>
        <p className={styles.feature__description}>Pure Match at its heart is a place for all disciples (single and married) to connect, network, and socialize in order to strengthen the bond of the kingdom of Heaven on earth.</p>
      </motion.article>
      <motion.article className={styles.feature} ref={ref3}>
        <h2 className={`${styles.feature__header} ${styles["--3"]}`}>Make meaningful conversations</h2>
        <p className={styles.feature__description}>Pure Match hopes to foster and grow relationships between like-minded disciples in a healthy community. Connect with Christians you have things in common with. Our environment fosters many lasting partnerships such as network connections and even marriage.</p>
      </motion.article>

    </div>
  </section>
}

export default About;