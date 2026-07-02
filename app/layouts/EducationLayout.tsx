import { useEffect, useState } from "react";

export default function EducationLayout({
  language,
  data,
}: {
  language: object;
  data: object[];
}) {

  const [educationIndex, setEducationIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setEducationIndex((prevIndex) => prevIndex < data.length - 1 ? prevIndex + 1 : 0);
    }, 5000);
  }, [])

  return (
    <div className="w-full h-fit flex flex-col justify-center items-center bg-blue-50 gap-10">
      <h1 className="text-3xl font-bold text-center">{language.title}</h1>
      <div className="w-5/6 h-full flex flex-row p-5 items-center justify-between">
        {/* Button back */}
        <img
          src="/images/previous.png"
          alt="Previous"
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={() => setEducationIndex(educationIndex > 0 ? educationIndex - 1 : data.length - 1)}
        />

        {/* Render data */}
        <div className="bg-white w-5/6 h-fit flex flex-row justify-center items-center rounded-lg shadow-md overflow-y-auto">
          <div className="flex-1 flex flex-col items-center gap-8">
            <img
              src={data[educationIndex].school.logo}
              alt={data[educationIndex].school.name}
              className="h-24 object-contain"
            />

            <div className="w-full flex flex-col items-center text-center">
              <h2 className="text-xl font-bold">
                {data[educationIndex].school.name} - {data[educationIndex].code}
              </h2>
              <h3 className="text-md font-semibold">
                {data[educationIndex].degree.major} -{" "}
                {data[educationIndex].degree.name}
              </h3>
              <p className="text-sm">
                {data[educationIndex].duration.start} -{" "}
                {data[educationIndex].duration.end &&
                data[educationIndex].duration.end !== "Current"
                  ? data[educationIndex].duration.end
                  : language.duration.current}
              </p>
            </div>
          </div>

          <img
            src={data[educationIndex].school.background}
            alt={data[educationIndex].school.name}
            width={400}
            height={400}
            className="flex-1 object-cover"
          />
        </div>

        {/* Button next */}
        <img
          src="/images/next.png"
          alt="Next"
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={() =>
            setEducationIndex(
              educationIndex < data.length - 1 ? educationIndex + 1 : 0,
            )
          }
        />
      </div>
    </div>
  );
}
