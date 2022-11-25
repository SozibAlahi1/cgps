import React from 'react'
import Header from './Header';
import { NavLink } from 'react-router-dom'
function Home()  {
  return (
      <>
        <Header />
      <div className='container about'>
        <div className='row'>
          <div className='col-md-7'>
          <div className='container mt-5'>
          <span className='heading'><h1>চকছাতারী প্রাইমারী স্কুল</h1></span>
          <p className='mt-3'>চকছাতারী প্রাইমারী স্কুলটি অনেক দিন আগে প্রায় ১৯৫২ সালের দিকে আলহাজ্ব মোঃ আব্দুর রহমান স্কুলটিকে প্রতিষ্ঠা করেন। এবং তার নিজ উদ্দেগ্যে অনেক ছেলে-মেয়ে এখানে পড়াশোনা করে চাকুরি করছেন দেশের বিভিন্ন জেলা বা শহরে। এখন চকছাতারী প্রাইমারী স্কুলের প্রধান শিক্ষক জনাব সাইফুল ইসলাম এর তত্বাবধায়নে পরিচালিত হচ্ছে স্কুলটি।</p>
      </div>
          </div>
            <div className='col-md-5'>
              <img src='school.png' className='img-fluid'/>
            </div>
            
        </div>
        <button className='btn btn-primary btn-lg'> আরো জানুন</button>
      </div>
      <br></br>
      <hr></hr>
      </>
  )
}

export default Home