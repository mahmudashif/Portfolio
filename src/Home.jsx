import React from 'react'
import aboutPic from "../src/assets/about.png"

const Home = () => {
  return (
    <div className='bg-primary'>
        <div className='font-imbue text-center pt-[77px] container'>
            <p className='text-[20px] text-white pb-6'>My Intro</p>
            <h3 className='text-white text-[45px] uppercase font-bold'>Self Portrait</h3>
        </div>
        <div className='container'>
            <img src={aboutPic} alt="" />
        </div>
        
    </div>
  )
}

export default Home