import TabLayout from "~/layouts/TabLayout";
import type { Route } from "./+types/home";
import useLanguage from "~/hooks/useLanguage";
import EducationLayout from "~/layouts/EducationLayout";
import AboutLayout from "~/layouts/AboutLayout";
import WorkExperienceLayout from "~/layouts/WorkExperienceLayout";
import PersonalProjectLayout from "~/layouts/PersonalProjectLayout";
import FootLayout from "~/layouts/FootLayout";
import useDataLanguage from "~/hooks/useDataLanguage";
import { useRef } from "react";
import useTheme from "~/hooks/useTheme";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {

  const { theme, currentTheme, changeTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const { dataLanguage } = useDataLanguage();

  const tabHeadRef = useRef(null);

  return (
    <div className="relative size-full scroll-smooth">
      <div className="static bg-blue-50 size-full top-0 bottom-0 flex flex-col items-center">
        {/* Tab Header of website */}
        <div ref={tabHeadRef} className="w-full bg-red-50">
          <TabLayout language={language.tab_layout} changeLanguage={changeLanguage} theme={theme} changeTheme={changeTheme} />
        </div>

        {/* Education Layout */}
        <div className="w-full">
          <EducationLayout language={language.education} data={dataLanguage.education} />
        </div>
      </div>
    </div>
  )
}
