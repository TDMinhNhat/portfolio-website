import { useDispatch, useSelector } from "react-redux";
import { theme } from "../constant/theme";
import type { RootState } from "~/redux/store";
import { setTheme } from "~/redux/themeSlice";

export default function useTheme() {

    const currentTheme: string = useSelector((state: RootState) => state.theme.value);
    const dispatch = useDispatch();

    function changeTheme(themeName: string) {
        dispatch(setTheme(themeName));
    }

    return { theme: theme[currentTheme], currentTheme, changeTheme };
}