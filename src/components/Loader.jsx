import React from 'react'
import logo from '../media/logo.png'

export default function Loader() {
  return (
    <div className='w-full h-[100vh] bg-white flex flex-col items-center justify-center'>
        <div className='animation'>
           <img src={logo} className='h-[60px]' alt="" />
        </div>
        <h2 className='mt-5 uppercase text-[#d9490c] font-bold text-[100%]'>Anantyuga</h2>
    </div>
  )
}
