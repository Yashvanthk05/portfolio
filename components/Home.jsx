"use client"
import { socialprof } from '@/Schemas'
import { ArrowDownToLine, Github } from 'lucide-react'
import React,{useEffect, useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <section id="home">
        <span className='font-extrabold' style={{fontSize:26}}>Hello there!!👋</span>
        <span className='font-bold' style={{fontSize:24}}>I'm Yashvanth Karunakaran</span>
        <span className='sm' style={{fontStyle:'italic',fontSize:20}}>CS AIML Student, VIT Chennai</span>
        <div className="flex flex-col gap-8">
            <span style={{fontSize:17,paddingTop:20,textAlign:'justify'}}>I am a budding web-app developer with a strong passion for continuous learning and growth. Each day, I strive to expand my knowledge and skills, staying updated with the latest advancements in web development. My enthusiasm for technology drives me to explore new tools and techniques, ensuring that my work remains innovative and efficient.</span>
            <div className="homeconbtns" style={{fontSize:18}}>
                <button className='homeconbtn shadow-md'><ArrowDownToLine/>Download CV</button>
                <button className='homeconbtn shadow-md'><Github/>Github</button>
            </div>
        </div>
        <span className='font-extrabold' style={{fontSize:24,paddingTop:50,paddingBottom:20}}>Social Profiles</span>
        <div className='flex flex-wrap gap-4 justify-center sm:justify-start'>
          {socialprof.map(social=>(
            <div className='flex gap-4 flex-col rounded-xl  shadow-inner p-3 bg-slate-100 w-full h-40 justify-around sm:w-60'>
              <div className="flex gap-4">
                <Image src={social.image} height={social.height} width={social.width} className={`h-12 w-12 ${social.name==="Vercel"?'':'rounded-full'}`}/>
                <div className="flex flex-col">
                  <span style={{fontWeight:'bolder',fontSize:18}}>{social.name}</span>
                  <span style={{fontSize:16,color:'grey'}}>{social.desc}</span>
                </div>
              </div>
              <Link href={social.link} className="p-1 min-w-full bg-black flex items-center justify-center rounded-md text-white" >Visit Profile</Link>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Home