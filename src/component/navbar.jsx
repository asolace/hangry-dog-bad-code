import React, { Fragment, useState } from "react";
// import Logo from "../assets/svg/image 2.svg";
import Logo from "../assets/png/image 2.png"
import Images from "../assets/png/image 69.png"
import { CgMenuRight } from "react-icons/cg";
import Icon from "../assets/png/Frame 2.png";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";


export default function Navbar({ currentPage }) {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const textColor = currentPage === "home" ? "#4F4F4F" : "white";

  return (
    <>
      <div className="relative">
        <div className="flex  justify-between pt-5 lg:pt-10 w-[90%] md:w-[60%] 2xl:w-[30%] mx-auto relative z-10">
          <Link to="/" className="hidden md:block">
            <p
              className={`font-[500] text-[18px] ${
                currentPage === "about" ? "text-white" : "text-[#4F4F4F]"
              } hover:text-[#EA2427] cursor-pointer`}

              // className="hidden md:block font-[500] text-[18px] text-[#4F4F4F] hover:text-[#EA2427] cursor-pointer"
            >
              Home
            </p>
          </Link>
          <Link to="/about" className="hidden md:block">
            <p
              className={`font-[500] text-[18px] ${
                currentPage === "about" ? "text-white" : "text-[#4F4F4F]"
              } hover:text-[#EA2427] cursor-pointer`}
            >
              About
            </p>
          </Link>
          <img
            src={isHovered ? Images : Logo}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            alt="Descriptive text for image"
            className="cursor-pointer !w-[25%]  xl:!w-[15%]  "
          />
          <CgMenuRight
            onClick={() => setOpen(true)}
            className={`font-[500] text-[18px] ${
              currentPage === "about" ? "text-white" : "text-[#4F4F4F]"
            } block md:hidden w-10 h-10 self-center cursor-pointer`}
          />

          <Link to="/menu" className="hidden md:block">
            <p
              className={`font-[500] text-[18px] ${
                currentPage === "about" ? "text-white" : "text-[#4F4F4F]"
              } hover:text-[#EA2427] cursor-pointer hidden md:block`}

              // className="hidden md:block font-[500] text-[18px] text-[#4F4F4F] hover:text-[#EA2427] cursor-pointer">
            >
              Menu
            </p>
          </Link>

          <Link to="/gallery" className="hidden md:block">
            <p
              className={`font-[500] text-[18px] ${
                currentPage === "about" ? "text-white" : "text-[#4F4F4F]"
              } hover:text-[#EA2427] cursor-pointer hidden md:block`}

              // className="hidden md:block font-[500] text-[18px] text-[#4F4F4F] hover:text-[#EA2427] cursor-pointer">
            >
              Gallery
            </p>
          </Link>
        </div>

        {/* <img
          src={Icon}
          className=" cursor-pointer hidden md:block absolute top-0 right-0 z-10 w-[69px] h-[69px]"
        /> */}
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative " onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-full">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-4 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        {/* <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button> */}
                      </div>
                    </Transition.Child>
                    <div className="flex w-[100%] ml-auto h-full flex-col overflow-y-scroll  bg-white shadow-xl">
                      <div class=" container grid grid-cols-1 py-1">
                        <div class="flex justify-between px-5 border-b-[1px] border-[#1A1A1A] py-2">
                          <img src={Logo} alt="" className="w-[20%]" />

                          <div className="w-[50%] px-3"></div>
                          <button
                            type="button"
                            className=" rounded-md text-[#B4B4B4]  focus:outline-none"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                          </button>
                        </div>

                        <div className=" mx-auto text-center">
                          <Link to="/" className=" mt-10">
                            <p className="mt-10 font-[500] text-[18px] hover:text-[#EA2427] cursor-pointer">
                              Home
                            </p>
                          </Link>
                          <Link to="/about" className="">
                            <p className ="mt-5 font-[500] text-[18px] hover:text-[#EA2427] cursor-pointe">
                              About
                            </p>
                          </Link>

                          <Link to="/menu" className="">
                            <p className="mt-5 font-[500] text-[18px] hover:text-[#EA2427] cursor-pointer">
                              Menu
                            </p>
                          </Link>

                          <Link to="/gallery" className="">
                            <p className="mt-5 font-[500] text-[18px] hover:text-[#EA2427] cursor-pointer ">
                              Gallery
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
