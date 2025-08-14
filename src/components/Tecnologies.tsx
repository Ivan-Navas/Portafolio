import React from "react";
import { tecnologies } from "@/helpers/info";
import TecnologiesCard from "./TecnologiesCard";

function Tecnologies () {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 px-[100px] gap-[20px]">
      {tecnologies.map((tecno)=>{
        return(
          <div key={tecno.id}>
            <TecnologiesCard
              name={tecno.name}
              image={tecno.image}
            />
          </div>
        )
      })

      } 
    </div>
  )
}


export default Tecnologies;

