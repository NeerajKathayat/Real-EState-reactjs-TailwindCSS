import React from 'react'
import twitter from '../assets/images/twitter.png'
import insta from '../assets/images/insta.png'
import Google from '../assets/images/Google.png'
import linkdin from '../assets/images/linkdin.png'
const Footer = () => {
  return (
    <footer className="bg-footerBG" >

    <div className=' text-white flex flex-col gap-[40px] p-5 md:flex-row md:gap-[136px]  pt-[39px] md:pt-[83px] max-w-[1300px] mx-auto'>
        <div className='flex flex-col gap-[16px] md:max-w-[547px]'>
            <div className='text-lg font-semibold'>
                Logo
            </div>
            <p>is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.</p>

            <div className='flex gap-2 cursor-pointer'>
                <img src={twitter} alt="" />
                <img src={insta} alt="" />
                <img src={Google} alt="" />
                <img src={linkdin} alt="" />
            </div>
        </div>

        <div className='flex gap-[32px] md:gap-[77px] cursor-pointer'>
            <div className='flex flex-col gap-[33px] '>
                <h1 className='text-lg font-bold  border-b-2 border-transparent hover:border-white w-fit'>Company</h1>
                <div className='flex flex-col gap-[16px]'>
                    <p className='text-[16px] border-b-2 border-transparent hover:border-white w-fit'>About</p>
                    <p className='text-[16px] border-b-2 border-transparent hover:border-white'>How it Works</p>
                    <p className='text-[16px] border-b-2 border-transparent hover:border-white w-fit'>Term</p>
                    <p className='text-[16px] border-b-2 border-transparent hover:border-white'>Privacy Policy</p>
                </div>
            </div>

            <div className='flex flex-col gap-[33px] '>
                <h1 className='text-lg font-bold border-b-2 border-transparent hover:border-white w-fit'>More</h1>
                <div className='flex flex-col gap-[16px] '>
                    <p className='text-[16px]  border-b-2 border-transparent hover:border-white'>Documentation</p>
                    <p className='text-[16px] border-b-2 border-transparent hover:border-white w-fit'>License</p>
                </div>
            </div>

        </div>
    </div>

</footer>
  )
}

export default Footer
