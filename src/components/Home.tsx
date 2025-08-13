import { data } from "@/helpers/info";
import Image from "next/image";
import React from "react";
import { BiCodeAlt } from "react-icons/bi"

function HomeScreen () {
  return (
    <div className="flex  pl-[128px]" id="main">
      <div className="flex items-center jusify-center">
        <div className="">
          <h2 className="text-[#FFC564] text-roboto text-[20px] text-right font-extrabold">Full-Stack Developer</h2>
          <h1 className="w-[301px] text-white text-[90px] text-right font-extrabold leading-tight">IVÁN NAVAS</h1>
          <div className="flex items-center justify-between">
            <h2 className="w-[169px] text-white text-roboto text-[16px] font-extrabold">Me gusta estar en constante aprendisaje</h2>
            <BiCodeAlt className="w-[50px] h-[50px] mr-[20px]"/>
          </div>
        </div>
      </div>
      <Image src={data.image} alt="mainImage" width={600} height={600} className="ml-[89px] border" />
    </div>
  )
}

export default HomeScreen;

