import { projects } from '@/Schemas'
import React from 'react'
import Image from 'next/image';
import { Box, Github, Globe, Pen, PenTool } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projectcards">
        {projects.map((project=>(
          <div className="projectcard shadow-inner">
            <div className="projectcardhead">
              <Image src={project.image} height={100} width={100} className='projectimg'/>
              <span>{project.name}</span>
            </div>
            <div className='tools'>
              {project.tools.map(tool=>
                <span className='tool shadow-md'><Box size={16}/>{tool}</span>
              )}
            </div>
            <div className="flex gap-2 pt-4">
              <Link href="a" className='bg-black btn text-white items-center justify-center p-2 rounded-lg flex w-1/2'><Github/>Visit Github</Link>
              <Link href="a" className='bg-black btn text-white items-center justify-center p-2 rounded-lg flex w-1/2 gap-1'><Globe/>Visit Website</Link>
            </div>
          </div>
        )))}
      </div>
    </section>
  )
}

export default Projects