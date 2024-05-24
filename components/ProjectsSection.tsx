import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './SlideUp'


const projects = [
    { 
        name: "LaraPet",
        description:
        "Larapet is a Laravel-based e-commerce web app that connects via PayPal.",
        image: "/pet-lara.png",
        github: "https://github.com/eldevon",
        link: "https://larapet.lancejohndev.co.za/",
    },
    {
        name: "LaraGroc",
        description: "LaraGroc is a Laravel-based web app that also connects via PayPal.",
        image: "/fresh-lara.png",
        github: "https://github.com/eldevon",
        link: "https://gumbootapps.com",
    },
    {
        name: "Bloxy",
        description:
            "Bloxy is a Javascript/HTML 5 and CSS project based off the popular block-based game",
            image: "/tet.png",
            github: "https://github.com/eldevon",
            link: "https://tetrisjavas.netlify.com/",
    },
]


const ProjectsSection = () => {
  return (
    <section id="projects">
        <h1 className="text-center font-bold text-4xl">
            Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className='flex flex-col space-y-28'>
            {projects.map((project, idx) => {
                return (
                <div key={idx}>
                    <SlideUp offset='-300px 0px -300px 0px'>
                    <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                        <div className='mt-8 md:w-1/2'>
                            <Link href={project.link} target="_blank">
                                <Image 
                                src={project.image} 
                                alt={''}
                                width={1000}
                                height={1000}
                                className="rounded-xl shadow-xl hover:opacity-70">

                                </Image>
                            </Link>
                            

                        </div>
                        <div className='mt-12 md:w-1/2'>
                            <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                            <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neautral-400'>{project.description}</p>
                            <div className='flex flex-row align-bottom space-x-4'>
                                <Link href={project.github} target="_blank">
                                    <BsGithub 
                                    size={30}
                                    className="hover:-translate-y-1 transition-transform cursor-pointer">
                                        
                                    </BsGithub>
                                </Link>
                                <Link href={project.link} target="_blank">
                                    <BsArrowUpRightSquare
                                    size={30}
                                    className="hover:-translate-y-1 transition-transform cursor-pointer">

                                    </BsArrowUpRightSquare>
                                </Link>
                            </div>
                        </div>    
                    </div> 
                    </SlideUp>   
                </div>
                )
            }) }
        </div>
    </section>
  )
}

export default ProjectsSection