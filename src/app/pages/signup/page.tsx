"use client"

import React from 'react';
import Link from 'next/link';
import RegisterLayout from '@/app/components/RegisterLayout';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Select from 'react-select';
import { countries } from '@/data'

const SignUp = () => {
  return (
    <RegisterLayout>
      <div className="flex flex-col mx-auto justify-center items-center gap-y-7 w-full md:w-1/2 h-full p-4">
        <div className="text-4xl">
          Sign Up
        </div>
        <form className="w-[65vw] mb-[40px] flex justify-center">
          <div className="flex flex-col mx-auto gap-y-4 items-center">
            <input 
              type="text"
              placeholder="Username"
              className="input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] mt-[20px] w-full min-w-[250px] max-w-[400px] font-medium bg-black"
            />
            <div className="flex flex-row gap-x-4 w-full">
              <input 
                type="number"
                placeholder="Age"
                className="input-field px-4 py-2 border-white border-2 rounded-[10px] w-1/2 min-w-[120px] max-w-[192px] h-[45px] font-medium bg-black"
              />
              <input 
                type="number"
                placeholder="Grade"
                className="input-field px-4 py-2 border-white border-2 rounded-[10px] w-1/2 [120px] max-w-[192px] h-[45px] font-medium bg-black"
              />
            </div>
            <Select 
              placeholder="Country"
              options={countries}
              className="w-full font-medium bg-black"
              styles={{
                control: (baseStyles: any, state: any) => ({
                  ...baseStyles,
                  borderColor: "white",
                  borderWidth: "2px",
                  borderRadius: "10px",
                  height: "45px",
                  fontSize: "16px",
                  boxShadow: state.isFocused ? "white" : "none",
                  "&:hover": {
                    borderColor: "white",
                  },
                  backgroundColor: "black",
                })
              }}
            />
            <input 
              type="text"
              placeholder="Email: name@example.com"
              className="input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] w-full font-medium bg-black"
            />
            <input 
              type="password"
              placeholder="Password"
              className="input-field px-4 py-2 border-white border-2 rounded-[10px] h-[45px] w-full font-medium bg-black"
            />
          </div>
        </form>
        <div className="flex flex-row gap-x-4">
          <Link href="/" className="text-lg font-medium flex flex-row gap-x-3 bg-[#073926] rounded-[10px] px-4 py-2 h-[45px]">
            <div>
              Return
            </div>
            <RiArrowGoBackLine className="mt-[6px]"/>
          </Link>
          <Link href="/pages/signup" className="text-lg font-medium flex flex-row bg-[#19bd7e] text-white rounded-[10px] px-4 py-2 h-[45px]">
            <div className="mt-[1px]">
              Submit
            </div>
          </Link>
        </div>
        <Link href="/pages/signin" className="italic text-base font-normal text-center">
          Already have an account? Sign up here!
        </Link>
      </div>
    </RegisterLayout>
  );
}

export default SignUp;
