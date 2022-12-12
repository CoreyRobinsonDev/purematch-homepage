import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import SuccessStories from '../components/SuccessStories'
import styles from '../styles/Home.module.css'

export default function Home() {
  return <>
    <Head>
      <title>Home | Pure Match</title>
    </Head>
    <Header />
    <About />
    <SuccessStories />
     
  </>
}
