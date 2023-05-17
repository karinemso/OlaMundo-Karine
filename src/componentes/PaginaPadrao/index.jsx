import Banner from 'componentes/Banner'
import React from 'react'
import Rodape from 'componentes/Rodape'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao({children}) {
  return (
    <>
    
    <main>
      <Banner/>
      <Outlet/>
      
    </main>
    
    </>
  )
}
