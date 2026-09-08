import { Code2, Github, ArrowUpRight, Terminal } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { personal } from "@/data/personal";

const pillars = [
    "Data Structures & Algorithms",
    "Java",
    "Core Java",
    "Object-Oriented Programming",
    "Problem Solving",
];

const Coding = () => (
    <section id="coding" data-testid="coding-section" className="relative py-24 lg:py-32" aria-label="Coding and problem solving">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
                chapter="08"
                kicker="Problem Solving"
                title="Beyond building applications"
                description="Frameworks change; fundamentals compound. My engineering base is built on algorithms, data structures and core Java — the skills that make every other tool sharper."
            />

            <div className="grid gap-6 lg:grid-cols-2">
                <Reveal>
                    <div className="glass-panel glow-border h-full rounded-2xl p-8" data-testid="problem-solving-pillars">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 text-sky-500 dark:text-cyan-300">
                                <Terminal className="h-5 w-5" strokeWidth={1.8} />
                            </span>
                            <h3 className="font-display text-lg font-semibold text-ink">Core foundations</h3>
                        </div>
                        <ul className="mt-7 space-y-4">
                            {pillars.map((pillar, i) => (
                                <li key={pillar} className="flex items-center gap-4">
                                    <span className="font-mono text-xs text-faint">0{i + 1}</span>
                                    <span className="h-px flex-1 bg-line/10" aria-hidden="true" />
                                    <span className="font-display text-sm font-medium text-ink sm:text-base">
                                        {pillar}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>

                <div className="grid gap-6">
                    <Reveal delay={0.1}>
                        <a
                            href={personal.socials.leetcode}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="leetcode-profile-cta"
                            className="glow-border group flex items-center justify-between gap-6 rounded-2xl border border-line/12 bg-panel/60 p-8 backdrop-blur-sm transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_20px_50px_-20px_rgba(56,189,248,0.25)]"
                            aria-label="View Gaurav's LeetCode profile (opens in new tab)"
                        >
                            <div className="flex items-center gap-5">
                                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 text-amber-500 dark:text-amber-300">
                                    <Code2 className="h-6 w-6" strokeWidth={1.8} />
                                </span>
                                <div>
                                    <h3 className="font-display text-lg font-semibold text-ink">LeetCode</h3>
                                    <p className="mt-1 text-sm text-sub">
                                        Where I practice DSA and sharpen algorithmic thinking.
                                    </p>
                                </div>
                            </div>
                            <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-sky-600 dark:text-cyan-300">
                                View Profile
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                        </a>
                    </Reveal>
                    <Reveal delay={0.18}>
                        <a
                            href={personal.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="github-profile-cta"
                            className="glow-border group flex items-center justify-between gap-6 rounded-2xl border border-line/12 bg-panel/60 p-8 backdrop-blur-sm transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_20px_50px_-20px_rgba(168,85,247,0.25)]"
                            aria-label="Explore Gaurav's GitHub (opens in new tab)"
                        >
                            <div className="flex items-center gap-5">
                                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-500/20 to-slate-700/20 text-ink">
                                    <Github className="h-6 w-6" strokeWidth={1.8} />
                                </span>
                                <div>
                                    <h3 className="font-display text-lg font-semibold text-ink">GitHub</h3>
                                    <p className="mt-1 text-sm text-sub">
                                        Source code for every project on this site — real repos, real commits.
                                    </p>
                                </div>
                            </div>
                            <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-violet-500 dark:text-violet-300">
                                Explore
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                        </a>
                    </Reveal>
                </div>
            </div>
        </div>
    </section>
);

export default Coding;
