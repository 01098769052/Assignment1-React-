import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return <>
            <div className="container-fluid mb-5">
                <div className="contact-content  ">
                    <h1 className='text-center fw-bolder contect-header'>CONATCT SECTION</h1>
                    <div className='liness d-flex justify-content-center'>
                <div className='line1 mt-3'></div>
                <span><i className="fa-solid fa-star  fs-3 mx-2"></i></span>
                <div className='line2 mt-3'></div>             
                </div>

        {/* <form className='w-50 p-3 mx-auto mt-5 ng-valid ng-dirty ng-touched ng-submitted'>
                    
                <label htmlFor="userName" className='position-relative d-none'>userName : </label>
                <input type="text" id='userName' placeholder='userName' className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched"/>
               
                <label htmlFor="userAge" className='position-relative d-none'>userAge : </label>
                <input type="number" id='userAge' placeholder='userAge' className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched"/>
                
                <label htmlFor="userEmail" className='position-relative d-none'>userEmail : </label>
                <input type="email" id='userEmail' placeholder='userEmail' className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched"/>
                
                <label htmlFor="userPassword" className='position-relative d-none'>userPassword : </label>
                <input type="text" id='userPassword' placeholder='userPassword' className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched"/>
               
                <button className='btn sendInfo mt-4 text-white'>Send Message</button>
       
        </form> */}
        <div>

        <div className="form-floating mb-3 w-50 mx-auto mt-4">
        <input type="text" className="form-control border inputStyle" id="floatigName" placeholder="name@example.com" />
        <label htmlFor="floatigName">userName</label>
        </div>
        

        <div className="form-floating w-50 mx-auto mt-2">
        <input type="number" className="form-control inputStyle" id="floatingAge" placeholder="Password" />
        <label htmlFor="floatingAge">userAge</label>
        </div>

        <div className="form-floating mb-3 w-50 mx-auto mt-2">
        <input type="email" className="form-control border inputStyle" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">userEmail</label>
        </div>

        <div className="form-floating w-50 mx-auto mt-2">
        <input type="password" className="form-control inputStyle" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">userPassword</label>
        </div>
        </div>

        <button className='btn sendInfo mt-3 py-3  text-white '>Send Message</button>

                </div>
            </div>
    
         
    </>
  }
}
