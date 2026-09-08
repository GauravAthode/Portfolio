import { Code2, Layout, Server, Database, Wrench, Cloud, BrainCircuit } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { skillCategories } from "@/data/skills";

const iconMap = {
    code: Code2,
    layout: Layout,
    server: Server,
    database: Database,
    wrench: Wrench,
    cloud: Cloud,
    brain: BrainCircuit,
};

const Skills = () => (
    <section id="skills" data-testid="skills-section" className="relative py-24 lg:py-32" aria-label="Skills">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/8 blur-[160px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
                chapter="03"
                kicker="Skills"
                title="Tools of the trade"
                description="A focused stack for building complete web applications — no vanity metrics, just technologies I actually work with."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((cat, i) => {
                    const Icon = iconMap[cat.icon];
                    const wide = cat.key === "core";
                    return (
                        <Reveal
                            key={cat.key}
                            delay={i * 0.07}
                            className={wide ? "sm:col-span-2 lg:col-span-3" : ""}
                        >
                            <div
                                data-testid={`skills-category-${cat.key}`}
                                className="glow-border group h-full rounded-2xl border border-line/12 bg-panel/60 p-7 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-sky-400/35 hover:shadow-[0_20px_50px_-20px_rgba(56,189,248,0.22)]"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 text-sky-500 transition-transform duration-300 group-hover:scale-110 dark:text-cyan-300">
                                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                                    </span>
                                    <h3 className="font-display text-lg font-semibold text-ink">{cat.label}</h3>
                                </div>
                                <ul className={`mt-6 flex flex-wrap gap-2.5 ${wide ? "lg:gap-3" : ""}`}>
                                    {cat.items.map((item) => (
                                        <li
                                            key={item}
                                            className="cursor-default rounded-full border border-line/15 bg-canvas/60 px-4 py-2 font-mono text-xs text-sub transition-[border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-sky-400/50 hover:text-ink"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Skills;
