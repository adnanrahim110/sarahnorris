import React from "react";
import { FaAmazon } from "react-icons/fa6";
import { bookcover } from "../../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="pb-0 pt-[150px] md:mb-14 bg-secondary-50">
      <div className="w-full px-3 mx-auto">
        <div className="row justify-between flex-col-reverse md:flex-row">
          <div className="lg:w-6/12">
            <div className="h-full flex flex-col justify-center text-center md:text-left mt-14 md:mt-0 pb-20 md:pb-24">
              <span className="subtitle">New Release</span>
              <h1 className="title mb-4 md:mb-0">
                Discover the Power and Presence of the Holy Spirit in Your
                Everyday Life
              </h1>
              <p>
                A guide to unlocking the gifts of the Holy Spirit and living a
                life of faith and purpose.
              </p>
              <div>
                <Button
                  children="Buy now on Amazon"
                  className="capitalize"
                  icon={FaAmazon}
                  href={"https://www.amazon.com/"}
                  iconClass="text-amber-400"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-5/12">
            <p className="text-center font-medium mb-1.5 text-black text-xs">
              Not by might, nor by power, but by my Spirit, saith the Lord.
              (Zech 4:6 KJV)
            </p>
            <div className="md:-mb-[50px] shadow-[0_5px_30px_rgba(0,0,0,0.1)]">
              <img src={bookcover} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
