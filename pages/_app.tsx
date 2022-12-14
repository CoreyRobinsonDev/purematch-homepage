import { initializeApp } from "firebase/app";

import '../styles/globals.css'
import type { AppProps } from 'next/app'


const app = initializeApp({
  apiKey: "AIzaSyDGAuRvjTowH4yIIDMg5E1eBTw1T6ib0AA",
  authDomain: "purematch-61fc2.firebaseapp.com",
  projectId: "purematch-61fc2",
  storageBucket: "purematch-61fc2.appspot.com",
  messagingSenderId: "461954605790",
  appId: "1:461954605790:web:6aae5979ce50a62c33184f",
  measurementId: "G-FYLD6CCZM4"
})


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
