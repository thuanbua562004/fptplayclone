'use client'
import React, { useEffect, useState } from "react";
import { indexAccess } from "../access";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function Login({isLogin ,handleOpen} : {isLogin : boolean ,handleOpen:Function}) {

  return (
    <div className={`${isLogin ? "scale-100 z-40":"scale-0 -z-30"} transition duration-500 ease-in-out fixed w-full h-full  inset-0  bg-black/90 flex items-center justify-center select-none`}>
      <div className="relative  w-[350px] sm:w-[500px] h-[388px] rounded-2xl shadow-amber-100 bg-black/100  border border-white/25 flex items-center justify-center">
        <div className="px-3">
          <h5 className=" text-white text-center text-[25px]">
            You wanna Login or Sigin !
          </h5>
          <div className="bg-white w-[300px] h-[40px] mx-auto rounded-lg outline outline-gray-500 shadow-2xl flex justify-around items-center mt-4  cursor-pointer hover:opacity-90">
            <Image
              src={indexAccess.logoGoole.src}
              width={25}
              height={25}
              alt="goole"
            ></Image>
            <span className="font-medium text-gray-700">
              Login width Google !{" "}
            </span>
          </div>
          <div className=" mt-6 cursor-pointer">
            <div className=" sm:w-full flex items-center justify-center sm:none   py-3">
            <input className="mr-2 border bg-amber-600" type="checkbox" />
            <span className="text-white mr-3  ">I has read and agree width </span>
            </div>
            <span className="text-amber-600 underline  flex items-center justify-center">
              {" "}
              FPT Play Terms of Use
            </span>
          </div>
        </div>
    <div onClick={()=>(handleOpen(false))} className="closeModal absolute top-2 right-2  bg-white hover:opacity-70 rounded-full cursor-pointer z-50">
      <FontAwesomeIcon className="w-6 h-6 text-black" icon={faClose} />
    </div>
      </div>
    </div>
  );
}
