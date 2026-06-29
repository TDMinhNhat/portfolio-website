import { useRef } from "react";
import ImageComponent from "~/components/ImageComponent";

export default function EducationLayout({
  language,
  data,
}: {
  language: object;
  data: object[];
}) {
  return (
    <div
      id="education"
      className="w-full flex flex-col justify-center items-center bg-blue-50"
    >
      <div>
        <h1>{language.title}</h1>
      </div>
      <div className="w-5/6 flex flex-col justify-center items-center">
        {
          data.map((item, index) => {
            return (
              <div key={index} className="w-full m-4 p-4 flex flex-row justify-between items-center border border-gray-300 rounded-lg shadow-md">
                <div className="flex-1 flex flex-col items-center">
                  <img
                    src={item.school.logo}
                    alt={item.school.name}
                    className="h-24 object-contain"
                  />

                  <div className="w-full flex flex-col items-start">
                    <h2 className="text-xl font-bold">{item.school.name} - {item.code}</h2>
                    <h3 className="text-md font-semibold">{item.degree.major} - {item.degree.name}</h3>
                    <p className="text-sm">{item.duration.start} - {item.duration.end && item.duration.end !== "Current" ? item.duration.end : language.duration.current}</p>
                  </div>
                </div>

                <img
                  src={item.school.background}
                  alt={item.school.name}
                  width={400} height={400}
                  className="flex-1 object-cover"
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
