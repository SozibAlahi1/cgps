import React from 'react'
import Header from './Header';
import Footer from './Footer';
function about() {
  return (
    <>
    <Header />
      <h1 className='text-center shadow p-3 mb-5 bg-body rounded font'> আমাদের সম্পর্কে জানুন</h1>
        <div className='container'>
          <div className='row'>
          <div className='col-md-5'>
          <img src='play.jpeg' className='img-fluid schoolimage mb-4' alt='playground' />
            </div>
            <div className='col-md-7'>
                <h1 className='font font-weight-bold atitle'>শিক্ষার্থীদের জন্য মনোরম পরিবেশ</h1>
                <h4 className='font font-weight-bold ades'>চকছাতারী প্রাইমারী স্কুলের আছে মনোরম পরিবেশ যা প্রত্যেকে শিক্ষার্থীর পড়াশোনা উপর মনোযোগ বাড়ায়। আমাদের স্কুলে নেই কোন কোলাহল নেই কোন অপরিচ্ছন্ন যায়গা । আছে  চমৎকার প্রকৃতি যা পরিবেশের মান কে অক্ষুন্ন রাখে। অসম্ভব সুন্দর মনোরম পরিবেশের জায়গা আমাদের স্কুল ।চারিদিকে সবুজ  বাগান, সুন্দর মনোরম বাতাস যা মন ও দেহ দুটোকেই সুস্থ করতে যথেষ্ট</h4>
            </div>
          </div>
          <br></br><br></br>
          <div className='row'>
          <div className='col-md-7'>
          <h1 className='font font-weight-bold atitle'>যোগ্যতা সম্পন্ন শিক্ষকমন্ডলী</h1>
                <h4 className='font font-weight-bold ades'>চকছাতারী প্রাইমারী স্কুলের আছে যোগ্যতাসম্পন্ন শিক্ষকমন্ডলী । একটি ক্লাস পরিচালনা করার জন্য প্রয়োজন পারদর্শী শিক্ষকমন্ডলী। যা চকছাতারী প্রাইমারী স্কুলে বিদ্যমান। স্কুলের সকল শিক্ষকগন অনেক ভালো এবং বন্ধুসূলভ আচরনের মাধ্যমে শিক্ষার্থীদের ক্লাস পরিচালনা করে থাকেন।</h4>
          
            </div>
            <div className='col-md-5'>
            <img src='skillteacher.jpg' className='img-fluid schoolimage' alt='playground' />
            </div>
          </div>
          <br></br><br></br>
          <div className='row'>
          <div className='col-md-5'>
          <img src='technicalsupport.png' className='img-fluid schoolimage mb-4' alt='playground' />
            </div>
            <div className='col-md-7'>
                <h1 className='font font-weight-bold atitle'>সেরা সাপোর্ট </h1>
                <h4 className='font font-weight-bold ades'>চকছাতারী প্রাইমারী স্কুলের আছে মনোরম পরিবেশ যা প্রত্যেকে শিক্ষার্থীর পড়াশোনা উপর মনোযোগ বাড়ায়। আমাদের স্কুলে নেই কোন কোলাহল নেই কোন অপরিচ্ছন্ন যায়গা । আছে  চমৎকার প্রকৃতি যা পরিবেশের মান কে অক্ষুন্ন রাখে। অসম্ভব সুন্দর মনোরম পরিবেশের জায়গা আমাদের স্কুল ।চারিদিকে সবুজ  বাগান, সুন্দর মনোরম বাতাস যা মন ও দেহ দুটোকেই সুস্থ করতে যথেষ্ট</h4>
            </div>
          </div>
          <br></br><br></br>
        </div>
      
        <Footer />


    </>
    
  )
}

export default about