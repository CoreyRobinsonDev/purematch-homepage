import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Blog.module.css";

const Blog = () => {
  return <section className={styles.container}>
    <h2 className={styles.header}>Read our blog</h2>
    <p className={styles.info}>Join our growing community of Pure Matchers and keep posted on development updates.</p>
    <main className={styles.articles_container}>
      <article className={styles.article_link_container}>
        <Link className={styles.article_link} href="#">
          <Image
            className={styles.article__img}
            src="/images/blog-img-1.png" 
            alt=""
            width={296}
            height={184}
          />
          <span className={styles.article__tag}>DEVELOPMENT</span>
          <h3 className={styles.article__title}>Updates and Rewards for Patience!</h3>
          <small className={styles.article__footer}>
            <p className={styles.article__author}>Shaela</p>
            <span className={styles.ellipse}></span>
            <p className={styles.article__date}>Oct 29, 2021</p>
          </small>
        </Link>
      </article>
      <article className={styles.article_link_container}>
        <Link className={styles.article_link} href="#">
          <Image
            className={styles.article__img}
            src="/images/blog-img-2.png" 
            alt=""
            width={296}
            height={184}
          />
          <span className={styles.article__tag}>DEVELOPMENT</span>
          <h3 className={styles.article__title}>GOOD NEWS! (Server is up! Matches are happening!)</h3>
          <small className={styles.article__footer}>
            <p className={styles.article__author}>Pure Match Team</p>
            <span className={styles.ellipse}></span>
            <p className={styles.article__date}>Jun 6, 2021</p>
          </small>
        </Link>
      </article>
      <article className={styles.article_link_container}>
        <Link className={styles.article_link} href="#">
          <Image
            className={styles.article__img}
            src="/images/blog-img-3.png" 
            alt=""
            width={296}
            height={184}
          />
          <span className={styles.article__tag}>COMMUNITY</span>
          <h3 className={styles.article__title}>Problem-Solving & Moving Forward</h3>
          <small className={styles.article__footer}>
            <p className={styles.article__author}>Pure Match Team</p>
            <span className={styles.ellipse}></span>
            <p className={styles.article__date}>May 20, 2021</p>
          </small>
        </Link>
      </article>

    </main>
    <Link className={styles.load_btn} href="#">Load more stories</Link>
  </section>
}

export default Blog;