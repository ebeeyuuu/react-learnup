import React from 'react'
import Image from 'next/image'
import image2 from '@/images/2.jpg'
import Book from '../Icons/Book'

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh] max-[900px]:h-[500px] transition-all duration-300 ease-in-out">
      <Image 
        src={image2} 
        alt="image" 
        layout="fill" 
        objectFit="cover" 
        className="transition-all duration-300 ease-in-out -z-10"
      />
      <div className="absolute inset-0 bg-[#020202]/50 flex justify-center items-center z-20">
        <div className="flex flex-col text-white text-center space-y-10 mx-auto">
          <div className="font-bold max-[900px]:text-4xl text-7xl transition-all duration-300 ease-in-out mx-auto flex-row flex gap-x-4">
            Meet LearnUp
            <Book className="max-[900px]:h-[40px] max-[900px]:w-[40px] w-[70px] h-[70px]"/>
          </div>
          <div className="font-semibold max-[900px]:text-lg text-3xl w-[40vw] max-w-[500px] min-w-[275px] transition-all duration-300 ease-in-out mx-auto">
            The app to make studying fun, easy, and accessible. Need notes? A study buddy? Or even a new hobby? LearnUp is for you. Join now!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero