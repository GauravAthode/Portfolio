import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import About from "@/sections/About";
import Highlights from "@/sections/Highlights";
import Coding from "@/sections/Coding";
import Reveal from "@/components/Reveal";
import { useSEO } from "@/hooks/useSEO";

const AboutPage = () => {
    useSEO({
        title: "About | Gaurav Athode — Full Stack Developer",
        description:
            "About Gaurav Athode — a Full Stack Developer with a Java and DSA foundation, MERN stack expertise, and hands-on internship experience building scalable web applications.",
        path: "/about",
    });
    return (
    <div className="pt-20" data-testid="about-page">
        <About />
        <Highlights />
        <Coding />
        <section className="pb-28 pt-4">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="glass-panel glow-border flex flex-col items-start justify-between gap-8 rounded-3xl p-10 sm:flex-row sm:items-center sm:p-14">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-600 dark:text-cyan-300">
                                Next
                            </p>
                            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink sm:text-4xl">
                                See the work behind the words
                            </h2>
                            <p className="mt-3 max-w-lg text-sm leading-relaxed text-sub sm:text-base">
                                Four projects, four case studies — from an AI feedback platform to real-time chat.
                            </p>
                        </div>
                        <Link
                            to="/projects"
                            data-testid="about-page-projects-cta"
                            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-8 py-4 font-semibold text-white transition-[transform,box-shadow] duration-300 hover:scale-[1.04] hover:shadow-[0_0_36px_rgba(56,189,248,0.4)]"
                        >
                            View Projects
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    </div>
);
};

export default AboutPage;
