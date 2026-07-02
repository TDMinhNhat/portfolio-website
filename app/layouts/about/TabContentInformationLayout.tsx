export default function TabContentInformationLayout({
  language,
  data,
}: {
  language: object;
  data: object;
}) {
  return (
    <div className="w-1/2 h-fit flex flex-row items-center bg-white rounded-lg shadow-lg p-6">
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-row items-center">
          <img
            src="/images/about/information/fullname_label.png"
            alt="Full Name"
            className="w-10 h-10"
          />
          <h3 className="ml-4">{data.full_name}</h3>
        </div>
        <div className="flex flex-row items-center">
          <img
            src="/images/about/information/birth_date_label.png"
            alt="Date of Birth"
            className="w-10 h-10"
          />
          <h3 className="ml-4">{data.date_of_birth}</h3>
        </div>
        <div className="flex flex-row items-center">
          <img
            src="/images/about/information/location_label.png"
            alt="Location"
            className="w-10 h-10"
          />
          <h3 className="ml-4">{data.location}</h3>
        </div>
        <div className="flex flex-row items-center">
          <img
            src="/images/about/information/email_label.png"
            alt="Email"
            className="w-10 h-10"
          />
          <h3 className="ml-4">{data.email}</h3>
        </div>
        <div className="flex flex-row items-center">
          <img
            src="/images/about/information/phone_label.png"
            alt="Phone"
            className="w-10 h-10"
          />
          <h3 className="ml-4">{data.phone}</h3>
        </div>
        <div className="flex flex-row items-center">
          <img
            src="/images/about/information/github_label.png"
            alt="Website"
            className="w-10 h-10"
          />
          <h3 className="ml-4">
            <a className="text-blue-500 hover:underline" href={data.social_links.github} target="_blank" rel="noopener noreferrer">
                {language.social_links.github_click}
            </a>
          </h3>
        </div>
        <div className="flex flex-row items-center">
          <img
            src="/images/about/information/linkedIn_label.png"
            alt="LinkedIn"
            className="w-10 h-10"
          />
          <h3 className="ml-4">
            <a className="text-blue-500 hover:underline" href={data.social_links.linkedIn} target="_blank" rel="noopener noreferrer">
                {language.social_links.linkedIn_click}
            </a>
          </h3>
        </div>
      </div>

      <div className="flex-1 flex flex-row items-center justify-center">
        <img
          src="/images/avatar.png"
          alt="avatar"
          className="w-1/2 h-1/2 rounded-full"
        />
      </div>
    </div>
  );
}
