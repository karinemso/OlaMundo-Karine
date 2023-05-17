import React from 'react'
import Banner from 'componentes/Banner'
import posts from 'json/posts.json'
import styles from './Inicial.module.css'
import PostCard from 'componentes/PostCard'
import PaginaPadrao from 'componentes/PaginaPadrao'
export default function Inicial() {
  return (
 
        <ul className={styles.posts}>
      {posts.map((post) => (
        <PostCard key={post.id} post = {post}></PostCard>
      ))}
       </ul>
   
       

   
  )
}
