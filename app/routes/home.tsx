import TabLayout from "~/layouts/TabLayout";
import type { Route } from "./+types/home";
import useLanguage from "~/hooks/useLanguage";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {

  const { language, setLanguage } = useLanguage();

  return (
    <div className="">
      <TabLayout language={language.tab_layout} />
    </div>
  )
}
