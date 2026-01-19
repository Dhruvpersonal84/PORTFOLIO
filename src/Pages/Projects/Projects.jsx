import React from 'react'
import Cardcomponent from '../../components/cardcomponent'
import { projects } from '../../Data'


export default function Projects() {
  return (
    <section id='projects' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'>
        <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on
        </p>
      </div>

      <div className= "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 place-items-center">
        {projects.map((project)=>(
            <Cardcomponent project = {project}/>
        ))}
      </div>
        
    </section>
  )
}
