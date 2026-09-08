import { Download } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { personal } from "@/data/personal";

const snapshot = [
    { label: "Role", value: "Full Stack Developer" },
    { label: "Focus", value: "MERN Stack Development" },
    { label: "Foundation", value: "Java + Data Structures & Algorithms" },
    { label: "Strength", value: "Problem Solving" },
    { label: "Approach", value: "User-Centric & Scalable Development" },
];

const About = () => (
    <section id="about" data-testid="about-section" className="relative py-24 lg:py-32" aria-label="About me">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading chapter="02" kicker="About Me" title="Engineer of useful things" />

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-7">
                    <Reveal>
                        <p className="font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                            I enjoy turning ideas into functional, scalable digital products.
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div className="mt-6 space-y-5 text-base leading-relaxed text-sub sm:text-lg">
                            <p>
                                As a Full Stack Developer, I work across the entire product surface — crafting
                                responsive interfaces, designing APIs, and modelling data — with the MERN stack as
                                my primary toolkit. What draws me to development is simple: taking a problem worth
                                solving and shipping something real that solves it.
                            </p>
                            <p>
                                My foundation is in Java and Data Structures & Algorithms. That grounding in how
                                software works under the hood shaped how I build for the web: structured,
                                performance-aware, and focused on understanding the problem before writing the
                                solution.
                            </p>
                            <p>
                                Through my internship at ZIDIO Development, an 8-week internship at Horizon Flare
                                India, and intensive full-stack training at RICR, I've worked with real development
                                teams — designing, building, testing and deploying features together, and learning
                                how production software actually ships.
                            </p>
                            <p>
                                I'm continuously sharpening my craft — exploring modern web architecture,
                                AI-powered application development, and better ways to build software that feels
                                effortless to use.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <a
                            href={personal.resumePath}
                            download
                            data-testid="about-download-resume"
                            className="group mt-9 inline-flex items-center gap-2 rounded-full border border-line/20 bg-panel/50 px-7 py-3.5 font-semibold text-ink transition-[border-color,transform] duration-300 hover:scale-[1.03] hover:border-sky-400/50"
                        >
                            <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                            Download Resume
                        </a>
                    </Reveal>
                </div>

                <div className="lg:col-span-5">
                    <Reveal delay={0.15}>
                        <div
                            className="glass-panel glow-border rounded-2xl p-8"
                            data-testid="developer-snapshot"
                        >
                            <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-600 dark:text-cyan-300">
                                Developer Snapshot
                            </p>
                            <dl className="mt-7 space-y-6">
                                {snapshot.map((row) => (
                                    <div
                                        key={row.label}
                                        className="flex flex-col gap-1 border-b border-line/10 pb-5 last:border-0 last:pb-0"
                                    >
                                        <dt className="font-mono text-[11px] uppercase tracking-widest text-faint">
                                            {row.label}
                                        </dt>
                                        <dd className="font-display text-base font-semibold text-ink">
                                            {row.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    </section>
);

export default About;
