import useTheme from "~/hooks/useTheme";

export default function TextComponent({ text, className }:{ text: string; className?: string }) {
    
    const theme = useTheme();
    
    return <p className={className} style={{
        color: theme.typography.colorPrimary,
        fontSize: theme.typography.fontSize
    }}>
        { text }
    </p>
}