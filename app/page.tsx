'use client';
import Image from "next/image";
import {useState,useEffect} from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'; // Assuming 'faHouse' exists
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'; // Assuming 'faHouse' exists
import {faBook} from '@fortawesome/free-solid-svg-icons'; // Assuming 'faHouse' exists
import { useRouter } from 'next/navigation';



export default function Home() {
    const router = useRouter();
    router.push('/DashBoard/home');


  return (
    <main className="text-white h-screen w-screen bg-gray-800 flex items-center justify-center p-[1rem] ">
    </main>
  );
}
