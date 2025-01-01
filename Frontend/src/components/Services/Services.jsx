import React from "react";

import {
  MartiniIcon,
  MonitorPlay,
  Settings,
  Target,
  TargetIcon,
} from "lucide-react";

function Services() {
  return (
    <div className=" h-full min-h-screen bg-white w-full">
      {/**header */}
      <div className="  w-full h-[200px] flex  ">
        <div className=" w-[80%]  flex mx-[210px]  ">
          <div className="  flex  ">
            <h1 className="  text-[#101010] font-!normal text-[90px] uppercase mt-8">
              our services
            </h1>
          </div>
          <div className="  w-[8%] ml-4 border-b-4 border-black flex h-[110px]"></div>
          <div className="  flex justify-center items-center w-[27%] ml-6">
            <p className=" font-normal">
              Dive into our expertise in user experience optimization, digital
              strategy, and cutting-edge technology.
            </p>
          </div>
        </div>
      </div>

      {/**container of 3 divs */}
      <div className=" w-full h-[450px] flex">
        <div className="  w-[80%] h-full ml-[210px] flex gap-10 ">
          <div className=" w-[28%] h-[90%] bg-[#FCBF4D] flex flex-col   mt-2 rounded-[1rem] border-black border-2">
            <div className="  w-full h-[20%]">
              <div className=" bg-[#101010] w-8 h-8 mt-4 ml-6 flex justify-center items-center rounded-full">
                <h1 className=" font-!normal text-2xl text-white">1</h1>
              </div>
            </div>
            <div className=" w-full h-[45%] flex justify-center items-center">
              <MonitorPlay className=" h-[8rem] w-[8rem]" />
            </div>
            <div className=" w-full h-[35%] flex flex-col">
              <h1 className=" font-!normal uppercase text-4xl ml-6">
                Web design
              </h1>
              <p className=" font-normal ml-6 ">
                From corporate sites to e-commerce platforms, we create stunning
                websites that captivate and convert.
              </p>
            </div>
          </div>
          <div className=" w-[28%] h-[90%] bg-[#FCBF4D] flex flex-col   mt-2 rounded-[1rem] border-black border-2">
            <div className="  w-full h-[20%]">
              <div className=" bg-[#101010] w-8 h-8 mt-4 ml-6 flex justify-center items-center rounded-full">
                <h1 className=" font-!normal text-2xl text-white">2</h1>
              </div>
            </div>
            <div className=" w-full h-[45%] flex justify-center items-center">
              <Target className=" h-[8rem] w-[8rem]" />
            </div>
            <div className=" w-full h-[35%] flex flex-col">
              <h1 className=" font-!normal uppercase text-4xl ml-6">seo</h1>
              <p className=" font-normal ml-6 ">
                We optimize your website to rank higher, driving more organic
                traffic and attracting qualified leads.
              </p>
            </div>
          </div>
          <div className=" w-[28%] h-[90%] bg-[#FCBF4D] flex flex-col   mt-2 rounded-[1rem] border-black border-2">
            <div className="  w-full h-[20%]">
              <div className=" bg-[#101010] w-8 h-8 mt-4 ml-6 flex justify-center items-center rounded-full">
                <h1 className=" font-!normal text-2xl text-white">3</h1>
              </div>
            </div>
            <div className=" w-full h-[45%] flex justify-center items-center">
              <Settings className=" h-[8rem] w-[8rem]" />
            </div>
            <div className=" w-full h-[35%] flex flex-col">
              <h1 className=" font-!normal uppercase text-4xl ml-6">
                ux/ui design
              </h1>
              <p className=" font-normal ml-6 ">
                From wireframing to prototyping, we focus on user-centric design
                to elevate your digital presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
