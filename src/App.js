import React from "react";
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from "./Components/Home/Layout/Layout";
import About from './Components/Home/About'
import Portfolio from './Components/Home/portfolio/Portfolio'
import Contact from './Components/Home/Contact/Contact'
import Notfound from "./Components/Home/Notfound-page/Notfound";
import Welcome from "./Components/Home/Welcome-Page/Welcome";
let Routers = createHashRouter([
  {path : '' , element : <Layout/> , children:[
    {index: true , element: <Welcome/>},
    {path : 'About' , element : <About/>} ,
    {path : 'Portfolio' , element : <Portfolio/>},
    {path : 'Contact' , element : <Contact/>},
    {path : '*' , element : <Notfound/>},
  ] }
])

export default function App() {
  return <>
    <RouterProvider router={Routers}></RouterProvider>
  </>;
}
 