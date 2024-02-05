import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return <>
                <div className="container-fluid bg-danger text-white p-5 text-center footer-style">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-content">
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-content">
                                <h3>AROUND THE WEB</h3>
                                <ul className='d-flex list-unstyled'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-content">
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme</p>
                                <p>created by Route</p>
                            </div>
                        </div>
                    </div>
                            
                </div>


                <div className="copyright py-4 bg-info">
                     <p className='text-center text-white'>Copyright © Your Website 2021</p>
                 </div>
    
    
    </>
  }
}