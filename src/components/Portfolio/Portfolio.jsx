import React, { Component } from 'react'
import Portimgs from '../PortImgs/Portimgs'

export default class Portfolio extends Component {
    state={
        imags:["./images/poert1 (1).png" , "./images/port2 (1).png" ,"./images/port3 (1).png" ,"./images/poert1 (1).png" , "./images/port2 (1).png" , "./images/port3 (1).png"],
    }
  render() {
    return <>
    
            <div className="container-fluid text-white portfolio-style py-5">
                <h1 className='text-center port-header fw-bolder'>PORTFOLIO COMPONENT</h1>
                <div className='liness d-flex justify-content-center'>
                <div className='line1 mt-3'></div>
                <span className='text-dark'><i className="fa-solid fa-star  fs-3 mx-2"></i></span>
                <div className='line2 mt-3'></div>             
                </div>
                
                <div className="container mt-5">
                <div className="row g-5">
                    {this.state.imags.map( (item , index)=> <Portimgs img={item} key={index} /> )}
                </div>
                </div>
            </div>
    
    </>
  }
}
