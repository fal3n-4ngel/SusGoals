"use client";
import WorldCount from "@/components/WorldCount/WorldCount";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Marquee from "react-fast-marquee";

export default function Home() {
  useEffect(() => {
    document.title = "Sus Goals";
  }, []);

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
    <div className="bg-[#f8e5d8]">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <main className="flex min-h-full w-full overflow-x-hidden flex-col items-start justify-between bg-[#F9F2ED] text-black transition-all">
        <nav className="z-10 bg-[#F9F2ED] flex fixed  w-full h-12 p-10 items-center justify-between">
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
            className="md:w-36 w-24 h-10 hover:cursor-pointer text-center font-light text-xl p-1 border-[1px] border-black rounded-md  hover:shadow-none shadow-[6px_6px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all"
          >
            Les Go
          </div>
        </nav>
        <div
          id="home"
          ref={homeRef}
          className="w-full min-h-screen h-full bg-[#F9F2ED]"
        >
          <div className="md:flex hidden flex-col">
            <div className="md:w-[95%] px-[2%] pt-[200px] md:pt-[17%] text-5xl md:text-9xl text-ellipsis font-light leading-relaxed transition-all ">
              <div>Unleash Your Inner </div>
              <span className="font-medium">Eco-Ninja</span>, <br />
              One Dubious <br />Adventure at a Time!
            </div>
          </div>

          <div className="md:hidden flex flex-col">
            <div className="md:w-[75%] px-[2%] pt-[200px] md:pt-[17%] text-5xl md:text-9xl text-ellipsis font-light leading-relaxed transition-all ">
              Unleash Your Inner <br />{" "}
              <span className="font-medium">Eco-Ninja</span>, <br />
              One Dubious Adventure at a Time!
            </div>
          </div>
        </div>
        <Marquee className="my-5 md:h-[16rem] h-[12rem] md:text-[250px] text-[180px] overflow-hidden font-light text-blue-400">
          |<span className="text-blue-500"> Sus</span>tainble | Environmental
          awareness | Eco-conscious
        </Marquee>
        <div
          id="about"
          ref={aboutRef}
          className="w-full h-full my-10  scroll-mt-10  "
        >
          <div className="my-10 text bg-black "></div>
          <WorldCount />
          <div className="mt-[100px] w-[90%] mx-auto leading-relaxed tracking-wider">
            <div className="text-6xl  font-light my-10">What is Sus Goals?</div>
            <div className="text-2xl md:text-3xl font-light h-full ">
              Welcome to <span className="font-semibold">Sus Goals</span>, an
              innovative project born out of a
              <span className="text-blue-300"> Design and Engineering </span>
              course as part of my pursuit of a 
              <span className="text-red-500"> BTech degree in CSE </span> :&lt;. In this
              venture, I aimed to fuse <span className="text-green-400"><span className="text-green-600">sus</span>tainability</span> and design into a
              meaningful endeavor that goes beyond the conventional.While the
              initial idea was to create a paper craft, I sought to amplify the
              impact and engagement by transitioning to a dynamic website, and
              thus, the evolution of <span className="text-green-400">Sus Goals</span> began.<br /><br />
            </div>
            <div className="text-2xl md:text-3xl font-light ">
              At its core, Sus Goals serves a noble purpose. Each day,
              you&apos;re presented with a random Sustainable Goal - a reminder
              of the pressing global challenges we face. By taking actionable
              steps towards these goals and clicking the <span className="text-blue-300"> &apos;Done&apos; </span>
              button, you&apos;re not only contributing personally but also
              adding to the collective effort. Every completed goal increments
              the global counter, symbolizing the collaborative impact of
              individuals striving for a more sustainable world.
            </div>
           
          </div>
        </div>
      </main>
      <footer
        ref={contactRef}
        className="w-full mt-10 md:min-h-[200px]   bg-[#f8e5d8] p-10 justify-end"
      >
        <div className="flex md:flex-row flex-col justify-between">
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
            <a href="https://www.adithyakrishnan.com/">
              <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
                Website : www.adithyakrishnan.com
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
