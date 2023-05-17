
import React from 'react'
import Inicial from "./Paginas/Inicial";
import SobreMim from './Paginas/SobreMim';
import Rodape from 'componentes/Rodape';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from 'componentes/Menu';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Post from 'componentes/Post';
import NotFound from 'Paginas/NotFound';


function AppRoutes() {
  return(<BrowserRouter>
  <Menu/>
    <Routes>
      <Route path='/' element={<PaginaPadrao/>}>
         <Route index={true} element={<Inicial />} />
      <Route path='sobremim' element={<SobreMim />} />
      
      </Route>
     <Route path='posts/:id/*' element={<Post />} />
      <Route path='*' element={<NotFound/>} />

    </Routes>
    <Rodape/>
  </BrowserRouter>)
  
}

export default AppRoutes;
