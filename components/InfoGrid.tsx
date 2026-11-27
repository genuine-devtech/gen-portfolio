const badges = [
    {title: "Douglas College", label: "CSIS Diploma 2027 "},
    {title: "Surrey BC", label: "Based in" },
    { title: "[Badge]", label: "[Label]"},
];

const stats = [
    { value : "[00+]", label: "Design"},
    { value: "[0]", label: "Client projects" },
    { value: "[0+ years]", label: "Designing" },
];

export default function InfoGrid() {
    return (
        <div className = "mt-16 border-y border-border">
            <div className = "grid grid-cols-3 divide-x divide-border">
                {badges.map((badge) => (
                    <div key = {badge.title} className = "flex flex-col gap-0.5 px-4 py-4 first:pl-0">
                        <span className = "text-[13px] fonr-semibold">{badge.title}</span>
                        <span className = "font-mono text-[11px] uppercase text-subtle">
                            {badge.label}
                        </span>
                    </div>
                ))}
            </div>

        <div className = "grid grid-cols-3 divide-x divide-border border-t border-border">
            {stats.map((stat) => (
                <div key = {stat.label} className = "flex flex-col gap-1 px-4 py-4 first:pl-0">
                    <span className = "font-mono text-2x1">{stat.value}</span>
                    <span className = "font-mono text[11px] uppercase text-subtle">
                        {stat.label}
                    </span>
                </div>
            ))}
            </div>
        </div>
    );
}