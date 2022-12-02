import React from 'react'
import Header from './Header'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
function Contact() {
  return (
    <div>
      <Header />
        <h1 className='text-center shadow p-3 mb-5 bg-body rounded'> <FaMapMarkerAlt /> আমাদের সাথে যোগাযোগ করুন</h1>
        <div className='container'>
          <div className='row'>
            <div className='location '>
              <div className='col-md-4 shadow p-3 mb-5 bg-body rounded'>
                <span><FaMapMarkerAlt /><span> চকছাতারী বাঘা, রাজশাহী</span></span><br></br><br></br>
                <span aria-hidden="true"><FaPhoneAlt /><span> 01774226088</span></span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact