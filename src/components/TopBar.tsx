'use client'
import React, { useState } from "react";
import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoWhatsapp, BiMenu } from "react-icons/bi";

function TopBar () {
  const [menuState, setMenuState] = useState<boolean>(false);
  return (
    <div className="w-full h-[103px] bg-[#FF5943] flex px-[32px] lg:px-[100px] pt-[35px] justify-end fixed">
      <div>
        <div className="flex">
          <div className="w-[194px] h-[68px] bg-white rounded-s-[16px] flex items-center justify-center">
            <h2 className="text-[20px] text-[#FF5943] text-roboto font-extrabold ">PORTAFOLIO</h2>
          </div> 
          <div 
            className="w-[68px] h-[68px] bg-white flex items-center justify-center rounded-r-[16px] lg:hidden"
          >
            <button 
              className="cursor-pointer"
              onClick={()=>setMenuState(!menuState)}
              >
              <BiMenu className="w-[50px] h-[50px] text-[#FF5943]"/>
            </button>
          </div>
        </div>
        {menuState && 
          <div className="w-[262px] h-[253px] rounded-b-[16px] bg-white mt-[-16px]">
            <a 
              href="#main" 
              className="block text-roboto text-center text-[#FF5943] text-[20px] font-extrabold pt-[17px]"
            >
              Inicio
            </a>
            <a 
              href="#about" 
              className="block text-roboto text-center text-[#FF5943] text-[20px] font-extrabold mt-[35px]"
            >
              Sobre mi
            </a>
            <a 
              href="#project" 
              className="block text-roboto text-center text-[#FF5943] text-[20px] font-extrabold mt-[35px]"
            >
              Proyectos
            </a>
            <div className="flex justify-center mt-[20px]">
              <div className="w-[40px] h-[40px] rounded-[100%] bg-[#E24531] flex items-center justify-center ml-[22px] cursor-pointer ">
                <a href="https://github.com/Ivan-Navas" target="_blank">
                  <BiLogoGithub className="w-[30px] h-[30px] text-white"/>
                </a>
              </div>
              <div className="w-[40px] h-[40px] rounded-[100%] bg-[#E24531] flex items-center justify-center ml-[22px] cursor-pointer ">
                <a href="https://www.linkedin.com/in/ivan-navas-0990021a6" target="_blank">
                  <BiLogoLinkedinSquare className="w-[30px] h-[30px] text-white"/>
                </a>
              </div>
              <div className="w-[40px] h-[40px] rounded-[100%] bg-[#E24531] flex items-center justify-center ml-[22px] cursor-pointer ">
                <a 
                  href="https://wa.me/573136191589?text=Buenos%20días%2C%20me%20comunico%20con%20usted%20para%20solicitar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.%20Quedo%20atento(a)%20a%20su%20respuesta.%20Muchas%20gracias." 
                  target="_blank"
                >
                  <BiLogoWhatsapp className="w-[30px] h-[30px] text-white"/>
                </a>
              </div>
            </div>
          </div>
        }
      </div>
      <div className="w-full h-[68px] hidden lg:flex border border-white rounded-e-[16px] items-center justify-between">
        <div className="flex">
          <a href="#main" className="text-roboto text-white text-[20px] font-extrabold ml-[59px]">
            Inicio 
          </a>
          <a href="#about" className="text-roboto text-white text-[20px] font-extrabold ml-[59px]">
            Sobre mi 
          </a>
          <a href="#project" className="text-roboto text-white text-[20px] font-extrabold ml-[59px]">
            Proyectos 
          </a>
        </div>
        <div className="flex justify-end mr-[20px]">
          <div className="w-[40px] h-[40px] rounded-[100%] bg-[#E24531] flex items-center justify-center ml-[22px] cursor-pointer ">
            <a href="https://github.com/Ivan-Navas" target="_blank">
              <BiLogoGithub className="w-[30px] h-[30px] text-white"/>
            </a>
          </div>
          <div className="w-[40px] h-[40px] rounded-[100%] bg-[#E24531] flex items-center justify-center ml-[22px] cursor-pointer ">
            <a href="https://www.linkedin.com/in/ivan-navas-0990021a6" target="_blank">
              <BiLogoLinkedinSquare className="w-[30px] h-[30px] text-white"/>
            </a>
          </div>
          <div className="w-[40px] h-[40px] rounded-[100%] bg-[#E24531] flex items-center justify-center ml-[22px] cursor-pointer ">
            <a href="https://wa.me/573136191589?text=Buenos%20días%2C%20me%20comunico%20con%20usted%20para%20solicitar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.%20Quedo%20atento(a)%20a%20su%20respuesta.%20Muchas%20gracias." target="_blank">
              <BiLogoWhatsapp className="w-[30px] h-[30px] text-white"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar;

