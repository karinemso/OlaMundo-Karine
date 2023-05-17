import React from 'react'
import styles from './Menu.module.css'

import MenuLink from '../MenuLink'
export default function Menu() {
  
  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink para ='/'>Inicio</MenuLink>
            <MenuLink para ='/sobremim'>SobreMim</MenuLink>
           

        </nav>
    </header>
  )
}
