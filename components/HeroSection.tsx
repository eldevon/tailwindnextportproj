"use client"
import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll'
import { HiArrowDown } from 'react-icons/hi'

const HeroSection = () => {
  return (
    <section id='home'>HeroSection
        <div className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-28 md:flex-row md:space-x-4 md:text-left md:py-50'>
            <div className='md:w-1/2 md:mt-2'>
            <Image className='rounded-full shadow-2xl' 
            src="/headshot.png" 
            alt='' 
            width={300} 
            height={300}>

            </Image>
            </div>
                
                <div className='md:mt-2 md:w-3/5'>
                    <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0'>Hi, I am Lance!</h1>
                    <p className='text-lg mt-4 mb-8 md:text-2xl'>
                        I am a{" "}
                        <span className='font-semibold text-teal-600'>
                            Software Engineer{" "}
                        </span>
                        based in South Africa. I create software that makes
                        your projects easier and more meaningful.
                    </p>
                    <Link
                    to='projects'
                    className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    >
                    Projects
                    
                    </Link>
                </div>
            
        </div>
        <div className='flex flex-row justify-center'>
            <Link
            to='about'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            >
            <HiArrowDown size={35} className="animate-bounce"/>
            </Link>
        </div>
    </section>
  )
}

export default HeroSection