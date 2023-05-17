import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

import React from 'react'
import Botao from 'componentes/Botao';

export default function PostCard({ post }) {
  return (
   <div className={styles.post}>
        <img src={`/posts/${post.id}/capa.png`}
        className={styles.capa}
        alt="Imagem de capa do post"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>
 <Link to={`posts/${post.id}`}>
        <Botao>Ler</Botao></Link>
    </div>
    
  )
}
