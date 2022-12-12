import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Blog from '../components/Blog'
import Header from '../components/Header'
import SignUp from '../components/SignUp'
import SuccessStories from '../components/SuccessStories'

export default function Home() {
  return <>
    <Head>
      <title>Home | Pure Match</title>
    </Head>
    <Header />
    <About />
    <SuccessStories />
    <Blog />
    <SignUp />
  </>
}
