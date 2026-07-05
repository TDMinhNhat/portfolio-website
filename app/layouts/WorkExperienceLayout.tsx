export default function WorkExperienceLayout({
  language,
  data,
}: {
  language: object;
  data: object;
}) {
  return (
    <div className="w-full flex flex-col items-center gap-20">
      <h1 className="text-3xl font-bold text-center">{language.title}</h1>

      <div className="w-full flex flex-col items-center gap-20">
        {data.map((item: object, index: number) => (
          <div
            key={index}
            className="w-5/6 flex flex-row items-center gap-10 bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold">{item.company_name}</h1>
                <div>{item.position}</div>
                <div>
                  {item.duration.start} -{" "}
                  {item.duration.end || item.duration.present}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {item.role_description.map((desc: string, index: number) => (
                  <span
                    key={index}
                    className="text-center text-sm text-gray-600"
                  >
                    {index + 1}. {desc}
                  </span>
                ))}
              </div>
            </div>
            <img
              src={item.icon}
              alt={item.company_name}
              className="w-1/2 h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
