"use client";
import WorldCount from "@/components/WorldCount/WorldCount";
import Image from "next/image";
import React, { useState, useRef,useEffect } from "react";

export default function Home() {

  

  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
 
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex min-h-full w-full overflow-x-hidden flex-col items-start justify-between bg-[#F9F2ED] text-black transition-all">
      <nav className=" flex fixed  w-full h-12 p-10 items-center justify-between">
        <div className="font-light text-4xl">
          Sus<span className="font-thin ">Goals*</span>
        </div>
        {/*  */}
        <div className="md:flex hidden gap-5 text-2xl ml-[8%] py-2 px-8 items-center text-center bg-[#f3e6de] rounded-full">
          <a onClick={scrollToHome}>
            <div className="font-light hover:cursor-pointer hover:font-bold transition-all duration-300">
              Home
            </div>
          </a>
          <a onClick={scrollToAbout}>
            <div className="font-light hover:cursor-pointer hover:font-bold transition-all duration-300">
              About
            </div>
          </a>
          <div
            onClick={scrollToContact}
            className="font-light hover:cursor-pointer hover:font-bold transition-all duration-300"
          >
            Contact
          </div>
        </div>
        {/*  */}

        <div
          onClick={scrollToAbout}
          className="w-36 h-10 text-center font-light text-xl p-1 border-[1px] border-black rounded-md  hover:shadow-none shadow-[6px_6px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all"
        >
          Les Go
        </div>
      </nav>
      <div
        id="home"
        ref={homeRef}
        className="w-full md:h-screen h-full bg-[#F9F2ED]"
      >
        <div className="flex flex-col">
          <div className="md:w-[70%] px-[2%] py-[17%] text-6xl md:text-8xl text-ellipsis font-light leading-relaxed transition-all ">
            Unleash Your Inner <br />{" "}
            <span className="font-medium">Eco-Ninja</span>, One Dubious
            Adventure at a Time!
          </div>
        </div>
      </div>
      <div
        id="about"
        ref={aboutRef}
        className="w-full h-screen mt-10 scroll-mt-10  "
      >
        <div className="my-10 text bg-black "></div>
        <WorldCount />
        <div className="mt-[100px] w-[90%] mx-auto">
          <div className="text-6xl  font-light my-10">What is Sus Goals?</div>
          <div className="text-3xl font-light "> Sus Goals is simply my course project for Design and Engineering Subject under CSE BTech :&lt; I was supposed to make a craft based on sustainabilty and design but paper craft sounded soo boring so decided to go with a website and here we are. Why am I telling all these , coz I am out of content to fill this space up</div>
          <div className="text-3xl font-light "> Anyway this site gives you a random Sustainable Goal that refreshes daily, DO IT and click the done button, it will increment the world wide counter for the goals reached. Techical side , Simply a react with next js app with firebase as backend which I coded on a single sleepless night.</div>
        </div>
      </div>

      <footer
        ref={contactRef}
        className="w-full md:min-h-[300px] md:visible invisible -mt-5 bg-[#f8e5d8] p-10 justify-end"
      >
        <div className="flex justify-between">
          <div>
            <div className="m-4 text-6xl text-black font-semibold">
              Be Sus with us.
            </div>
            <div className="m-4 text-3xl text-gray-500">
             Join today and be part of something great
            </div>
            <div className="m-4 text-2xl text-gray-500">
              Feel free to hit me up with suggestions
            </div>
          </div>
          <div className="mt-10">
            <div className="text-xl text-black font-semibold">Contact Me</div>
            <a href="https://github.com/fal3n-4ngel">
              <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
                Github : fal3n-4ngel
              </div>
            </a>
            <a href="https://www.instagram.com/4di.krish/">
              <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
                Insta : 4di.krish
              </div>
            </a>

            <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
              Reddit : lemme think about it
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
