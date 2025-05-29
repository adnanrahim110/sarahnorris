import React from "react";
import { Link } from "react-router-dom";
import { crisResources, verses } from "../../constant";

const HowToBeSaved = () => {
  return (
    <section className="py-16">
      <div className="w-full px-3 mx-auto">
        <div className="row items-center justify-center">
          <div className="w-full lg:w-7/12 text-center">
            <span class="subtitle">How to be saved</span>
            <h1 class="title capitalize mb-2">How to be saved</h1>
            <p>Salvation is a free gift from God. Follow these steps:</p>
          </div>
          <div className="w-full lg:w-full mt-8">
            <div className="row items-center justify-between gap-y-5">
              {verses.map((verse, idx) => (
                <div key={idx} className="md:w-4/12">
                  <div className="bg-primary-50/30 border md:mx-3.5 border-primary pt-5 pb-10 px-6 rounded-[10px] text-center relative">
                    <h3 className="text-3xl text-secondary">{verse.title}</h3>
                    <span className="absolute text-black/60 right-2.5 text-xs bottom-[5px]">
                      {verse.ref}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row justify-between items-center mt-16 gap-y-5">
          <div className="lg:w-7/12">
            <Link
              to="/products"
              className="w-full block hover:bg-primary-100 bg-primary-50/30 p-4 rounded-[10px] border border-secondary-300 max-md:text-center"
            >
              <h2 className="title max-md:mb-4">Christian Resources</h2>
              <p>Check out my recommended Christian product:</p>
            </Link>
          </div>
          <div className="lg:w-5/12 self-stretch">
            <div className="row gap-y-2 h-full">
              {crisResources.map((resource, idx) => (
                <div key={idx} className="w-full max-md:text-center">
                  <a
                    href={resource.url}
                    className="flex items-center w-full h-full bg-primary-50/30 border border-secondary-300 hover:bg-secondary group p-5 rounded-[10px]"
                  >
                    <h4 className="text-3xl group-hover:text-white">
                      {resource.title}
                    </h4>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBeSaved;
