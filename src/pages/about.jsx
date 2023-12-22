import React from "react";
import Navbar from "../component/navbar";

export default function About() {
  const videoUrl =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

  return (
    <>
      <div className="bg-[#231F20] ">

        <div className=" lg:h-[100vh]">
        <Navbar currentPage="about" />

          <p
            className="mt-5 font-[700] text-[50px] text-white text-center"
            style={{
              fontFamily: "'Anonymous Pro', monospace",
            }}
          >
            About Us
          </p>

          <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 w-[90%] md:w-[70%] 2xl:w-[50%] mx-auto mt-5 pb-5 lg:pb-0 lg:my-10  lg:py-0">
            <div className="self-center">
              <video className="w-full h-full" autoplay muted controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="self-center">
              <p className="font-[300] text-[14px] xl:text-[18px] text-white">
                HangryDog is a Korean corndog street fair stand based in NYC
                that started in 2020. We take pride in creating a unique twist
                on the classic corndog recipe by infusing it with the flavors of
                the trending Korean hotdog.
              </p>
              <p className="mt-5 font-[300] text-[14px] xl:text-[18px] text-white">
                Our corndogs are made with juicy chicken hotdogs and
                high-quality mozzarella cheese that is specially selected for
                its stretchy and tasty texture. What sets HangryDog apart from
                other Korean corndogs is our thin and crunchy crust, which
                perfectly complements the gooey, cheesy goodness on the inside.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
