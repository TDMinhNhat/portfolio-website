import { useCallback } from "react";
import type { JSX } from "react/jsx-runtime";

export default function TabContentSkillsLayout({
  language,
  data,
}: {
  language: object;
  data: object;
}) {

  function renderSkillSection(
    backgroundGradient: string,
    type: object,
    items: object[],
  ): JSX.Element {
    return (
      <div
        className={`w-full h-121 p-5 flex flex-col items-center gap-10 rounded-xl hover:shadow-xl transition-shadow duration-300`}
        style={{
          background: backgroundGradient
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <img src={type.image} alt={type.label} className="w-30 h-30" />
          <div className="mt-4 mb-4" />
          <h1 className="text-3xl font-bold text-center">{type.label}</h1>
        </div>

        <div
          className={`w-full grid grid-cols-3 gap-5`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center"
            >
              <img src={item.image} alt={item.name} className="w-10 h-10" />
              <span className="mt-3 text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
      {/* Languages */}
      {renderSkillSection("linear-gradient(180deg, #FFA0A0 0%,rgba(243, 113, 255, 1) 100%)", language.languages, data.languages)}

      {/* Backend */}
      {renderSkillSection("linear-gradient(180deg, #A1A3FF 0%, #7C87FF 100%)", language.backend, data.backend)}

      {/* Frontend */}
      {renderSkillSection("linear-gradient(180deg, #FBFFB0 0%, #FFFF60 100%)", language.frontend, data.frontend)}

      {/* Databases */}
      {renderSkillSection("linear-gradient(180deg, #FFA0A0 0%, #FF5757 100%)", language.databases, data.databases)}

      {/* Security */}
      {renderSkillSection("linear-gradient(180deg, #5CF2FD 0%, #00EAFF 100%)", language.security, data.security)}

      {/* Testing */}
      {renderSkillSection("linear-gradient(180deg, #B0FFBD 0%, #61FF7B 100%)", language.testing, data.testing)}

      {/* DevOps */}
      {renderSkillSection("linear-gradient(180deg, #FFDFB0 0%, #FFCE61 100%)", language.devops, data.devops)}

      {/* System Design */}
    </div>
  );
}
