import React, { useState } from "react";
import Navbar from "../component/navbar";
import Slide from "../assets/png/I01.png";
import Slide2 from "../assets/png/I02.png";
import Slide3 from "../assets/png/I03.png";
import Slide4 from "../assets/png/I04.png";
import Slide5 from "../assets/png/I05.png";
import Slide6 from "../assets/png/I06.png";
import Slide7 from "../assets/png/I07.png";
import Slide8 from "../assets/png/I08.png";
import Slide9 from "../assets/png/I09.png";
import Slide10 from "../assets/png/I10.png";
import Slide11 from "../assets/png/I11.png";
import Slide12 from "../assets/png/I12.png";
import "animate.css";

export default function Gallery() {
  const [showAll, setShowAll] = useState(true);
  const [imagesBelow, setImagesBelow] = useState(false);
  const [topImage, setTopImage] = useState(Slide);

  const toggleImages = () => {
    setShowAll(!showAll);
    setImagesBelow(!imagesBelow);
  };

  const handleImageClick = (image) => {
    const imageElement = document.querySelector(".top-image");

    imageElement.classList.add("fadeOut");

    setTimeout(() => {
      setTopImage(image);

      imageElement.classList.remove("fadeOut");
    }, 200);
  };

  return (
    <>
      <Navbar />

      <div>
        <div className="w-[80%] md:w-[15%] 2xl:w-[10%] mx-auto relative group mt-20 mb-5 cursor-pointer ">
          <div onClick={toggleImages}>
            <img src={topImage} alt="" className="relative z-20 top-image " />
            <p
              style={{
                fontFamily: "'Anonymous Pro', monospace",
              }}
              className="font-[700] text-[18px] md:text-[12px]  text-black text-center mt-1"
            >
              Ketchup or mustard? Both !
            </p>
          </div>
          {showAll && (
            <>
              <img
                src={Slide2}
                alt=""
                class="absolute -top-5 left-5 transition -transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
              />

              <img
                src={Slide3}
                alt=""
                class="absolute top-5 -left-5 transition-transform duration-300 group-hover:-translate-x-2 group-hover:translate-y-2"
              />
            </>
          )}
        </div>

        {imagesBelow && (
          <div
            className={`grid  grid-cols-6 md:grid-cols-11 gap-5 w-[80%] md:w-[70%] xl:w-[50%] 2xl:w-[30%] mx-auto mb-10 ${
              imagesBelow ? "animate__animated animate__fadeInDown" : ""
            }`}
          >
            <img
              src={Slide}
              alt=""
              className="relative z-20 cursor-pointer"
              onClick={() => handleImageClick(Slide)}
            />
            <img
              src={Slide2}
              alt=""
              className=" cursor-pointer"
              onClick={() => handleImageClick(Slide2)}
            />

            <img
              src={Slide3}
              alt=""
              className=" cursor-pointer"
              onClick={() => handleImageClick(Slide3)}
            />
            <img
              src={Slide4}
              alt=""
              className=" cursor-pointer"
              onClick={() => handleImageClick(Slide4)}
            />
            <img
              src={Slide5}
              alt=""
              className=" cursor-pointer"
              onClick={() => handleImageClick(Slide5)}
            />
            <img
              src={Slide6}
              alt=""
              className=" cursor-pointer"
              onClick={() => handleImageClick(Slide6)}
            />
            <img
              src={Slide7}
              alt=""
              className=" cursor-pointer"
              onClick={() => handleImageClick(Slide7)}
            />
            <img
              src={Slide8}
              alt=""
              className=" cursor-pointer"
              onClick={() => handleImageClick(Slide8)}
            />
            <img
              src={Slide9}
              alt=""
              className=" cursor-pointer"
              onClick={() => handleImageClick(Slide9)}
            />
            <img
              src={Slide10}
              alt=""
              className=" cursor-pointer"
              onClick={() => handleImageClick(Slide10)}
            />
            <img
              src={Slide11}
              alt=""
              className=" cursor-pointer"
              onClick={() => handleImageClick(Slide11)}
            />
          </div>
        )}
      </div>
    </>
  );
}
