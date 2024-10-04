import React from 'react'
import ArrowButton from './ArrowButton'
import image3 from '@/images/3.jpg'

const Why = () => {
  return (
    <div className="w-full justify-center items-center flex max-[900px]:mt-[150px] mt-[500px]">
      <div className="grid grid-rows-2 grid-cols-3 gap-5 w-[85vw] h-[50vh] max-w-[1500px] max-[900px]:grid-cols-2 max-[700px]:grid-cols-1 max-[900px]:grid-rows-3 max-[700px]:grid-rows-6 transition-all duration-200 ease-in-out max-[700px]:h-[100vh]">
        <div 
        className="max-[900px]:text-2xl font-semibold text-4xl transition-all duration-300 ease-in-out p-10 border-[4.5px] border-[#ee4d20] rounded-[10px] flex justify-center items-center"
        style={{
          backgroundImage: `url(${image3.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}>
          Why Choose Us?
        </div>
        <div className="relative bg-gradient-to-r from-[#089660] to-[#066943] rounded-[10px] 
        max-[900px]:bg-gradient-to-b max-[900px]:from-[#09ae6f] max-[900px]:to-[#089660]
        max-[700px]:from-[#09ae6f] max-[700px]:to-[#09ae6f] 
        text-xl font-semibold items-center flex justify-center flex-col gap-y-[30px]">
          <div className="text-xl max-[900px]:text-lg w-[20vw] max-[900px]:w-[30vw] max-[700px]:text-2xl max-[700px]:w-[45vw] max-[700px]:text-center max-w-[350px]">
            Personalised Study Plans
          </div>
          <div className="text-base max-[900px]:text-xs w-[20vw] font-medium max-[900px]:w-[30vw] max-[700px]:w-[45vw] max-[700px]:text-center max-w-[350px]">
            Achieve your academic goals with personalized study plans that adapt to your progress and performance, ensuring efficient and effective learning.
          </div>
          <ArrowButton href="" />
        </div>
        <div className="relative bg-gradient-to-r from-[#066943] to-[#044a2f] rounded-[10px]
        max-[900px]:bg-gradient-to-b max-[900px]:from-[#089660] max-[900px]:to-[#066943]
        max-[700px]:from-[#09ae6f] max-[700px]:to-[#078c59]
        text-xl font-semibold items-center flex justify-center flex-col gap-y-[30px]">
          <div className="text-xl max-[900px]:text-lg w-[20vw] max-[900px]:w-[30vw] max-[700px]:text-2xl max-[700px]:w-[45vw] max-[700px]:text-center max-w-[350px]">
            Interactive Quizzes and Practice Tests
          </div>
          <div className="text-base max-[900px]:text-xs w-[20vw] font-medium max-[900px]:w-[30vw] max-[700px]:w-[45vw] max-[700px]:text-center max-w-[350px]">
            Enhance your learning experience with interactive quizzes and practice tests that provide instant feedback and adjust in difficulty to match your skill level.
          </div>
          <ArrowButton href=""/>
        </div>
        <div className="relative bg-gradient-to-r from-[#09ae6f] to-[#089660] rounded-[10px] 
        max-[900px]:bg-gradient-to-b max-[900px]:from-[#089660] max-[900px]:to-[#066943]
        max-[700px]:from-[#078c59] max-[700px]:to-[#067048]
        text-xl font-semibold items-center flex justify-center flex-col gap-y-[30px]">
          <div className="text-xl max-[900px]:text-lg w-[20vw] max-[900px]:w-[30vw] max-[700px]:text-2xl max-[700px]:w-[45vw] max-[700px]:text-center max-w-[350px]">
            Peer Collaboration Tools
          </div>
          <div className="text-base max-[900px]:text-xs w-[20vw] font-medium max-[900px]:w-[30vw] max-[700px]:w-[45vw] max-[700px]:text-center max-w-[350px]">
            Boost your study sessions by collaborating with classmates through group study sessions, shared notes, real-time chats, and collaborative whiteboards.
          </div>
          <ArrowButton href="" />
        </div>
        <div className="relative bg-gradient-to-r from-[#089660] to-[#066943] rounded-[10px] 
        max-[900px]:bg-gradient-to-b max-[900px]:from-[#066943] max-[900px]:to-[#044a2f]
        max-[700px]:from-[#067048] max-[700px]:to-[#055939]
        text-xl font-semibold items-center flex justify-center flex-col gap-y-[30px]">
          <div className="text-xl max-[900px]:text-lg w-[20vw] max-[900px]:w-[30vw] max-[700px]:text-2xl max-[700px]:w-[45vw] max-[700px]:text-center max-w-[350px]">
            Comprehensive Resource Library
          </div>
          <div className="text-base max-[900px]:text-xs w-[20vw] font-medium max-[900px]:w-[30vw] max-[700px]:w-[45vw] max-[700px]:text-center max-w-[350px]">
            Access a vast library of study materials, including textbooks, lecture notes, video tutorials, and flashcards, all curated to support your academic journey.
          </div>
          <ArrowButton href="" />
        </div>
        <div className="relative bg-gradient-to-r from-[#066943] to-[#044a2f] rounded-[10px] 
        max-[900px]:bg-gradient-to-b max-[900px]:from-[#066943] max-[900px]:to-[#044a2f]
        max-[700px]:from-[#055939] max-[700px]:to-[#04452c]
        text-xl font-semibold items-center flex justify-center flex-col gap-y-[30px]">
          <div className="text-xl max-[900px]:text-lg w-[20vw] max-[900px]:w-[30vw] max-[700px]:text-2xl max-[700px]:w-[45vw] max-[700px]:text-center max-w-[350px]">
            Virtual Tutoring and Mentorship
          </div>
          <div className="text-base max-[900px]:text-xs w-[20vw] font-medium max-[900px]:w-[30vw] max-[700px]:w-[45vw] max-[700px]:text-center max-w-[350px]">
            Get the support you need with virtual tutoring and mentorship from qualified experts, available through scheduled sessions and on-demand help.
          </div>
          <ArrowButton href="" />
        </div>
      </div>
    </div>
  )
}

export default Why