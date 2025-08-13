import React from "react";
import Image from "next/image";
import { BiLogoGithub, BiLogoFigma, BiWrench, BiCheck } from "react-icons/bi";

interface Props {
  title: string,
  image: string,
  description: string,
  status: string,
  figmaUrl?: string,
  gitHubUrl?: string,
  webUrl?: string,
}

function WorksCard ({ title, image, description, status, figmaUrl, gitHubUrl,webUrl }: Props ) {
  return (
    <div className="w-[594px] h-[196px] flex mb-[54px] ">
      <div className="w-[245px] h-[195px] rounded-s-[16px] border border-white">
        <div className="flex items-center justify-between">
          <div className="w-[50px] h-[51px] flex items-center justify-center rounded-tl-[16px] rounded-br-[16px] bg-white mt-[-1px]" title={status}>
            {status === "En proceso" ?
              <>
                <BiWrench className="w-[40px] h-[40px] text-[#FF5943]" />
              </>:
              <a
                className="cursor-pointer"
                href={webUrl}
                target="_blank"
              >
                <BiCheck className="w-[40px] h-[40px] text-[#FF5943]" />
              </a>
            }
          </div>
          <div className="flex">
            {gitHubUrl &&
              <a 
                className="w-[50px] h-[50px] bg-white rounded-bl-[16px] border-r border-r-1-[#FF5943] flex items-center justify-center cursor-pointer"
                href={gitHubUrl}
                target="_blank"
              >
                <BiLogoGithub className="w-[40px] h-[40px] text-[#FF5943]" />
              </a>
            }
            {figmaUrl &&
              <a className="w-[50px] h-[50px] bg-white flex items-center justify-center cursor-pointer"
                href={figmaUrl}
                target="_blank"
              >
                <BiLogoFigma className="w-[40px] h-[40px] text-[#FF5943]" />
              </a>
            }
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={image} alt="WorkImage" width={120} height={120} className="rounded-s-[16px]" />
        </div>
      </div>
      <div className="w-[353px] h-[195px] border-y-1 border-r-1 rounded-e-[16px] px-[10px]">
        <h2 className="text-center text-[#FFC564] text-[40px] font-extrabold ">{title}</h2>
        <p className="text-roboto text-[20px] text-white font-extrabold">{description}</p>
      </div>
    </div>
  )
}

export default WorksCard;

