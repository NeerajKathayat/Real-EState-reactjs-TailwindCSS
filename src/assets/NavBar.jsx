import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './images/iconmenu.png'
// import icon_menu from './icon_menu.png';
const NavBar = () => {
     const [isOpen , setIsOpen] = useState(false)
   return (
      <nav className='bg-[#2B2B2B]'>
         <div className='flex justify-between items-center  px-4 py-3 xl:px-0 max-w-[1300px] mx-auto relative xl:static'>
            <div className='text-xl  md:text-2xl font-bold text-white'>
               Logo
            </div>

            <ul className='hidden xl:flex gap-20 text-lg font-medium text-light-gray'>
               <li className='font-bold text-white hover:border-b-2'><Link to="">Home</Link></li>
               <li className='hover:border-b-2'><Link to="">Services</Link></li>
               <li className='hover:border-b-2'><Link to="">Find a Team</Link></li>
               <li className='hover:border-b-2'><Link to="">About Us</Link></li>
               <li className='hover:border-b-2'><Link to="">Articles</Link></li>
               <li className='hover:border-b-2'><Link to="">Portfolio</Link></li>
               <li className='hover:border-b-2'><Link to="">Contact us</Link></li>
            </ul>
      

        {isOpen && (
                  <div className='xl:hidden bg-black/50 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0' onClick={()=>{setIsOpen(!isOpen)}} >
                     <ul className='flex gap-12 text-lg font-medium text-light-gray  absolute flex-col bg-black h-lvh right-0 top-0 w-[250px] p-[36px] pt-[60px]' onClick={(e)=>{e.stopPropagation()}}  >
                        <li className='font-bold text-white'><Link className='hover:border-b-2' to="">Home</Link></li>
                        <li><Link className='hover:border-b-2' to="">Services</Link></li>
                        <li><Link className='hover:border-b-2'  to="">Find a Team</Link></li>
                        <li><Link className='hover:border-b-2' to="">About Us</Link></li>
                        <li><Link className='hover:border-b-2' to="">Articles</Link></li>
                        <li><Link className='hover:border-b-2' to="">Portfolio</Link></li>
                        <li><Link className='hover:border-b-2' to="">Contact us</Link></li>
         
                        <div className='text-white text-5xl  absolute xl:hidden top-3 right-7 cursor-pointer' onClick={()=>{setIsOpen(!isOpen)}}  >&times;</div>
                     </ul>
                     </div>
        )}




            <div className='xl:hidden  w-[25px] cursor-pointer' onClick={()=>{setIsOpen(!isOpen)}}>
               <img src={Logo} />
            </div>

         </div>
      </nav>
   )
}

export default NavBar
