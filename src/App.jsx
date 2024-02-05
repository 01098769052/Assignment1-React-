import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Userlayout from './Userlayout/Userlayout';
export default function App() { 

let Routing = createBrowserRouter([
  {path:"*" , element:<h1 className='vh-100 serverErorr'>Server NotFound</h1>},
  {path:"/" , element:<Userlayout/>,children:[
    {path:"/home" , element:<Home/>},
    {index:true , element:<Home/>},
    {path:"/about" , element:<About/>},
    {path:"/portfolio" , element:<Portfolio/>},
    {path:"/contact" , element:<Contact/>}
  ]}
])

  return (
    <>

    <RouterProvider router={Routing}/>
      
    </>
  )
}
