"use client";
import { RiMenu5Line } from "react-icons/ri";
import Image from "next/image";
import React, { useState, useEffect } from 'react';

const Menu = ({ menuClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`menu flex justify-end items-center text-end md:hidden absolute right-0 top-[-20px] h-[100vh] w-[100vw] p-[2rem] bg-dark z-40 transition-all duration-500 ${menuClass}`}
    >
      <ul className="flex flex-col gap-10 my-[10vh]">
        <li className="">
          <a href="#home" className="text-4xl" >home</a>
        </li>
        <li className="">
          <a href="#projects" className="text-4xl" >projects</a>
        </li>
        <li className="">
          <a href="#contact" className="text-4xl" >contact</a>
        </li>
      </ul>
    </div>
  );
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const [isHovered, setIsHovered] = useState(false);

  let menuClass = isOpen ? "translate-y-0" : "translate-y-[-100%]";
  let buttonClass = isOpen ? "rotate-90" : "rotate-0";

  return (
    <nav className={`p-[2rem] fixed top-0 left-0 flex w-full z-50 transition-all duration-1000 ${hasScrolled ? 'gradient-background' : 'bg-transparent'}` }>
      <div className="logo flex grow justifty-start items-center ">
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          alt="Jaegar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`transition-all ${isHovered ? "scale-110" : ""} z-50`}
        />
      </div>
      <div className="links flex max-w-1/2 md:w-1/3 lg:w-1/5">
        <ul className="hidden items-center gap-7 md:flex w-full">
          <li className="border-b-4 border-transparent hover:border-primary hover:cursor-pointer">
            <a href="#home">home</a>
          </li>
          <li className="border-b-4 border-transparent hover:border-primary hover:cursor-pointer">
            <a href="#projects">projects</a>
          </li>
          <li className="border-b-4 border-transparent hover:border-primary hover:cursor-pointer">
            <a href="https://linktr.ee/jaegarsaun" target="_blank">contact</a>
          </li>
        </ul>
        <button className={`z-50`} onClick={toggleNav}>
          <RiMenu5Line
            className={`block md:hidden z-50 transition-all ${buttonClass}`}
            size={25}
          />
        </button>
      </div>

      <Menu menuClass={menuClass} />
    </nav>
  );
}
