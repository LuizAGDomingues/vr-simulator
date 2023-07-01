"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import styles from './page.module.css'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/iframe.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="app" className={styles.app}>
      <Header/>
      <SideBar />
      <main className={styles.screen}>
        <div id="video"></div>
        <div id="ambient-light"></div>
      </main>
      <Footer />
    </div>
  )
}
