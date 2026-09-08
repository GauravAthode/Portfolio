import { GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { education } from "@/data/journey";

const Education = () => (
    <section id="education" data-testid="education-section" className="relative py-24 lg:py-32" aria-label="Education">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading chapter="06" kicker="Education" title="Academic foundation" />

            <div className="relative mx-auto max-w-3xl">
                <div
                    className="absolute bottom-6 left-[19px] top-2 w-px bg-gradient-to-b from-violet-500/50 via-sky-400/30 to-transparent sm:left-[23px]"
                    aria-hidden="true"
                />
                <ol className="space-y-10">
                    {education.map((edu, i) => (
                        <li key={edu.school} className="relative pl-14 sm:pl-16">
                            <Reveal delay={i * 0.12}>
                                <span
                                    className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-line/20 bg-panel sm:h-12 sm:w-12"
                                    aria-hidden="true"
                                >
                                    <GraduationCap className="h-4 w-4 text-faint" strokeWidth={1.8} />
                                </span>
                                <article
                                    data-testid={`education-item-${i}`}
                                    className="glow-border rounded-2xl border border-line/12 bg-panel/60 p-6 backdrop-blur-sm transition-[border-color] duration-300 hover:border-sky-400/35 sm:p-8"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <span className="rounded-full bg-canvas/80 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-faint">
                                            {edu.period}
                                        </span>
                                        <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-sky-600 dark:text-cyan-300">
                                            {edu.result}
                                        </span>
                                    </div>
                                    <h3 className="mt-4 font-display text-xl font-bold text-ink">{edu.degree}</h3>
                                    <p className="mt-1.5 text-sm font-medium text-sub sm:text-base">{edu.school}</p>
                                    <p className="mt-3 flex items-center gap-1.5 text-sm text-faint">
                                        <MapPin className="h-3.5 w-3.5" />
                                        {edu.location}
                                    </p>
                                </article>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    </section>
);

export default Education;
