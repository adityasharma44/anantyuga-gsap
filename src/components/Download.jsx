import React from 'react'
import android from '../media/android.png'
import ios from '../media/ios.png'

export default function Download() {
  return (
    <section className='pb-[1%] mt-[8%] rounded-b'>
        <p className='text-center my-4 md:text-[1.2vw] text-[3.5vw] font-semibold sm:text-[2vw]'>Anantyuga App Coming Soon</p>
        <div className='flex justify-center gap-4'>
            <img src={android} className='w-[40%] down-hover cursor-pointer sm:w-[20%] md:w-[12%]' alt="" />
            <img src={ios} className='w-[40%] sm:w-[20%] down-hover cursor-pointer md:w-[12%]' alt="" />
        </div>
    </section>
  )
}
