export default function ImageComponent({ src, alt, width, height }:{ src: string; alt?: string; width?: number; height?: number }) {
    return (
        <img
            src={src}
            alt={alt}
            width={width ?? 'auto'}
            height={height ?? 'auto'}
            className="rounded-lg shadow-md"
        />
    )
}