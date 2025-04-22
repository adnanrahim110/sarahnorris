import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../ui/Button";

const Newsletter = () => {
  const location = useLocation();
  return (
    <section
      className={`py-12 ${
        location.pathname === "/" ? "bg-secondary-50" : "bg-white"
      }`}
    >
      <div className="w-full px-3 mx-auto">
        <div className="row">
          <div className="md:w-6/12 max-md:text-center max-md:mb-5">
            <h2 className="title md:text-4xl lg:text-[46px] text-secondary">
              Newsletter & Updates
            </h2>
            <p>
              Sign up to receive updates, devotionals, and special messages.
            </p>
          </div>
          <div className="md:w-6/12 inline-flex items-end flex-col justify-center text-left gap-3">
            <form action="" className="w-full max-w-[27.5rem]">
              <div className="relative flex items-center border border-secondary-300 rounded-[14px] p-1 transition-all duration-150 ease-in-out has-focus:border-secondary has-focus:shadow-[0_0_0_0.1875rem_#f1f9dc]">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="grow shrink-0 basis-0 w-auto outline-none border-none shadow-none h-11 rounded-[10px] px-[17.6px] inline-flex items-center text-sm font-medium leading-0"
                />
                <Button children="submit" className="rounded-[10px]!" />
              </div>
            </form>
            <p className="text-xs text-neutral-500 max-md:w-full max-md:text-center">
              By signing up, I agree with the data protection policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
