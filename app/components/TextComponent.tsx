import useTheme from "~/hooks/useTheme";

export default function TextComponent({ text }:{ text: string }) {
    
    const theme = useTheme();
    
    return (
        <p>{ text }</p>
    )
}