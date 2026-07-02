export default function WelcomeLayout({
  data,
}: {
  data: object;
}) {
  return (
    <div className="relative size-full">
      {/* Background Decoration */}
      <div className="relative h-screen">
        <div className="absolute inset-0 opacity-25 bg-[url('/images/about/white_bg.png')] bg-cover bg-no-repeat bg-center" />
        <div className="absolute size-full p-8 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-black">
            {data.full_name_vn}
          </h1>
          <p className="text-lg text-gray-600">{data.subtitle}</p>
          <div className="mt-2 mb-2" />
          <p className="w-1/2 text-md text-black text-center">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
