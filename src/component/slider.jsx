import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Left from "../assets/svg/icon _arrow circle left outline_.svg";
import Right from "../assets/svg/icon _arrow circle right outline_.svg";
import Navbar from "./navbar";

export default function Sliders() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleSlideNext = () => {
    console.log("Next");
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleSlidePrev = () => {
    console.log("Prev");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
      <div className="">
        <Slider ref={sliderRef} {...settings} className=" overflow-hidden ">
          <div>
            <div className="bg h-[100vh]  ">
              <Navbar currentPage="home" />

              <div className="grid   grid-cols-1 lg:grid-cols-2 2xl:w-[50%] mx-auto ">
                <div className="w-[90%] xl:w-[60%]  mx-auto mt-20 lg:mt-24  xl:mt-20">
                  <p
                    style={{
                      fontFamily: "'Anonymous Pro', monospace",
                    }}
                    className="font-[700] text-[50px] md:text-[80px] text-[#231F20] leading-[60px] md:leading-[80px]"
                  >
                    HANGRY <br /> DOG <br /> NYC
                  </p>
                  <p
                    style={{
                      fontFamily: "'Anonymous Pro', monospace",
                    }}
                    className="mt-1 font-[300] text-[16px] md:text-[20px] text-[#231F20] "
                  >
                    From HANGRY to HUNGRY in just one bite
                  </p>
                </div>

                <div className="md:relative mt-10  ml-auto md:ml-0 mr-5 md:mr-0">
                  <div className="md:absolute md:-bottom-10 lg:bottom-0  xl:-bottom-20  md:right-10  lg:right-auto lg:left-40 xl:left-56 ">
                    <p
                      style={{
                        fontFamily: "'Anonymous Pro', monospace",
                      }}
                      className="text-center font-[700] text-[18px] md:text-[25px] md:text-white"
                    >
                      Half and Half
                      <br />
                      <span className="font-[400] text-[12px] md:text-[15px]">
                        half hotdog + half mozzarella{" "}
                      </span>
                      <br />
                      $6
                    </p>
                    <div className="flex justify-center gap-3 mt-10 lg:mt-14 relative z-20">
                      <img
                        onClick={handleSlidePrev}
                        src={Left}
                        alt=""
                        className="cursor-pointer"
                      />
                      <img
                        onClick={handleSlideNext}
                        src={Right}
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg2 h-[100vh]">
              <Navbar currentPage="home" />

              <div className="grid grid-cols-1 lg:grid-cols-2  2xl:w-[50%] mx-auto">
                <div className="w-[90%] xl:w-[60%]  mx-auto mt-20 lg:mt-24  xl:mt-20">
                  <p
                    style={{
                      fontFamily: "'Anonymous Pro', monospace",
                    }}
                    className="font-[700] text-[50px] md:text-[80px] text-[#231F20] leading-[60px] md:leading-[80px]"
                  >
                    HANGRY <br /> DOG <br /> NYC
                  </p>
                  <p
                    style={{
                      fontFamily: "'Anonymous Pro', monospace",
                    }}
                    className="mt-1 font-[300] text-[16px] md:text-[20px] text-[#231F20] "
                  >
                    From HANGRY to HUNGRY in just one bite
                  </p>
                </div>

                <div className="md:relative mt-10 ml-auto md:ml-0 mr-5 md:mr-0">
                  <div className="md:absolute md:-bottom-10 lg:bottom-0  xl:-bottom-20  md:right-4 lg:right-auto lg:left-28 xl:left-40 ">
                    <p
                      style={{
                        fontFamily: "'Anonymous Pro', monospace",
                      }}
                      className="text-center font-[700] text-[18px] md:text-[25px] md:text-white"
                    >
                      Potato Half and Half
                      <br />
                      <span className="font-[400] text-[12px] md:text-[15px]">
                        potato crust w/ half hotdog + half mozzarella
                      </span>
                      <br />
                      $7
                    </p>
                    <div className=" flex justify-center gap-3 mt-10 lg:mt-10 relative z-20">
                      <img
                        onClick={handleSlidePrev}
                        src={Left}
                        alt=""
                        className="cursor-pointer"
                      />
                      <img
                        onClick={handleSlideNext}
                        src={Right}
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg3 h-[100vh] ">
              <Navbar currentPage="home" />

              <div className="grid grid-cols-1 lg:grid-cols-2   2xl:w-[50%] mx-auto">
                <div className="w-[90%] xl:w-[60%]  mx-auto mt-20 lg:mt-24  xl:mt-20">
                  <p
                    style={{
                      fontFamily: "'Anonymous Pro', monospace",
                    }}
                    className="font-[700] text-[50px] md:text-[80px] text-[#231F20] leading-[60px] md:leading-[80px]"
                  >
                    HANGRY <br /> DOG <br /> NYC
                  </p>
                  <p
                    style={{
                      fontFamily: "'Anonymous Pro', monospace",
                    }}
                    className="mt-1 font-[300] text-[16px] md:text-[20px] text-[#231F20] "
                  >
                    From HANGRY to HUNGRY in just one bite
                  </p>
                </div>

                <div className="md:relative mt-10 ml-auto md:ml-0 mr-5 md:mr-0">
                  <div className="md:absolute  md:bottom-0 lg:bottom-0 xl:-bottom-20  md:right-10 lg:right-auto lg:left-48 xl:left-64 ">
                    <p
                      style={{
                        fontFamily: "'Anonymous Pro', monospace",
                      }}
                      className="text-center font-[700] text-[18px] md:text-[25px] md:text-white"
                    >
                      Classic
                      <br />
                      <span className="font-[400] text-[12px] md:text-[15px]">
                        full fried hotdog
                      </span>
                      <br />
                      $6
                    </p>
                    <div className=" flex justify-center gap-3 mt-10 lg:mt-10 relative z-20">
                      <img
                        onClick={handleSlidePrev}
                        src={Left}
                        alt=""
                        className="cursor-pointer"
                      />
                      <img
                        onClick={handleSlideNext}
                        src={Right}
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg4 h-[100vh] ">
              <Navbar currentPage="home" />

              <div className="grid grid-cols-1 lg:grid-cols-2  2xl:w-[50%] mx-auto">
                <div className="w-[90%] xl:w-[60%]  mx-auto mt-20 lg:mt-24  xl:mt-20">
                  <p
                    style={{
                      fontFamily: "'Anonymous Pro', monospace",
                    }}
                    className="font-[700] text-[50px] md:text-[80px] text-[#231F20] leading-[60px] md:leading-[80px]"
                  >
                    HANGRY <br /> DOG <br /> NYC
                  </p>
                  <p
                    style={{
                      fontFamily: "'Anonymous Pro', monospace",
                    }}
                    className="mt-1 font-[300] text-[16px] md:text-[20px] text-[#231F20] "
                  >
                    From HANGRY to HUNGRY in just one bite
                  </p>
                </div>

                <div className="md:relative mt-10 ml-auto md:ml-0 mr-5 md:mr-0">
                  <div className="md:absolute md:bottom-0 lg:bottom-0  xl:-bottom-10  md:right-10 lg:right-auto lg:left-36 xl:left-56 ">
                    <p
                      style={{
                        fontFamily: "'Anonymous Pro', monospace",
                      }}
                      className="text-center font-[700] text-[18px] md:text-[25px] md:text-white"
                    >
                      Hotteok
                      <br />
                      <span className="font-[400] text-[12px] md:text-[15px]">
                        potato crust w/ cheese filling
                      </span>
                      <br />
                      $7
                    </p>
                    <div className=" flex justify-center gap-3 mt-10 lg:mt-20 relative z-20">
                      <img
                        onClick={handleSlidePrev}
                        src={Left}
                        alt=""
                        className="cursor-pointer"
                      />
                      <img
                        onClick={handleSlideNext}
                        src={Right}
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg5 h-[100vh] ">
              <Navbar currentPage="home" />

              <div className="grid grid-cols-1 lg:grid-cols-2  2xl:w-[50%] mx-auto">
                <div className="w-[90%] xl:w-[60%]  mx-auto mt-20 lg:mt-24  xl:mt-20">
                  <p
                    style={{
                      fontFamily: "'Anonymous Pro', monospace",
                    }}
                    className="font-[700] text-[50px] md:text-[80px] text-[#231F20] leading-[60px] md:leading-[80px]"
                  >
                    HANGRY <br /> DOG <br /> NYC
                  </p>
                  <p
                    style={{
                      fontFamily: "'Anonymous Pro', monospace",
                    }}
                    className="mt-1 font-[300] text-[16px] md:text-[20px] text-[#231F20] "
                  >
                    From HANGRY to HUNGRY in just one bite
                  </p>
                </div>

                <div className="md:relative mt-10 ml-auto md:ml-0 mr-5 md:mr-0">
                  <div className="md:absolute  md:bottom-0 lg:bottom-0  md:right-10 lg:right-auto lg:left-48 xl:left-56 ">
                    <p
                      style={{
                        fontFamily: "'Anonymous Pro', monospace",
                      }}
                      className="text-center font-[700] text-[18px] md:text-[25px] md:text-white"
                    >
                      Mozzarella
                      <br />
                      <span className="font-[400] text-[12px] md:text-[15px]">
                        full fried mozzarella
                      </span>
                      <br />
                      $7
                    </p>
                    <div className=" flex justify-center gap-3 mt-10 lg:mt-20 relative z-20">
                      <img
                        onClick={handleSlidePrev}
                        src={Left}
                        alt=""
                        className="cursor-pointer"
                      />
                      <img
                        onClick={handleSlideNext}
                        src={Right}
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg5 h-[100vh] ">
              <Navbar currentPage="home" />

              <div className="grid grid-cols-1 lg:grid-cols-2  2xl:w-[50%] mx-auto">
                <div className="w-[90%] xl:w-[60%]  mx-auto mt-20 lg:mt-24  xl:mt-20">
                  <p
                    style={{
                      fontFamily: "'Anonymous Pro', monospace",
                    }}
                    className="font-[700] text-[50px] md:text-[80px] text-[#231F20] leading-[60px] md:leading-[80px]"
                  >
                    HANGRY <br /> DOG <br /> NYC
                  </p>
                  <p
                    style={{
                      fontFamily: "'Anonymous Pro', monospace",
                    }}
                    className="mt-1 font-[300] text-[16px] md:text-[20px] text-[#231F20] "
                  >
                    From HANGRY to HUNGRY in just one bite
                  </p>
                </div>

                <div className="md:relative mt-10 ml-auto md:ml-0 mr-5 md:mr-0">
                  <div className="md:absolute  md:-bottom-10 lg:bottom-0 xl:-bottom-10  md:right-10 lg:right-auto lg:left-36 xl:left-56 ">
                    <p
                      style={{
                        fontFamily: "'Anonymous Pro', monospace",
                      }}
                      className="text-center font-[700] text-[18px] md:text-[25px] md:text-white"
                    >
                      Hangrydog Special
                      <br />
                      <span className="font-[400] text-[12px] md:text-[15px]">
                        half hotdog + half mozzarella
                      </span>
                      <br />
                      $7
                    </p>
                    <div className=" flex justify-center gap-3 mt-10 lg:mt-20 relative z-20">
                      <img
                        onClick={handleSlidePrev}
                        src={Left}
                        alt=""
                        className="cursor-pointer"
                      />
                      <img
                        onClick={handleSlideNext}
                        src={Right}
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
