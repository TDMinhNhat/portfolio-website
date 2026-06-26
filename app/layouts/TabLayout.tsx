import useLanguage from "~/hooks/useLanguage"

export default function TabLayout({ language }:{ language: object }) {

    return (
        <div className="fixed w-full inset-x-0 top-0 flex flex-row justify-around bg-red-50">
            <div>{language.about}</div>
            <div>{language.education}</div>
            <div>{language.work_experience}</div>
            <div>{language.personal_project}</div>
        </div>
    )
}