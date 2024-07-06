"use client"
import React, { useState } from 'react';
import AnimatedGridPattern from './magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import LetterPullup from './magicui/letter-pullup';
import ShimmerButton from './magicui/shimmer-button';
import Steps from './Steps';
import Types from './Types';
import About from './About';
import { VelocityScroll } from './magicui/scroll-based-velocity';
import FAQ from './FAQ';
import Modal from './Modal';
import {Anton} from "@next/font/google"
import {Margarine} from "@next/font/google"
const anto=Anton({
  subsets:['latin'],
  weight:["400"]
})
const mar=Margarine({
  subsets:['latin'],
  weight:["400"]
})
const Hero = () => {
  const [ismodalopen, setismodalopen] = useState(false)
  const openmodal=()=>{
    setismodalopen(true)
  }
  const closemodal=()=>{
    setismodalopen(false)
  }
    return <div>
       <Modal isOpen={ismodalopen} closeModal={closemodal}/>
    <section className="text-gray-600 body-font">
<div className="container mx-auto flex lg:pl-3 pt-20 lg:pt-0  md:flex-row flex-col items-center">
<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
  <h1 className={`${anto.className} title-font lg:text-7xl text-6xl mb-4 font-bold text-gray-900`}>Lets Refer And
    <br className="hidden lg:inline-block text-blue-800"/> <span className={ `${anto.className} text-blue-800`}>Earn</span> 
  </h1>
  <span className=" leading-relaxed text-2xl font-bold">                                                  
  <LetterPullup words={"Get a chance to win 15,000"} delay={0.05} /></span>
  
  <span  className="z-10 flex lg:pt-5 pt-10 items-center justify-center">
  <ShimmerButton onClick={openmodal}  className="shadow-2xl">
    <span className="whitespace-pre-wrap text-center text-xl  leading-none lg:pl-4 lg:pr-4  font-extrabold tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
       Refer Now !
    </span>
  </ShimmerButton>
</span>
 
</div>
<div className="hero-img mt-3 ">
  <img className=" object-cover h-full rounded" alt="hero" src={"/hero.jpg"}/>
</div>
</div>
</section>
<VelocityScroll
      text="Accredian Refer And Earn"
      default_velocity={5}
      className="font-display mt-9 text-center text-4xl font-bold tracking-[-0.02em] text-black md:text-7xl md:leading-[5rem]"
    />
  <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
  
  <div id='about'><About/></div>
  <div className='flex justify-center mt-10'>
  <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">How do I <span className='text-blue-500'>Refer</span></h2>
  </div>
   <div id='howitworks'> <Steps/></div>
 
  <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    <div id='start'>
      <Types/>
    </div>
  
  <div id='FAQ'>
     <FAQ/>
  </div>
  
</div>
}


export default Hero;