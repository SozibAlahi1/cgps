import React from 'react'
import Header from './Header'
function about() {
  return (
    <>
    <Header />
      <h1 className='text-center shadow p-3 mb-5 bg-body rounded font'> আমাদের সম্পর্কে জানুন</h1>
        <div className='container'>
          <div className='row'>
          <div className='col-md-5'>
          <img src='play.jpeg' className='img-fluid schoolimage' alt='playground' />
            </div>
            <div className='col-md-7'>
                <h1 className='font font-weight-bold'>শিক্ষার্থীদের জন্য মনোরম পরিবেশ</h1>
            </div>
          </div>
        
        
        </div>
      



    </>
    
  )
}

export default about