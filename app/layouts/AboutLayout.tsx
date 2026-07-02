import { useEffect, useRef, useState } from "react";
import useTheme from "~/hooks/useTheme";
import TabContentCertificatesLayout from "./about/TabContentCertificatesLayout";
import TabContentSkillsLayout from "./about/TabContentSkillsLayout";
import TabContentInformationLayout from "./about/TabContentInformationLayout";

export default function AboutLayout({
  language,
  data,
}: {
  language: object;
  data: object;
}) {

    // States
    const [tabSelected, setTabSelected] = useState("information");

  // Hooks
  const { theme, currentTheme } = useTheme();

  return (
    <div className="relative size-full">
      <div className="relative size-full flex flex-col items-center gap-12">
        <div className={`text-4xl font-bold text-center`}>
          {language.title}
        </div>

        {/* Tabs */}
        <div className="top-20 w-fit flex flex-row justify-center items-center border-2 border-gray-300 rounded-full">
            { language.tabs.map((tab: string, index: number) => (
                <div key={index} className={`p-3 w-50 text-center cursor-pointer ${tab.toLowerCase() === tabSelected ? 'bg-blue-100 outline-red-100 outline-4' : ''} ${index === 0 ? 'rounded-l-full' : index === language.tabs.length - 1 ? 'rounded-r-full' : ''} hover:bg-blue-200`} onClick={() => setTabSelected(tab.toLowerCase())}>
                    {tab}
                </div>
            ))}
        </div>

        {/* Render content follow the tab selected */}
        <div className="size-full flex flex-row justify-center">
            { tabSelected === "information" && <TabContentInformationLayout language={language.information} data={data.information} /> }
            { tabSelected === "skills" && <TabContentSkillsLayout language={language.skills} data={data.skills} /> }
            { tabSelected === "certificates" && <TabContentCertificatesLayout /> }
        </div>
      </div>
    </div>
  );
}
