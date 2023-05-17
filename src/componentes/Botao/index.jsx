import styles from './Botao.module.css'

import React from 'react'

export default function Botao({children, tamanho}) {
  return (
    <button className={`${styles.botao} ${styles[tamanho]}`}>{children}</button>
  )
}
