import { Layers, BrainCircuit, Briefcase, Sparkles, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { highlights } from "@/data/journey";

const iconMap = {
    layers: Layers,
    brain: BrainCircuit,
    briefcase: Briefcase,
    sparkles: Sparkles,
    users: Users,
};

const Highlights = () => (
    <section id="highlights" data-testid="highlights-section" className="relative py-24 lg:py-32" aria-label="Developer highlights">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
                chapter="01"
                kicker="Why Me"
                title="What I bring to a team"
                description="A full-stack toolkit backed by strong fundamentals, real team experience, and a problem-solving mindset."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map((h, i) => {
                    const Icon = iconMap[h.icon];
                    return (
                        <Reveal key={h.title} delay={i * 0.08}>
                            <div
                                data-testid={`highlight-card-${h.title.toLowerCase().replace(/\s+/g, "-")}`}
                                className="glow-border group h-full rounded-2xl border border-line/12 bg-panel/60 p-7 backdrop-blur-sm transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-sky-400/35 hover:shadow-[0_20px_50px_-20px_rgba(56,189,248,0.25)]"
                            >
                                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 text-sky-500 transition-transform duration-300 group-hover:scale-110 dark:text-cyan-300">
                                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                                </span>
                                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{h.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-sub">{h.text}</p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Highlights;
