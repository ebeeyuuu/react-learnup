import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

interface ArrowButtonProps {
  href: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ href }) => {
  return (
    <Link 
      href={href} 
      className="bg-white p-2 rounded-full text-black absolute bottom-[25px] right-[25px] flex items-center justify-center shadow-lg w-[32px] hover:w-[15%] transition-all duration-500 ease-in-out"
    >
      <FaArrowRight size={15} />
    </Link>
  )
}

export default ArrowButton
