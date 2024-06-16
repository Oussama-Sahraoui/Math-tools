'use client';
import {useState,useEffect} from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'; 
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'; 
import {faBook} from '@fortawesome/free-solid-svg-icons'; 
import { usePathname } from 'next/navigation'
 let current=1
 let path
function render(){
path=usePathname()
   console.log(usePathname())
   if(path.includes("tools")){
    current=0
   }
   if(path.includes("home")){
    current=1
   }
   if(path.includes("lessons")){
    current=2
   }
}


 function NavBar(){
path=usePathname()
   console.log(usePathname())
   if(path.includes("tools")){
    current=0
   }
   if(path.includes("home")){
    current=1
   }
   if(path.includes("lessons")){
    current=2
   }



  
  return(
    <div className="fixed left-[0] top-[0] bg-gray-900 w-screen h-[7.5vh] flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[20%]" >
       {current==0 ?   <Link  href="/DashBoard/tools"  className=" text-white  hover:mt-[1rem] transition-all duration-300 flex items-center"><FontAwesomeIcon icon={faScrewdriverWrench} /><p className="m-[0.5rem]">Tools</p></Link>  : <Link  href="/DashBoard/tools" className=" text-gray-500  hover:mt-[1rem] transition-all duration-300 flex items-center"><FontAwesomeIcon icon={faScrewdriverWrench} /><p className="m-[0.5rem]">Tools</p></Link>} 
       {current==1 ?  <Link href="/DashBoard/home" className=" text-white hover:mt-[1rem] transition-all duration-300 flex items-center"><FontAwesomeIcon icon={faHouse} /> <p className="m-[0.5rem]">Home</p></Link>: <Link  href="/DashBoard/home" className=" text-gray-500  hover:mt-[1rem] transition-all duration-300 flex items-center"><FontAwesomeIcon icon={faHouse} /> <p className="m-[0.5rem]">Home</p></Link>} 
       {current==2 ?  <Link href="/DashBoard/lessons" className=" text-white hover:mt-[1rem] transition-all duration-300 flex items-center"><FontAwesomeIcon icon={faBook} /> <p className="m-[0.5rem]">Lessons</p></Link>: <Link  href="/DashBoard/lessons" className=" text-gray-500 hover:mt-[1rem] transition-all duration-300 flex items-center"><FontAwesomeIcon icon={faBook} /> <p className="m-[0.5rem]">Lessons</p></Link>} 
    </div>
  </div>

  )
}

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-white h-screen w-screen bg-gray-800 flex items-center justify-center">
      
        <NavBar/>
      
      {children}
    </div>
  );
}