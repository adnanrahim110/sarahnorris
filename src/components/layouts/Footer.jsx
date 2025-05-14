import React from "react";
import { Link, useLocation } from "react-router-dom";
import { logo_l_w } from "../../assets";
import { navigation, socialLinks } from "../../constant";
import Newsletter from "./Newsletter";

const Footer = () => {
  const location = useLocation();
  return (
    <>
      <Newsletter />
      <footer className="bg-[#171921]">
        <div className="pt-10 px-5 pb-[30px] border-b border-white">
          <div className="w-full px-3 mx-auto">
            <div className="row justify-between items-center gap-12 sm:gap-0">
              <div className="md:w-4/12 lg:w-3/12 max-md:text-center">
                <Link to="/" className="max-md:inline-block">
                  <img src={logo_l_w} className="max-w-[280px]" alt="" />
                </Link>
              </div>
              <div className="sm:w-6/12 md:w-4/12 lg:w-7/12">
                <ul className="flex justify-center max-md:flex-wrap items-center gap-3.5">
                  {navigation.map((nav, idx) => (
                    <li key={idx}>
                      <Link
                        to={nav.url}
                        className={
                          location.pathname === nav.url
                            ? "text-secondary"
                            : "text-secondary-100 hover:text-secondary-300"
                        }
                      >
                        {nav.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:w-6/12 md:w-3/12 lg:w-2/12">
                <ul className="flex items-center justify-center gap-7">
                  {socialLinks.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                      <li key={idx}>
                        <a
                          target="_blank"
                          href={link.url}
                          className="text-2xl leading-none text-white hover:text-secondary"
                        >
                          <Icon />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 pb-6">
          <div className="text-center w-full px-3">
            <p className="text-white mb-0 text-sm">
              Copyright &copy; {new Date().getFullYear()} -{" "}
              <Link
                to="/"
                className="text-secondary underline underline-offset-2 decoration-transparent hover:decoration-secondary"
              >
                Sarah Norris
              </Link>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
