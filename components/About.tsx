import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import styles from "../styles/About.module.css";


const About = () => {
  const [image, setImage] = useState("/images/hero-1.png");

  useEffect(() => {
    const interval =   setInterval(() => {
    if (image === "/images/hero-1.png") {
      setImage("/images/hero-2.png");
    } else {
      setImage("/images/hero-1.png");
    }
  }, 5000)

    return () => clearInterval(interval);
  }, [image])

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
    <Image
      src={image}
      alt=""
      width={543}
      height={613}
    />
    <Image
      src="/images/Feature-Photo-1.png"
      alt=""
      width={448}
      height={448}
    />
    <div className={styles.feature_container}>
      <h2 className={styles.feature__header}>Connect as a community</h2>
      <p className={styles.feature__description}>Dating and marriage may not be the sole focus of discipleship, but we all need connection. As Christians, it’s important to have deep relationships with like-minded believers we trust and respect; our app facilities that.</p>
    </div>
  </section>
}

export default About;