import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.navBar}>
      <div className={styles.actions}></div>
      <div className="address"></div>
      <div className={styles.actions}></div>
    </header>
  )
}

export default Header