import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";

export default function Home() {
  return (
    <>
      <div className=" h-[630px] w-full flex items-center ">
        {/* left div */}
        <div className="  flex-col   h-[400px]  w-1/2">
          <div className="  text-center py-3  h-[30%] w-[70%] ml-24 text-black text-4xl">
            Crafting Stunning Websites & Digital Experiences
          </div>
          <div className="  w-[95%] px-4 ml-4 text-black text-xl">
            We design, build, and grow websites that captivate your audience and
            drive results. From sleek designs to powerful functionality, we
            deliver tailor-made solutions for your business.
          </div>
          <div className="  w-full flex items-center justify-center mt-8 h-10">
            <Button>Get Started</Button>
          </div>
        </div>

        {/* right div */}
        <div className=" bg-blue-400 h-[400px] w-1/2">img</div>
      </div>

      {/* aboutus */}
      <AboutUs />

      {/* Services */}
      <Services />
    </>
  );
}
