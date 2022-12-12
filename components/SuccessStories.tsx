import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import styles from "../styles/SuccessStories.module.css";

const SuccessStories = () => {
  return <section className={styles.container}>
    <header className={styles.success_header}>
      <h3 className={styles.header__title}>SUCCESS STORIES</h3>
      <span className={styles.header__arrows}>
        <button className={styles.success__prev_btn}><BsArrowLeft/></button>
        <button className={styles.success__next_btn}><BsArrowRight/></button>
      </span>
    </header>
  </section>
}

export default SuccessStories;