import React from 'react'
//import './Landing.css'
import Navbar from './Navbar'
import Footer from './Footer'


  

export default function Landing(){
  
  return (
    <div>
      <Navbar />
   
    <div className='text-white' style={{ 'backgroundImage': 'url(../../public/back5.png)' }}>
  
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 '>
          Stay on top of your goals
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>
          HRDLER
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible, and easy to use
          </p>
        
        </div>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Monitor your goals, Journal your life, Stay organized.</p>
        <button className='bg-[#3d8b40] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-60 mx-auto mt-[-3rem] bg-white' src="../../public/icon1.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Keep Track of Your Goals</h2>
              <p className='text-center text-4xl font-bold'>Keep Track of Your Goals</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Add and Create New Goals</p>
                  <p className='py-2 border-b mx-8'></p>
                  <p className='py-2 border-b mx-8'></p>
              </div>
            
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-60 mx-auto mt-[-3rem] bg-transparent' src="../../public/icon2.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Stay organized</h2>
              <p className='text-center text-4xl font-bold'>Stay organized</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Responive Calender </p>
                  <p className='py-2 border-b mx-8'></p>
                  <p className='py-2 border-b mx-8'></p>
              </div>
              <button className='bg-[grey] black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Discover More</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-60 mx-auto mt-[-3rem] bg-white' src="../../public/icon3.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Minimize your life</h2>
              <p className='text-center text-4xl font-bold'>Minimize your life</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Digital journal</p>
                  <p className='py-2 border-b mx-8'></p>
                  <p className='py-2 border-b mx-8'></p>
              </div>
      
          </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

  

/*
export default function Landing(){
    return (
    <div>
       <Navbar />
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to our E-Commerce Store!</h1>
      <p className="homepage-description">
        We offer a wide range of products at great prices. Take a look at our featured items below:
      </p>
      <div className="featured-items-container">
    
      </div>
      <button className="browse-all-button">Browse All Products</button>
    </div>
    </div>
    )
}

*/