import useLanguage from "./useLanguage";

import englishData from "../data/data_en.json";
import vietnameseData from "../data/data_vn.json";

export default function useDataLanguage() {

    const { languageState } = useLanguage();

    function getLanguageData(): object {
        switch(languageState) {
            case "english": {
                return englishData;
            }
            case "vietnamese": {
                return vietnameseData;
            }
            default: {
                return englishData;
            }
        }
    }

    return { dataLanguage: getLanguageData() };
}