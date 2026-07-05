export default function PersonalProjectLayout({
  language,
  data,
}: {
  language: object;
  data: object[];
}) {
  return (
    <div
      id="personal-project"
      className="w-full h-screen flex flex-col items-center gap-20"
    >
      <h1 className="text-3xl font-bold mb-4">{language.title}</h1>

      <div className="w-5/6 flex flex-col gap-20">
        {data.map((project: object, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center bg-gray-100 rounded-lg shadow-md gap-10 p-10"
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <div className="flex flex-row gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span key={index} className="text-sm text-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  {project.description.map((desc: string, index: number) => {
                    return (
                      <span key={index} className="text-sm text-start">
                        {index+1}. {desc}
                      </span>
                    );
                  })}
                  <span className="text-sm text-gray-600">
                    {language.team_size}: {project.team_size}
                  </span>
                </div>
              </div>

              <img
                src={project.icon}
                alt={project.name}
                className="h-50 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
