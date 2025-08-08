import HomeScreen from "@/components/Home";
import Tecnologies from "@/components/Tecnologies";
import TopBar from "@/components/TopBar";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="relative">
      <div className="w-full h-[68px] mb-[20px]">
        <TopBar />
      </div>
      <div className="w-full flex justify-center">
        <HomeScreen />
      </div>
      <h2 className="text-center text-[30px] text-white font-extrabold mt-[119px] mb-[67px]" id="about">Tecnologias</h2>
      <div className="w-full flex justify-center">
        <Tecnologies />
      </div>
      <h2 className="text-center text-[30px] text-white font-extrabold mt-[119px] mb-[67px] " id="project">Proyectos</h2>
      <div className="w-full flex justify-center">
        <Works />
      </div>
    </div>
 );
}
