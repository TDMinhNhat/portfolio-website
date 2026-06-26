import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "~/redux/store";
import { setLanguage } from "~/redux/languageSlice";

export default function useLanguage() {
    const language = useSelector((state: RootState) => state.language.value);
    const dispatch = useDispatch();

    const changeLanguage = (lang: string) => {
        dispatch(setLanguage(lang));
    };

    return { language, changeLanguage };
}