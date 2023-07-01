"use client"

import React from 'react'
import { AccessibilityOutline, PlayCircleOutline, AlbumsOutline, SearchOutline } from 'react-ionicons'

import styles from './SideBar.module.css'

function SideBar() {
  return (
    <aside className={styles.sideMenu}>
      <PlayCircleOutline cssClasses={styles.sideMenuIcon}/>
      <AccessibilityOutline />
      <AlbumsOutline />
      <SearchOutline />
    </aside>
  )
}

export default SideBar