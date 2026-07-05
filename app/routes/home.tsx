import TabLayout from "~/layouts/TabLayout";
import type { Route } from "./+types/home";
import useLanguage from "~/hooks/useLanguage";
import EducationLayout from "~/layouts/EducationLayout";
import AboutLayout from "~/layouts/AboutLayout";
import WorkExperienceLayout from "~/layouts/WorkExperienceLayout";
import PersonalProjectLayout from "~/layouts/PersonalProjectLayout";
import FootLayout from "~/layouts/FootLayout";
import useDataLanguage from "~/hooks/useDataLanguage";
import { useEffect, useRef } from "react";
import useTheme from "~/hooks/useTheme";
import WelcomeLayout from "~/layouts/WelcomeLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nhat's Portfolio Website" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const { language, changeLanguage } = useLanguage();
  const { dataLanguage } = useDataLanguage();

  return (
    <div className="relative size-full scroll-smooth">
      <div className="static bg-blue-50 size-full top-0 bottom-0 flex flex-col items-center">
        {/* Tab Header of website */}
        <div className="w-full sticky left-0 top-0 right-0 bg-white z-10 shadow-2xl">
          <TabLayout language={language.tab_layout} changeLanguage={changeLanguage} />
        </div>

        {/* Welcome Layout */}
        <div className="size-full">
          <WelcomeLayout data={dataLanguage.welcome} />
        </div>

        <div id="about" className="mt-20 mb-20"/>

        {/* About Layout */}
        <div className="size-full">
          <AboutLayout language={language.about} data={dataLanguage.about} />
        </div>

        <div id="education" className="mt-20 mb-20"/>

        {/* Education Layout */}
        <div className="size-full">
          <EducationLayout language={language.education} data={dataLanguage.education} />
        </div>

        <div id="work-experience" className="mt-20 mb-20"/>

        {/* Work Experience Layout */}
        <div className="size-full">
          <WorkExperienceLayout language={language.work_experience} data={dataLanguage.work_experience} />
        </div>

        <div id="personal-project" className="mt-20 mb-20"/>

        {/* Personal Project Layout */}
        <div className="size-full">
          <PersonalProjectLayout language={language.personal_project} data={dataLanguage.personal_project} />
        </div>
      </div>
    </div>
  )
}
