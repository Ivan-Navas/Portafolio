import React from "react";
import Image from "next/image";

interface Props {
  name: string,
  image: string,
}

function TecnologiesCard ({ name, image, }: Props) {
  return(
    <div className="flex mb-[90px]">
      <div className="w-[100px] h-100px bg-white rounded-s-[16px] flex items-center justify-center">
        <Image src={image} alt="tecnoImage" width={80} height={80} />
      </div>
      <div className="w-[200px] h-[100px] border border-white rounded-e-[16px] flex items-center justify-center">
        <h2 className="text-roboto text-white text-[30px] font-extrabold ">{name}</h2>
      </div>

    </div>
  )
}

export default TecnologiesCard;

