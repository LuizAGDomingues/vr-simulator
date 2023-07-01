"use client"

import React from 'react'
import { AccessibilityOutline, PlayCircleOutline, AlbumsOutline, SearchOutline } from 'react-ionicons'

import styles from './SideBar.module.css'

function SideBar() {
  return (
    <aside className={styles.sideMenu}>
      <PlayCircleOutline color= cssClasses={styles.sideMenuIcon}/>
      <AccessibilityOutline cssClasses={styles.sideMenuIcon}/>
      <AlbumsOutline cssClasses={styles.sideMenuIcon}/>
      <SearchOutline cssClasses={styles.sideMenuIcon}/>
    </aside>
  )
}

export default SideBar