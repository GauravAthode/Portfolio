import { TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import { currentlyLearning } from "@/data/journey";

const Learning = () => (
    <section id="learning" data-testid="learning-section" className="relative py-20 lg:py-24" aria-label="Currently learning">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
                <div className="glass-panel rounded-3xl px-8 py-10 sm:px-12 sm:py-12">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-sm">
                            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-sky-600 dark:text-cyan-300">
                                <TrendingUp className="h-4 w-4" />
                                09 · Growth
                            </p>
                            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                                Currently learning, always improving
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-sub sm:text-base">
                                The stack keeps evolving — so do I. These are the themes I'm actively deepening
                                right now.
                            </p>
                        </div>
                        <ul className="flex max-w-2xl flex-wrap gap-2.5" aria-label="Currently learning topics">
                            {currentlyLearning.map((topic) => (
                                <li
                                    key={topic}
                                    className="cursor-default rounded-full border border-line/15 bg-canvas/60 px-4 py-2 font-mono text-xs text-sub transition-[border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-sky-400/50 hover:text-ink"
                                >
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);

export default Learning;
