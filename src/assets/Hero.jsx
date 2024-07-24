import React from 'react'
import HeroBg from '../assets/images/HeroBG.png'
import Brand1 from '../assets/images/Brand1.png'
import Brand2 from '../assets/images/Brand2.png'
import Brand3 from '../assets/images/Brand3.png'
import Brand4 from '../assets/images/Brand4.png'
import Brand5 from '../assets/images/Brand5.png'
import Service1 from '../assets/images/Service1.png'
import Service2 from '../assets/images/Service2.png'
import Service3 from '../assets/images/Service3.png'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import img1 from '../assets/images/img1.png'
import Dianne from '../assets/images/DianneRussell.png'
import arrow from '../assets/images/arrow.png'
import img2 from '../assets/images/img2.png'
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import project4 from '../assets/images/project4.png'

import bigProject1 from '../assets/images/bigProject1.png'
import bigProject2 from '../assets/images/bigProject2.png'
import bigProject3 from '../assets/images/bigProject3.png'
import bigProject4 from '../assets/images/bigProject4.png'

import big_img3_1 from '../assets/images/big-img3-1.png'
import big_img3_2 from '../assets/images/big-img3-2.png'
import big_img3_3 from '../assets/images/big-img3-3.png'
import bigHero from '../assets/images/big_hero_image.png'
const Hero = () => {
    return (
        <>
            <section className='bg-heroBG'>
                <div className=' flex flex-col md:flex-row md:items-end max-w-[1300px] mx-auto'>

                    <div className='flex flex-col gap-3 md:gap-[62px] px-[20px] pt-[40px] pb-[30px]'>
                        <div className='text-white text-2xl md:text-[64px] font-medium md:leading-[1.5]'>
                            We Provide <br />
                            Architectural design <br />
                            and Construction
                        </div>

                        <p className='text-light-gray text-sm md:text-lg md:leading-[2.3] font-medium max-w-[560px]'>​More than 100 building and housing projects that we have built.<br /> The building owner chose us over other contractors in Jakarta,<br /> because our work is different</p>

                        <button className='bg-heroBG2  hover:bg-hover-heroBG2 py-2 px-3 md:py-[20px] md:px-[40px] text-sm text-white font-semibold self-start'>Discover More</button>

                        <div className='hidden md:flex gap-[80px] text-white '>
                            <div className='flex flex-col gap-3'>
                                <div className='text-2xl md:text-[36px] font-bold'>300<span className='text-[#2387C0]'>+</span></div>
                                <div className='font-[600] text-[12px] md:text-[18px]'>Happy <br /> Client</div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div className='text-2xl md:text-[36px] font-bold'>900<span className='text-[#2387C0]'>+</span></div>
                                <div className='font-[600] text-[12px] md:text-[18px]'>Amazing<br />Projects</div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div className='text-2xl md:text-[36px] font-bold'>20<span className='text-[#2387C0]'>+</span></div>
                                <div className='font-[600] text-[12px] md:text-[18px]'>Awards<br />Winnings</div>
                            </div>
                        </div>

                    </div>


                    <div>
                        <div className='flex justify-end -mt-36 md:mt-0 '>
                            <picture>
                                <source media="(max-width:768px)" srcSet={HeroBg} />
                                <img src={bigHero} alt="" />
                            </picture>

                        </div>

                        <div className='hidden bg-heroBG3 text-white md:flex items-start gap-10 p-[30px]'>

                           <div className='flex flex-col gap-3 lg:flex-row lg:gap-10'>
                           <div className=' text-white flex flex-col lg:gap-1'>
                                <span className='text-lg font-medium'>General</span><br />
                                <span className='text-2xl font-semibold'>Project</span>
                            </div>

                            <div>
                                <div>
                                    <span className='text-4xl font-bold pr-2'>25</span>
                                    <span className='text-[20px] font-[500]'>Years</span>
                                </div>
                                <h1 className='text-2xl font-[600]'>Operated</h1>
                            </div>
                           </div>



                            <div className='text-[12px] max-w-[333px]'>As a trusted general project that has been operating for 25 years, our commitment is always to prioritize our client satisfaction.</div>

                        </div>

                    </div>


                </div>
            </section>

            <section className='md:hidden bg-heroBG3 text-white flex flex-col gap-4 py-[20px]'>
                <div className='px-[19px] flex justify-between'>
                    <div>
                        <div>
                            <span className='text-4xl font-bold'>25</span>
                            <span className='text-[20px] font-[500]'>Years</span>
                        </div>
                        <h1 className='text-2xl font-[600]'>Operated</h1>
                    </div>
                    <div className='text-xl font-bold text-white'>
                        Logo
                    </div>
                </div>
                <div className='text-[12px] p-5'>As a trusted general project that has been operating for 25 years, our commitment is always to prioritize our client satisfaction.</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-2xl font-bold'>300+</div>
                        <div className='font-[600] text-[12px]'>Happy <br /> Client</div>
                    </div>
                    <div>
                        <div className='text-2xl font-bold'>900+</div>
                        <div className='font-[600] text-[12px]'>Amazing<br />Projects</div>
                    </div>
                    <div>
                        <div className='text-2xl font-bold'>20+</div>
                        <div className='font-[600] text-[12px]'>Awards<br />Winnings</div>
                    </div>
                </div>
            </section>

            <section className='flex items-center gap-5 md:py-5 md:justify-between px-[19px] pt-[10px] overflow-x-auto max-w-[1300px] mx-auto'>
                <div className='min-w-[119px] md:min-w-[163px]'>
                    <img src={Brand1} alt="" />
                </div>
                <div className='min-w-[119px] md:min-w-[163px]'>
                    <img src={Brand2} alt="" />
                </div>
                <div className='min-w-[119px] md:min-w-[163px]'>
                    <img src={Brand3} alt="" />
                </div>
                <div className='min-w-[119px] md:min-w-[163px]'>
                    <img src={Brand4} alt="" />
                </div>
                <div className='min-w-[119px] md:min-w-[163px]'>
                    <img src={Brand5} alt="" />
                </div>
            </section>


            <section className='flex flex-col gap-5 mt-3 p-5 max-w-[1300px] mx-auto '>
                <div className='flex flex-col gap-5 md:flex-row md:justify-between md:items-baseline'>
                    <h1 className="text-2xl md:text-[46px] font-semibold text-center md:text-left md:w-[304px] md:leading-snug ">Our Excellent Services</h1>
                    <p className='text-sm md:text-lg md:leading-normal font-medium text-[#C4C4C4] text-center md:w-[561px]'>Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services</p>
                </div>

                <div className='flex gap-5 overflow-x-auto '>
                    <div className='flex flex-col w-[259px] md:w-[400px] flex-shrink-0 gap-2'>
                        <img className='shadow-md' src={Service1} alt="" />
                        <h1 className='text-[20px] md:text-[28px] font-semibold'>Industrial</h1>
                        <p className='text-sm md:text-lg md:leading-snug text-[#C4C4C4] font-medium'>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
                    </div>

                    <div className='flex flex-col w-[259px] md:w-[400px] flex-shrink-0 gap-2'>
                        <img className='shadow-md' src={Service2} alt="" />
                        <h1 className='text-[20px] md:text-[28px] font-semibold'>Commercial</h1>
                        <p className='text-sm md:text-lg md:leading-snug text-[#C4C4C4] font-medium'>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
                    </div>
                    <div className='flex flex-col w-[259px] md:w-[400px] flex-shrink-0 gap-2'>
                        <img className='shadow-md' src={Service3} alt="" />
                        <h1 className='text-[20px] md:text-[28px] font-semibold'>Resedential</h1>
                        <p className='text-sm md:text-lg md:leading-snug text-[#C4C4C4] font-medium'>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
                    </div>
                </div>
            </section>



            <section className='p-5 flex flex-col gap-3 max-w-[1300px] mx-auto'>
                <div className='w-[90px] h-[4px] md:h-[9px] bg-heroBG4 mt-9 mb-4' />

                <div className='flex flex-col gap-3 md:flex-row md:justify-between '>
                    <div>
                        <h1 className='text-2xl font-semibold md:text-[46px] md:leading-snug'>What Make Us</h1>
                        <h1 className='text-2xl font-semibold md:text-[46px] md:leading-snug '>Different?</h1>
                    </div>

                    <p className='text-sm md:text-lg font-medium text-[#C4C4C4] md:max-w-[561px] md:leading-10'>Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services</p>
                </div>
            </section>


            <section className='flex flex-col items-center mb-10'>
                <div className='flex flex-col md:flex-row gap-[32px]  max-w-[234px] md:max-w-[1300px] mt-[40px] text-center'>
                    <div className='flex flex-col gap-4 items-center'>
                        <img src={icon1} alt="" />
                        <h1 className='text-xl font-semibold'>Experienced</h1>
                        <p className='text-sm font-medium text-[#C4C4C4]'>Our experience of 25 years of building and making achievements in the world of development</p>
                    </div>

                    <div className='flex flex-col gap-4 items-center'>
                        <img src={icon2} alt="" />
                        <h1 className='text-xl font-semibold'>competitive price</h1>
                        <p className='text-sm font-medium text-[#C4C4C4]'>The prices we offer you are very competitive without reducing the quality of the company's work in the slightest</p>
                    </div>

                    <div className='flex flex-col gap-4 items-center'>
                        <img src={icon3} alt="" />
                        <h1 className='text-xl font-semibold'>On Time</h1>
                        <p className='text-sm font-medium text-[#C4C4C4]'>We prioritize the quality of our work and finish it on time</p>
                    </div>

                    <div className='flex flex-col gap-4 items-center'>
                        <img src={icon4} alt="" />
                        <h1 className='text-xl font-semibold'>Best Materials</h1>
                        <p className='text-sm font-medium text-[#C4C4C4]'>The material determines the building itself so we recommend that you use the best & quality materials in its class.</p>
                    </div>
                </div>
            </section>


            <section className='flex flex-col lg:flex-row lg:items-end   p-5  max-w-[1300px] mx-auto'>

                <div style={{ backgroundImage: `url(${img1})` }} className="h-[340px] w-full bg-no-repeat bg-cover flex justify-center items-end  mb-40 lg:mb-0 lg:mr-40 flex-1 lg:flex-col lg:h-[500px]">

                    <div className="bg-heroBG5 flex flex-col items-center gap-2 p-[25px] max-w-[250px] relative top-24 lg:top-0 lg:left-28">
                        <img src={Dianne} alt="" />
                        <h1 className='text-xl font-semibold text-white'>Dianne Russell</h1>
                        <p className='text-sm text-[#E5E5E5] text-center'>More than 20 years of experience in the fieldarchitecture and has
                            worked on project up to 100+</p>
                    </div>

                </div>



                <div className='p-5 flex flex-col lg:justify-center gap-3 lg:gap-9 flex-1'>

                    <div>
                        <h1 className='text-2xl font-semibold lg:text-[46px] md:leading-snug'>Meet and talk with
                        </h1>
                        <h1 className='text-2xl font-semibold lg:text-[46px] md:leading-snug'>our best architecture</h1>
                    </div>

                    <p className='text-sm  font-medium text-[#C4C4C4] mlg:text-lg'>All our teams are professional and competent in
                        their fields and will help you realize your dream
                        building with the excellent result.</p>

                    <div className='flex justify-between'>
                        <button className='text-sm lg:text-[16px] font-semibold text-white bg-[#0A72AD] hover:text-[#0A72AD] hover:bg-[white] border-[4px] border-transparent hover:border-[#0A72AD] py-1 px-3 lg:py-4 lg:px-8'>See all team</button>
                        <div className='flex items-center gap-1 pr-3'>
                            <span className='text-[16px] lg:text-[18px] font-semibold'>How it works</span>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </section>



            <section className='flex flex-col md:flex-row-reverse  items-start gap-3 p-5 max-w-[1300px] mx-auto mt-16'>
                <img className='shadow-md w-full  max-w-[570px] flex-1 border-8 border-white' src={img2} alt="" />

                <div className='flex flex-col items-start gap-3 flex-1 '>
                    <div>
                        <h1 className='text-[20px] md:text-[46px] font-semibold'>Our Story</h1>
                        <h1 className='text-[20px] font-semibold md:text-[46px] '>Who we are</h1>
                    </div>
                    <p className='text-sm md:text-lg text-[#C4C4C4] font-medium'>Established in 1992, PT. Wahana Cipta operates as a General Contracting company with a footprint that we have planted throughout Indonesia. Initially, we focused on construction in the field of residential housing development in Jakarta.
                        As the company grows, now we are present as a reliable...</p>

                    <button className='text-sm font-semibold text-white md:text-[16px] bg-[#0A72AD] hover:text-[#0A72AD] hover:bg-[white] hover:border-[4px] hover:border-[#0A72AD] py-1 px-3 md:py-4 md:px-8'>See More</button>
                </div>

            </section>


            <section className='flex flex-col gap-3 mt-9 p-5 max-w-[1300px] mx-auto'>
                <h1 className='text-2xl font-semibold'>New & Update</h1>

                <div className='flex gap-[20px] overflow-x-auto'>
                    <div className='flex flex-col w-[259px] md:w-[400px] flex-shrink-0 gap-2'>
                        <img className='shadow-md ' src={big_img3_1} alt="" />

                        <div className='flex gap-4 items-center'>
                            <div className='flex flex-col'>
                                <span className='text-[28px] font-semibold leading-none'>12</span>
                                <span className='text-sm font-semibold'>Jan</span>
                            </div>
                            <h1 className='text-[16px] font-semibold'>Elements of Content in Epoxy Paint </h1>
                        </div>

                        <p className='text-sm text-[#C4C4C4] font-medium md:text-lg'>Epoxy paint and epoxy floor
                            contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type o
                            f resin... <span className='text-[#0A72AD]'>Read more</span></p>
                    </div>



                    <div className='flex flex-col w-[259px] md:w-[400px] flex-shrink-0 gap-2'>
                        <img className='shadow-md ' src={big_img3_2} alt="" />

                        <div className='flex gap-4 items-center'>
                            <div className='flex flex-col'>
                                <span className='text-[28px] font-semibold leading-none'>12</span>
                                <span className='text-sm font-semibold'>Jan</span>
                            </div>
                            <h1 className='text-[16px] font-semibold'>Elements of Content in Epoxy Paint </h1>
                        </div>

                        <p className='text-sm text-[#C4C4C4] font-medium md:text-lg'>Epoxy paint and epoxy floor
                            contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type o
                            f resin... <span className='text-[#0A72AD]'>Read more</span></p>
                    </div>





                    <div className='flex flex-col w-[259px] flex-shrink-0 gap-2 md:w-[400px]'>
                        <img className='shadow-md ' src={big_img3_3} alt="" />

                        <div className='flex gap-4 items-center'>
                            <div className='flex flex-col'>
                                <span className='text-[28px] font-semibold leading-none'>12</span>
                                <span className='text-sm font-semibold'>Jan</span>
                            </div>
                            <h1 className='text-[16px] font-semibold'>Elements of Content in Epoxy Paint </h1>
                        </div>

                        <p className='text-sm text-[#C4C4C4] font-medium md:text-lg'>Epoxy paint and epoxy floor
                            contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type o
                            f resin... <span className='text-[#0A72AD]'>Read more</span></p>
                    </div>
                </div>


            </section>







            <section className='flex flex-col gap-[38px] md:gap-[45px] p-5 mt-[57px] max-w-[1300px] mx-auto'>
                <div className='flex flex-col md:gap-5'>
                    <h1 className='text-2xl font-semibold md:text-[46px]'>Our collection</h1>
                    <h1 className='text-2xl font-semibold md:text-[46px]'>best project</h1>
                </div>

                <div className='grid grid-cols-2 gap-[20px] md:gap-[30px]  md:grid-cols-4 max-w-[320px] md:max-w-[1200px] mx-auto'>
                    <picture>
                        <source media="(max-width:768px)" srcset={project1} />
                        <img src={bigProject1} alt="" />
                    </picture>
                    <picture>
                        <source media="(max-width:768px)" srcSet={project2} />
                        <img src={bigProject2} alt="" />
                    </picture>
                    <picture>
                        <source media="(max-width:768px)" srcSet={project3} />
                        <img src={bigProject3} alt="" />
                    </picture>
                    <picture>
                        <source media="(max-width:768px)" srcSet={project4} />
                        <img src={bigProject4} alt="" />
                    </picture>
                </div>
            </section>


           


        </>
    )
}

export default Hero
