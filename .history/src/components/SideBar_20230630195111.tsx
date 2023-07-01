import React from 'react'
import { AccessibilityOutline } from 'react-ionicons'

import styles from './SideBar.module.css'

function SideBar() {
  return (
    <aside className={styles.side-menu}>
      <AccessibilityOutline />
    </aside>
  )
}

export default SideBar