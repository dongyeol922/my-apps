import React from 'react'
import { Header } from '../components/Header'
import {Outlet} from 'react-router';
export const Layout = () => {
  return (
    <div>
       <Header/>
       <section>
          <Outlet/>
        </section> 
    </div>
  )
}
