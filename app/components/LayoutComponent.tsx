export default function LayoutComponent({ children, className }:{ children: React.ReactNode; className?: string }) {

    return (
        <div className={className} style={{
            
        }}>
            {children}
        </div>
    )
}