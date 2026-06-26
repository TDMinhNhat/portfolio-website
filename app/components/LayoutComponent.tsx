import useTheme from "~/hooks/useTheme";

export default function LayoutComponent({ children }:{ children: React.ReactNode }) {
    
    const theme = useTheme();
    
    return (
        <div className="theme" data-theme={theme}>
            { children }
        </div>
    )
}