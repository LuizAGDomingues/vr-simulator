import React from 'react'
import styles from './Header.module.css'
import { ChevronForwardOutline, ChevronBackOutline } from 'react-ionicons'
import { PanelLeft } from 'akar-icons'

function Header() {
  return (
    <header className={styles.navBar}>
      <div className={styles.actions}>
        <PanelLeft />
        <ChevronBackOutline />
        <ChevronForwardOutline />
      </div>
      <div className={styles.adressBar}></div>
      <div className={styles.actions}></div>
    </header>
  )
}

export default Header