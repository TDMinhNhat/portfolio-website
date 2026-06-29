import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "~/redux/store";
import { setLanguage } from "~/redux/languageSlice";

import english from "../languages/en.json";
import vietnamese from "../languages/vn.json";

export default function useLanguage() {
    const languageState = useSelector((state: RootState) => state.language.value);
    const dispatch = useDispatch();

    const changeLanguage = (lang: string): void => {
        dispatch(setLanguage(lang));
    };

    function getLanguageState(): object {
        switch (languageState) {
            case "english":
                return english;
            case "vietnamese":
                return vietnamese;
            default:
                return english;
        }
    }

    const language = getLanguageState();

    return { languageState, language, changeLanguage };
}