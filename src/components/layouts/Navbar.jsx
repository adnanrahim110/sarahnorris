import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logo_l } from "../../assets";
import { navigation } from "../../constant";
import Button from "../ui/Button";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 1. Toggle fixed vs absolute on scroll
  useEffect(() => {
    function onScroll() {
      setIsFixed(window.scrollY > 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 2. Smooth-scroll on hash change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // 3. Close mobile menu if you click outside the nav
  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // 4. Handle clicks on hash‑links
  const handleHashClick = (e, url) => {
    const [path = "/", hash] = url.split("#");
    if (!hash) return;
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname === path) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`${path}#${hash}`);
    }
  };

  const navClasses = isFixed
    ? "fixed top-0 left-0 w-full bg-white border-b border-neutral-300 z-50"
    : "absolute top-0 left-0 w-full bg-white z-50";

  const linkBase =
    "text-15p px-[15px] py-2 transition-all duration-300 ease-in-out underline underline-offset-2";
  const linkActive = "text-secondary decoration-secondary";
  const linkInactive = "text-black hover:text-secondary decoration-transparent";

  return (
    <header>
      <nav
        ref={navRef}
        className={`${navClasses} flex flex-col lg:flex-row items-center lg:justify-between transition-all duration-300 ease-in-out`}
      >
        <div className="w-full flex items-center justify-between px-3 py-2 lg:py-0">
          <Link to="/">
            <img src={logo_l} className="max-w-[150px]" alt="Logo" />
          </Link>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="block lg:hidden text-3xl border border-neutral-300 p-1 rounded-md"
          >
            <GiHamburgerMenu />
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <ul className="flex flex-row">
              {navigation.map((item, idx) => {
                const [path = "/", hash] = item.url.split("#");
                const isActive = hash
                  ? location.pathname === path && location.hash === `#${hash}`
                  : location.pathname === path;

                return hash ? (
                  <li key={idx}>
                    <a
                      href={item.url}
                      onClick={(e) => handleHashClick(e, item.url)}
                      className={`${linkBase} ${
                        isActive ? linkActive : linkInactive
                      }`}
                    >
                      {item.title}
                    </a>
                  </li>
                ) : (
                  <li key={idx}>
                    <Link
                      to={item.url}
                      onClick={() => setMenuOpen(false)}
                      className={`${linkBase} ${
                        isActive ? linkActive : linkInactive
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button>Donate</Button>
          </div>
        </div>

        <div
          className={`w-full px-3 mt-1 border-t border-t-neutral-300 lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-screen py-4 shadow-md" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col space-y-2">
            {navigation.map((item, idx) => {
              const [path = "/", hash] = item.url.split("#");
              const isActive = hash
                ? location.pathname === path && location.hash === `#${hash}`
                : location.pathname === path;

              return hash ? (
                <li key={idx}>
                  <a
                    href={item.url}
                    onClick={(e) => handleHashClick(e, item.url)}
                    className={`${linkBase} ${
                      isActive ? linkActive : linkInactive
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ) : (
                <li key={idx}>
                  <Link
                    to={item.url}
                    onClick={() => setMenuOpen(false)}
                    className={`${linkBase} ${
                      isActive ? linkActive : linkInactive
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4">
            <Button className="w-full">Donate</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
