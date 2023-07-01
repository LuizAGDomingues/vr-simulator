import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.app}>
      <Header/>
      <SideBar />
      <main className={styles.screen}>
        <div id=""></div>
      </main>
      <Footer />
    </div>
  )
}
