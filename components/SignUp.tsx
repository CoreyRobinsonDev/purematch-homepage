
import styles from "../styles/SignUp.module.css";

const SignUp = () => {
  return <section className={styles.container}>
    <h2 className={styles.header}>Stay connected!</h2>
    <p className={styles.info}>Sign up for our newsletter to get the latest news and updates, as well as exclusive perks and offers!</p>
    <form className={styles.form}>
      <input className={styles.form__input} type="text" placeholder="Enter your name" required />
      <input className={styles.form__input} type="email" placeholder="Enter your email" required />
      <button className={styles.form__submit_btn} type="submit">Subscribe</button>
    </form>
    <small className={styles.small_text}>We respect your privacy.</small>
  </section>
}


export default SignUp;