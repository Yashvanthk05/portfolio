import { skills } from '@/Schemas'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Skills = () => {
  return (
    <section id='skills'>
      {
        skills.map((skill)=>(
          <div className='skillcards shadow-inner'>
            <span className='skilltitle'>{skill.name}</span>
            <div className='skillcon'>
              {skill.skills.map(skill=>(
              <Link className="skillcard shadow-md" href={skill.link}>
                <Image src={skill.icon} height={80} width={80} className='skillimg'/>
                <span className='skillname'>{skill.name}</span>
              </Link>
            ))}
            </div>
            
          </div>
        ))
      }
    </section>
  )
}

export default Skills