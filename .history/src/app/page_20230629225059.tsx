import Header from '@/components/Header'
import styles from './page.module.css'
import SideBar from '@/components/SideBar'
import Footer from '@/components/Footer'

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
