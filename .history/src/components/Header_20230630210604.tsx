import React from 'react'
import styles from './Header.module.css'
import { ChevronForwardOutline, ChevronBackOutline } from 'react-ionicons'
import { PanelLeft } from 'akar-icons'

function Header() {
  return (
    <header className={styles.navBar}>
      <div className={styles.actions}>
        <PanelLeft className={styles.actionsPanel}/>
        <ChevronBackOutline cssClasses={styles.actionsIcon} />
        <ChevronForwardOutline cssClasses={styles.actionsIcon} />
      </div>
      <div className={styles.adressBar}></div>
      <div className={styles.actions}></div>
    </header>
  )
}

export default Header