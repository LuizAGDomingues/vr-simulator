import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.app}>
      <Header/>
      <SideBar />
      <main>
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/KT1PDX31qo8" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
          
        </iframe>
      </main>
      <Footer />
    </div>
  )
}
