import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Home() {
  return <>
      <Navbar/>
    <div className='container-flueid bg-info homeStyle'>
        <div className="content">
            <img src="./images/avataaars.svg" className='img-style' alt="" />
            <h1 className='text-white textStyle'>START FRAMEWORK</h1>
           <div className='lines d-flex'>
                <div className='line1 mt-3'></div>
                <span><i className="fa-solid fa-star text-white fs-3 mx-2"></i></span>
                <div className='line2 mt-3'></div>             
           </div>
           <p className='mt-3 text-white'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    </>
  
}
