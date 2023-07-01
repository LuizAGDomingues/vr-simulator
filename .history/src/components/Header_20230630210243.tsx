import React from 'react'
import styles from './Header.module.css'
import { ChevronForwardOutline, ChevronBackOutline } from 'react-ionicons'

function Header() {
  return (
    <header className={styles.navBar}>
      <div className={styles.actions}>
        <ChevronBackOutline />
        <ChevronForwardOutline />
      </div>
      <div className={styles.adressBar}></div>
      <div className={styles.actions}></div>
    </header>
  )
}

export default Header