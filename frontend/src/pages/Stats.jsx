import { FolderKanban, Award, Code2, BriefcaseBusiness } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useSEO } from "@/hooks/useSEO";
import { projects } from "@/data/projects";
import { certifications, experience } from "@/data/journey";
import { skillCategories } from "@/data/skills";

const portfolioStats = [
    { Icon: FolderKanban, label: "Featured projects", value: projects.length, testId: "stats-projects" },
    { Icon: Award, label: "Certificates", value: certifications.length, testId: "stats-certificates" },
    {
        Icon: Code2,
        label: "Skills listed",
        value: skillCategories.reduce((total, category) => total + category.items.length, 0),
        testId: "stats-skills",
    },
    { Icon: BriefcaseBusiness, label: "Experience entries", value: experience.length, testId: "stats-experience" },
];

const Stats = () => {
    useSEO({
        title: "Portfolio Stats | Gaurav Athode",
        description: "A snapshot of Gaurav Athode's projects, skills, certificates, and experience.",
        path: "/stats",
        robots: "index,follow",
    });

    return (
        <div className="pt-32" data-testid="stats-page">
            <section className="pb-28" aria-label="Portfolio statistics">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        chapter="S"
                        kicker="Snapshot"
                        title="The work, in numbers."
                        description="A few grounded metrics from the projects, skills, certificates, and experience documented across this portfolio."
                    />
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {portfolioStats.map(({ Icon, label, value, testId }, i) => (
                            <Reveal key={label} delay={i * 0.08}>
                                <div className="glow-border rounded-2xl border border-line/12 bg-panel/60 p-7 backdrop-blur-sm" data-testid={testId}>
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 text-sky-500 dark:text-cyan-300">
                                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                                    </span>
                                    <p className="mt-5 font-display text-2xl font-bold text-ink">{value}</p>
                                    <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-faint">{label}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.15}>
                        <div className="mt-10 rounded-2xl border border-line/12 bg-panel/60 p-7 backdrop-blur-sm sm:p-9">
                            <h2 className="font-display text-lg font-semibold text-ink">A living snapshot</h2>
                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-sub sm:text-base">
                                These numbers come directly from the portfolio content and change as the work grows. There are no visitor counts, tracking pixels, or invented performance claims here.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Stats;
