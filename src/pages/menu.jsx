import React from "react";
import Navbar from "../component/navbar";
import Title from "../assets/png/Group 1.png";
import Item from "../assets/png/item.png";
import Item2 from "../assets/png/item2.png";
import Item3 from "../assets/png/item3.png";
import Item4 from "../assets/png/item4.png";
import Item5 from "../assets/png/item5.png";
import Item6 from "../assets/png/item6.png";

const list = [
  {
    img: Item,
    name: "Classic",
    type: "full fried hotdog",
    price: "$6",
  },
  {
    img: Item2,
    name: "Mozzarella",
    type: "full fried mozzarella",
    price: "$6",
  },
  {
    img: Item3,
    name: "Half and Half        ",
    type: "half hotdog + half mozzarella",
    price: "$6",
  },
  {
    img: Item4,
    name: "Potato",
    type: "potato crust w/ half hotdog + half mozzarella",
    price: "$7",
  },
  {
    img: Item5,
    name: "Hangrydog Special",
    type: "half hotdog + half mozzarella",
    price: "$7",
  },
  {
    img: Item6,
    name: "CheeseHotteok",
    type: "potato crust w/ cheese stuffing",
    price: "$7",
  },
];

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <img src={Title} alt="" className="w-[80%] md:w-[30%] mx-auto" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[90%] 2xl:w-[50%]  mx-auto my-10  md:my-10">
          {list.map((x, index) => (
            <div className="md:flex gap-2 mt-10">
              <img
                src={x.img}
                alt=""
                className={`cursor-pointer mx-auto md:mx-0 ${
                  index === 5 ? "md:w-[40%] h-[200px] md:h-[150px] xl:h-[194px] mt-0 xl:mt-[40px]" : "md:w-[50%]"
                }`}
              />

              <div
                className={`cursor-pointer self-center ${
                  index === 5 ? "text-center md:text-start" : "md:-ml-10 xl:-ml-16  text-center md:text-start"
                }`}
              >
                <p
                  style={{
                    fontFamily: "'Anonymous Pro', monospace",
                  }}
                  className="hover:shadow-md cursor-pointer font-[700] text-[16px] text-white bg-black py-3 w-[100%] text-center rounded-r-full"
                >
                  {x.name}
                </p>

                <p
                  style={{
                    fontFamily: "'Anonymous Pro', monospace",
                  }}
                  className="font-[400] italic text-[14px] text-[#231F20] mt-5 rounded-r-full"
                >
                  {x.type}
                </p>

                <p
                  style={{
                    fontFamily: "'Anonymous Pro', monospace",
                  }}
                  className="font-[700]  text-[18px] text-[#231F20] mt-2 rounded-r-full"
                >
                  {x.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
