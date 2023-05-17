import styles from './MenuLink.module.css'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


import React from 'react'

export default function ({children, para}) {
    
  return (
    <NavLink to={para} className={({ isActive }) =>
     isActive ? `${styles.link} ${styles.linkDestacado}` : `${styles.link}`}>{children}</NavLink>
    
  )
}
