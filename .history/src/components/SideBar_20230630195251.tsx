import React from 'react'
import { AccessibilityOutline, PlayCircleOutline, AlbumsOutline } from 'react-ionicons'

import styles from './SideBar.module.css'

function SideBar() {
  return (
    <aside className={styles.sideMenu}>
      <AccessibilityOutline />
    </aside>
  )
}

export default SideBar