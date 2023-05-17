import React from 'react'
import './Post.css';
import { Routes,Route, useParams } from 'react-router-dom';
import posts from 'json/posts.json'
import PostModelo from 'componentes/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NotFound from 'Paginas/NotFound';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';

export default function Post() {

    const parametros = useParams()
    let post = posts.find((post) =>{return post.id === Number(parametros.id)} )
    let recomenda = posts.filter((post) =>{return post.id !== Number(parametros.id)}).slice(0,4)
    if(!post){
        return <NotFound/>
    }
  return (
    <Routes>
        <Route path='*' element={<PaginaPadrao/>}> 
        <Route index element={<PostModelo
        fotoCapa={`/posts/${post.id}/capa.png`}
        titulo={post.titulo}
    >

        <div className="post-markdown-container">
            <ReactMarkdown>
           {post.texto} 
        </ReactMarkdown>
        </div>
        <div className='posts-container'>
            <h1>Outros posts que você pode gostar</h1>
            <ul className='posts'>
      {recomenda.map((post) => (
        <PostCard key={post.id} post = {post}></PostCard>
      ))}
       </ul>
        </div>
        
    </PostModelo>}>
            </Route></Route>
    </Routes>
   
    )
}
