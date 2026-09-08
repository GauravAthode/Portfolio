import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/journey";

const Experience = () => (
    <section id="experience" data-testid="experience-section" className="relative py-24 lg:py-32" aria-label="Experience">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
                chapter="04"
                kicker="Experience"
                title="Where I've worked & learned"
                description="Real teams, real codebases, real delivery — from structured training to production internships."
            />

            <div className="relative mx-auto max-w-3xl">
                <div
                    className="absolute bottom-6 left-[19px] top-2 w-px bg-gradient-to-b from-sky-400/60 via-violet-500/40 to-transparent sm:left-[23px]"
                    aria-hidden="true"
                />
                <ol className="space-y-12">
                    {experience.map((job, i) => (
                        <li key={job.company} className="relative pl-14 sm:pl-16">
                            <Reveal delay={i * 0.1}>
                                <span
                                    className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border sm:h-12 sm:w-12 ${
                                        job.current
                                            ? "border-sky-400/50 bg-sky-400/10 shadow-[0_0_24px_rgba(56,189,248,0.35)]"
                                            : "border-line/20 bg-panel"
                                    }`}
                                    aria-hidden="true"
                                >
                                    <Briefcase
                                        className={`h-4 w-4 ${job.current ? "text-sky-500 dark:text-cyan-300" : "text-faint"}`}
                                        strokeWidth={1.8}
                                    />
                                </span>
                                <article
                                    data-testid={`experience-item-${i}`}
                                    className="glow-border rounded-2xl border border-line/12 bg-panel/60 p-6 backdrop-blur-sm transition-[border-color] duration-300 hover:border-sky-400/35 sm:p-8"
                                >
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span
                                            className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-widest ${
                                                job.current
                                                    ? "bg-emerald-400/10 text-emerald-500 dark:text-emerald-300"
                                                    : "bg-canvas/80 text-faint"
                                            }`}
                                        >
                                            {job.current ? "Current · " : ""}
                                            {job.period}
                                        </span>
                                    </div>
                                    <h3 className="mt-4 font-display text-xl font-bold text-ink sm:text-2xl">
                                        {job.role}
                                    </h3>
                                    <p className="mt-1 text-sm font-medium text-sky-600 dark:text-cyan-300">
                                        {job.company}
                                    </p>
                                    <ul className="mt-5 space-y-3">
                                        {job.points.map((point) => (
                                            <li key={point.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-sub sm:text-base">
                                                <span className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" aria-hidden="true" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
                                        {job.tags.map((tag) => (
                                            <li
                                                key={tag}
                                                className="rounded-full border border-line/15 px-3 py-1 font-mono text-[11px] text-faint"
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    </section>
);

export default Experience;
