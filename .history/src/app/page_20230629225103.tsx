import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <Header/>
      <SideBar />
      <main></main>
      <Footer />
    </div>
  )
}
