import Image from "next/image";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import styles from "../styles/SuccessStories.module.css";

const SuccessStories = () => {
  return <section className={styles.container}>
    <header className={styles.success_header}>
      <h3 className={styles.header__title}>SUCCESS STORIES</h3>
      <span className={styles.header__arrows}>
        <button className={styles.success__arrow}><BsArrowLeft/></button>
        <button className={styles.success__arrow}><BsArrowRight/></button>
      </span>
    </header>
    <main className={styles.story_container}>
      <div>
        <span className={styles.story__quotation_mark}>{'“'}</span>
        <p className={styles.story__description}>He started a conversation with me and our friendship grew so fast! Now we’re dating, which is wild to me because I got the app just to get to know people. I had no idea that God would bless me with such a cool boyfriend! Super thankful for this app and definitely encourage people to try it out because you never know how God could surprise you!
        </p>
        <p className={styles.story__author}><span className={styles["--em_dash"]}>——</span> Chloe and George</p>
      </div>
      <div className={styles.success_img_container}>
        <Image
          src="/images/success-img-1.png" 
          alt=""
          width={299.2}
          height={398.46}
        />
      </div>
    </main>
    <footer className={styles.page_indicator_container}>
      <span className={`${styles.story__page_indicator} ${styles["--current"]}`}></span>
      <span className={`${styles.story__page_indicator}`}></span>
      <span className={`${styles.story__page_indicator}`}></span>
    </footer>
  </section>
}

export default SuccessStories;