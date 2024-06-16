'use client';
import {useState,useEffect} from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'; 
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'; 
import {faBook} from '@fortawesome/free-solid-svg-icons'; 




export default function page() {
   


  return (
    <main className="text-white h-screen w-screen bg-gray-800 flex flex-col items-center justify-center p-[1rem] ">
    <div className="flex flex-col justify-center w-screen h-[80vh] items-center " >
    <p className=" w-[61vw] text-[1.25em] break-normal">
    Hello! this is a small website I made for myself and for my friend, we're both learning math
    , we're both pretty new/bad at the whole ordeal (at the time of writing this)
    and I thought of making this, to hold a bunch of useful tools for us, as well as 
    our notes on different lessons 
    , I made some of these things entirely manually, some of them I
    had to rely on a library or built in functions, so it was a lot of fun and a learning
    experience, both in terms of math and coding for me, it felt like I'm just doing just
    another leetcode problem! infact I used hashmaps for one of these, anyhow, enjoy!
    </p>
    <div className="flex flex-col justify-between h-[55vh] mt-[5vh]">
        <div className="w-[37vw] h-[25vh] flex justify-center">
    <Link  href="/DashBoard/tools" className=" lg:w-60vw md:w-80vw sm:w-90vw   p-[1rem] hover:border-gray-400 hover:mt-[1rem] transition-all duration-300 bg-gray-900 w-[35vw] h-[25vh] rounded-[2rem] border border-b-[0.5rem] border-gray-700 border-t-0 border-l-0 border-r-0">
      <span className="ml-[1rem] text-[2rem] flex items-center"><FontAwesomeIcon icon={faScrewdriverWrench} /><p className="m-[0.5rem]">Tools:</p></span>
      <p className="ml-[1rem] break-normal">Click on this card to go to tools, here, you'll find a
      a list of tools that do small basic  things, that may be a part of a greater problem
      such as finding the greatest common factor among numbers, simplifying the square root
      of a number, and some which can be a problem in of itself, and we simply use it to make
      sure of our answer, such as finding X in 3x=15
      </p>
    </Link>    
    </div>
     <div className="w-[37vw] h-[25vh] flex justify-center">
     <Link href="/DashBoard/lessons" className="p-[1rem] hover:border-gray-400 hover:mt-[1rem] transition-all duration-300 w-[35vw] bg-gray-900 h-[25vh] rounded-[2rem] border border-b-[0.5rem] border-gray-700 border-t-0 border-l-0 border-r-0">
    <span className="ml-[1rem] text-[2rem] flex items-center"><FontAwesomeIcon icon={faBook} /><p className="m-[0.5rem]">Lessons:</p></span>
      <p className="ml-[1rem] break-normal">Click on this card to go to lessons, here you'll find a bunch of different
      topics, a general break down of what a given topic or concept is, how to do it, the tools earlier integrated into
      the it if they are relevant, examples etc
      </p>
    </Link>
    </div>
    </div>
    </div>

    </main>
  );
}
