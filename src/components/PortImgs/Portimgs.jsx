import React from 'react'

export default function Portimgs({img}) {
  return <>
  
        <div className="col-md-4">
            <div className="port-info">
                <img src={img} className='w-100 rounded-3' alt="" />
                <div className="overlay rounded-3 d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-plus plus-style"></i>
                </div>
            </div>
        </div>
  
  
  </>
}
