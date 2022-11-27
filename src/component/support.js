import React from 'react'

function support() {
  return (
    <>
    <div className='container'>
        <div className='text-center sectiontitle'><h1>আমাদের বৈশিষ্ঠ</h1></div>
        <br></br>
        <div>
            <div className='row'>
              <div className='col-md-3 shadow p-3 mb-5 bg-body rounded'>
                  <img src='nature.png' width={120} height={120} />
                  <h3 className='title'>মনোরম পরিবেশ</h3>
                  <h4 className='description'>আমাদের আছে মনোরম পরিবেশ যা বাচ্চার মন কে উত্তফুল্ল করতে সহায়তা করে।</h4>
              </div>
              <div className='col-md-3 col-md-3 shadow p-3 mb-5 bg-body rounded'>
                  <img src='support.png' width={120} height={120} />
                  <h3 className='title'>বন্ধুসুলভ সাপোর্ট</h3>
                  <h4 className='description'>আমাদের আছে মনোরম পরিবেশ যা বাচ্চার মন কে উত্তফুল্ল করতে সহায়তা করে।</h4>
              </div>
              <div className='col-md-3 col-md-3 shadow p-3 mb-5 bg-body rounded'>
                  <img src='teacher.png' width={120} height={120} />
                  <h3 className='title'>যোগ্য শিক্ষক</h3>
                  <h4 className='description'>আমাদের আছে মনোরম পরিবেশ যা বাচ্চার মন কে উত্তফুল্ল করতে সহায়তা করে।</h4>
              </div>
              <div className='col-md-3 col-md-3 shadow p-3 mb-5 bg-body rounded'>
                  <img src='football-field.png' width={120} height={120} />
                  <h3 className='title'>খেলার মাঠ</h3>
                  <h4 className='description'>আমাদের আছে মনোরম পরিবেশ যা বাচ্চার মন কে উত্তফুল্ল করতে সহায়তা করে।</h4>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default support