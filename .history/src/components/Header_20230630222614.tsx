import React from 'react'
import styles from './Header.module.css'
import { ChevronForwardOutline, ChevronBackOutline, ShareOutline, AddOutline, CopyOutline, LockClosed, Refresh } from 'react-ionicons'
import { PanelLeft } from 'akar-icons'

function Header() {
  return (
    <header className={styles.navBar}>
      <div className={styles.actions}>
        <PanelLeft className={styles.actionsPanel}/>
        <ChevronBackOutline cssClasses={styles.actionsIcon} />
        <ChevronForwardOutline cssClasses={styles.actionsIcon} />
      </div>
      <div className={styles.adressBar}>
        <div className='text'>Aa</div>
        <div className='rocket'>
          <LockClosed />
          rocketseat.com
        </div>
        <Refresh />
      </div>
      <div className={styles.actions}>
        <ShareOutline cssClasses={styles.actionsIcon} />
        <AddOutline cssClasses={styles.actionsIcon} />
        <CopyOutline cssClasses={styles.actionsIcon} />
      </div>
    </header>
  )
}

export default Header