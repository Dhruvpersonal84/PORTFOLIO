import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  /* Active section */
  const [activelist, setactivelist] = useState("");

  const savelist = (value) => {
    setactivelist(value);
    setmenubar(false);
    const section = document.getElementById(value);
    if(section){
      section.scrollIntoView({behavior:"smooth"});
    }
  };

  /* Scroll glass effect */
  const [scrolled, setscrolled] = useState(false);
  useEffect(() => {
    const isScrolled = () => setscrolled(window.scrollY > 50);
    window.addEventListener("scroll", isScrolled);
    return () => window.removeEventListener("scroll", isScrolled);
  }, []);

  /* Mobile menu */
  const [openmenubar, setmenubar] = useState(false);

  const menulist = [
    { label: "About" , id:"about"},
    { label: "Skills", id:"skills" },
    { label: "Experience",id:"experience"},
    { label: "Projects" , id:"projects"},
    { label: "Education", id:"education"},
    { label: "Contact", id:"contact"},
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] lg:px-[20vw]
      ${scrolled ? "bg-[#050414]/60 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      {/* MAIN BAR */}
      <div className="text-white h-16 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          Dhruv
          <span className="text-[#8245ec]">/</span>
          Kumar
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menulist.map((list) => (
            <li key={list.id}>
              <button
                onClick={() => savelist(list.id)}
                className={`hover:text-blue-600 transition ${
                  activelist === list.id ? "text-blue-600" : ""
                }`}
              >
                {list.label}
              </button>
            </li>
          ))}
        </ul>

        {/* DESKTOP ICONS */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            className="text-2xl hover:text-blue-600"
            href="https://github.com/Dhruvpersonal84"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="text-2xl hover:text-blue-600"
            href="https://www.linkedin.com/in/dhruv-kumarrr94/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
          {openmenubar ? (
            <FiX
              className="text-blue-600 text-2xl cursor-pointer"
              onClick={() => setmenubar(false)}
            />
          ) : (
            <FiMenu
              className="text-blue-600 text-2xl cursor-pointer"
              onClick={() => setmenubar(true)}
            />
          )}
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {openmenubar && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5 bg-[#050414]/80 backdrop-blur-lg rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-5 text-gray-300">
            {menulist.map((list) => (
              <li>
                <button
                  onClick={() => savelist(list.id)}
                  className={`hover:text-blue-600 ${
                    activelist === list.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  {list.label}
                </button>
              </li>
            ))}

            {/* MOBILE ICONS */}
            <div className="flex space-x-6 pt-3">
              <a href="https://github.com/Dhruvpersonal84" target="_blank" className="text-xl hover:text-blue-600 cursor-pointer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/dhruv-kumarrr94/" target="_blank" className="text-xl hover:text-blue-600 cursor-pointer"><FaLinkedin/></a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
