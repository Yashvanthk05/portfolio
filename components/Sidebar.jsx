"use client"
import React,{useState} from 'react'
import Image from 'next/image';
import { logos, navItems } from '@/Schemas';
import { usePathname, useRouter } from 'next/navigation';
import { AlignLeft } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
    const [extend,setExtend] = useState(true)
    const pathName = usePathname();
    const router = useRouter();
  return (
    <>
    <div className='sm:flex hidden'>
    {extend?<div className="sidebar shadow-lg">
        <span className='extend' onClick={()=>setExtend(prev=>!prev)}><AlignLeft/></span>
        <div className="content">
            <div className="profile">
            <Image src="/logo.jpg" height={2000} width={2000} className='logo'/>
            <span className='sidehead'>Yashvanth</span>
        </div>
        
        <div className="navitems">
            {navItems.map(navitem=>(
                <div className={`navitem shadow-md ${navitem.path===pathName?`active`:`inactive`}`} onClick={()=>router.push(navitem.link)}>
                    <span>{navitem.icon}</span>
                    <span>{navitem.name}</span>
                </div>
            ))}
        </div>
        </div>
        <div className="contactlogos">
            {logos.map(logo=>(
                <span className='contactlogo shadow-md'>{logo.icon}</span>
            ))}
        </div>
        
    </div>: 
    <div className='colsidebar shadow-lg'>
        <div className="extend" onClick={()=>setExtend((prev)=>!prev)}><AlignLeft/></div>
        <div className="colsidecontent">
            <div className="colsideitems">
                <div className="colsideitem">
                    <Image src="/logo.jpg" height={2000} width={2000} className='collogo'/>
                    <div className="hovercard">Profile</div>
                </div>
                
                {navItems.map(navitem=>(
            
                    <div className={`colsideitem ${navitem.path===pathName?`colact`:`colinact`}`} onClick={()=>router.push(navitem.link)}>
                        <div className="hovercard shadow-lg">
                        {navitem.name}
                    </div>{navitem.icon}
                    </div>
        
                ))}
            </div>
        </div>
        <div className="collogos">
            {logos.map(logo=>(
                <div className="colsideitem">
                    <Link href={logo.link} className=''>{logo.icon}</Link>
                    <div className="hovercard">{logo.name}</div>
                </div>
                
            ))}
        </div>
    </div>}</div>
    <div className='sm:hidden flex'>
        <div className="mobnavitems">
            {navItems.map(navitem=>(
                <div className={`mobnavitem ${navitem.path===pathName?`mobact`:`mobinact`}`} onClick={()=>router.push(navitem.link)}>
                    <span>{navitem.icon}</span>
                    <span style={{textAlign:'center'}}>{navitem.name}</span>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Sidebar