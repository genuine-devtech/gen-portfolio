import type { ReactNode } from "react";

function Chip({ children }: { children: ReactNode}) {
    return (
        <span className = "inline-flex items-center rounded-full border border-border bg-[#1f1f24] px-2.5 text-[13px] font-medium text-foreground">
            {children}
        </span>
    );
}

const socials = [
    {label: "github", href: "https://github.com/genuine-devtech"},
    { label: "linkedin", href: "#"},
    { label: "facebook", href: "#"},
    { label: "instagram", href: "#"},
];

export default function Hero() {
    return (
        <section id = "top" className = "flex flex-wrap items-center gap-10">
            <div className = "flex h-56 w-56 shrik-0 items-end justify-center bg-surface pb-3 font-mono text-xs text-subtle">
                [my photo here]
            </div>

            <div className = "flex min-w-[280px] flex-1 flex-col gap-4">
                <h1 className = "font-mono text-4x1"> Genuine Espiritu </h1>

                <p className = "leading-loose text-muted">
                    
                </p>
            </div>
        </section> 
    )
}
