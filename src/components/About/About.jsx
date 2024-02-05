import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return  <>
        
        <div className="container-fluid about-style text-white d-flex justify-content-center
        align-items-center flex-column">


            <div className="about-content text-center">
                <h1 className='fw-bolder about-header'>ABOUT COMPONENT</h1>
                <div className='lines d-flex justify-content-center'>
                <div className='line1 mt-3'></div>
                <span className='text-dark mx-2'><i className="fa-solid fa-star text-white fs-3 "></i></span>
                <div className='line2 mt-3'></div>             
                </div>
                
            </div>


            <div className="container">
                <div className="row mt-4">
                <div className="col-md-6  ps-5">
                Freelancer is a free bootstrap theme created by Route. The <br/> download includes the complete source files including HTML,<br/> CSS, and JavaScript as well as optional SASS stylesheets for easy <br/> customization.
                </div>
                <div className="col-md-6 ps-5">
                Freelancer is a free bootstrap theme created by Route. The <br/>download includes the complete source files including HTML,<br/> CSS, and JavaScript as well as optional SASS stylesheets for easy<br/> customization.
                </div>
                </div>
            </div>
        </div>
        

      </>
    
  }
}
