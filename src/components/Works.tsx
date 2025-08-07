import { works } from "@/helpers/info";
import React from "react";
import WorksCard from "./WorksCard";

function Works () {
  return (
    <div className="px-[20px] grid grid-cols-2 gap-[20px]">
      {works.map((work)=>{
        return (
          <div key={work.id}>
            <WorksCard
              title={work.title}
              image={work.image}
              description={work.description}
              status={work.status}
              figmaUrl={work.figmaUrl}
              gitHubUrl={work.gitHubUrl}
              webUrl={work.webUrl}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Works;

