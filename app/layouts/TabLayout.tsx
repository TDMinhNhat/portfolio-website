import React, { useEffect, useRef } from "react";

export default function TabLayout({
  language,
  changeLanguage,
  theme,
  changeTheme,
}: {
  language: object;
  changeLanguage: (lang: string) => void;
  theme: string;
  changeTheme: (theme: string) => void;
}) {

  // Reference
  const tabChangeLanguageRef = useRef<HTMLUListElement>(null);
  const themeChangeThemeRef = useRef<HTMLImageElement>(null);

  // Function
  function handleChangeLanguage(language: string): void {
    changeLanguage(language);
    if (tabChangeLanguageRef.current) {
      tabChangeLanguageRef.current.classList.add("hidden");
    } else {
      console.error("tabChangeLanguageRef is null");
    }
  }

  return (
    <div className="w-full flex flex-row justify-around items-center">
      {/* Left - Logo and Name */}
      <div
        className="flex flex-row items-center"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src="/images/avatar.png"
          alt="Logo"
          className="w-8 h-8 m-2 rounded-full cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <span
          className="text-lg font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Nhat's Portfolio
        </span>
      </div>

      {/* Middle - Navigation Tab */}
      <div className="w-1/2 flex flex-row justify-between">
        <a
          href="#about"
          className="flex-1 p-4 text-center cursor-pointer hover:bg-red-200"
        >
          {language.about}
        </a>
        <a
          href="#education"
          className="flex-1 p-4 text-center cursor-pointer hover:bg-red-200"
        >
          {language.education}
        </a>
        <a
          href="#work-experience"
          className="flex-1 p-4 text-center cursor-pointer hover:bg-red-200"
        >
          {language.work_experience}
        </a>
        <a
          href="#personal-project"
          className="flex-1 p-4 text-center cursor-pointer hover:bg-red-200"
        >
          {language.personal_project}
        </a>
      </div>

      {/* Right - Function Buttons */}
      <div className="flex flex-row justify-end items-center">
        <div className="relative">
          <img
            src="/images/change_language.png"
            alt="Change Language"
            className="w-6 h-6 cursor-pointer"
            onClick={() => {
              if (tabChangeLanguageRef.current) {
                tabChangeLanguageRef.current.classList.toggle("hidden");
              } else {
                console.error("tabChangeLanguageRef is null");
              }
            }}
          />
          <ul
            ref={tabChangeLanguageRef}
            className="w-36 absolute hidden left-0 top-0 bg-white shadow-lg rounded-lg mt-5 -ml-15"
          >
            <li
              className="flex flex-row items-center p-4 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleChangeLanguage("english")}
            >
              <img
                src="/images/english_uk_ball.png"
                alt="English"
                className="w-4 h-4 inline mr-2"
              />
              English
            </li>
            <li className="border-b border-gray-300" />
            <li
              className="flex flex-row items-center p-4 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleChangeLanguage("vietnamese")}
            >
              <img
                src="/images/vietnam_ball.png"
                alt="Vietnamese"
                className="w-4 h-4 inline mr-2"
              />
              Vietnamese
            </li>
          </ul>
        </div>

        <img
          ref={themeChangeThemeRef}
          src="/images/light_mode.png"
          alt="Light Mode"
          className="w-6 h-6 ml-5 cursor-pointer"
          onClick={() => {
            if(themeChangeThemeRef.current) {
              if (themeChangeThemeRef.current.src.includes("light_mode.png")) {
                themeChangeThemeRef.current.src = "/images/dark_mode.png";
                changeTheme("dark");
              } else {
                themeChangeThemeRef.current.src = "/images/light_mode.png";
                changeTheme("light");
              }
            } else {
              console.error("themeChangeThemeRef is null");
            }
          }}
        />
      </div>
    </div>
  );
}
