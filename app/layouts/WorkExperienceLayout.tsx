export default function WorkExperienceLayout({ language, data }:{ language: object; data: object }) {
    return (
        <div className="w-full h-screen">
            <h1 className="text-3xl font-bold text-center">{language.title}</h1>
            
        </div>
    )
}