import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download, ChevronDown } from "lucide-react";
import { personal } from "@/data/personal";
import { scrollToId } from "@/hooks/useSmoothScroll";
import ProfileBadge from "@/components/ProfileBadge";
import SocialLinks from "@/components/SocialLinks";

const headlineLines = [
    { id: "l1", content: "Building digital" },
    { id: "l2", content: "experiences that solve" },
    { id: "l3", content: "real problems.", gradient: true },
];

const Hero = () => {
    const reduce = useReducedMotion();
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const visualY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 110]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);

    return (
        <section
            id="home"
            ref={sectionRef}
            data-testid="hero-section"
            className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-32 lg:pt-36"
            aria-label="Introduction"
        >
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-sky-500/12 blur-[140px]" />
                <div className="absolute right-[-15%] top-[30%] h-[560px] w-[560px] rounded-full bg-violet-600/12 blur-[160px]" />
                <div className="bg-grid-faint absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
                    <motion.div style={{ y: textY }} className="lg:col-span-7">
                        {/* Availability badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.05 }}
                        >
                            <span
                                className="glass-panel inline-flex items-center gap-2.5 rounded-full px-4 py-2"
                                data-testid="availability-badge"
                            >
                                <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-sub">
                                    Available for opportunities
                                </span>
                            </span>
                        </motion.div>

                        {/* Masked line-by-line headline */}
                        <h1
                            className="mt-8 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
                            data-testid="hero-headline"
                        >
                            <span className="sr-only">Building digital experiences that solve real problems.</span>
                            <span aria-hidden="true">
                                {headlineLines.map((line, i) => (
                                    <span key={line.id} className="block overflow-hidden pb-1">
                                        <motion.span
                                            className={`block ${line.gradient ? "text-gradient" : ""}`}
                                            initial={reduce ? { opacity: 0 } : { y: "112%" }}
                                            animate={reduce ? { opacity: 1 } : { y: 0 }}
                                            transition={{
                                                duration: 0.9,
                                                delay: 0.25 + i * 0.14,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                        >
                                            {line.content}
                                        </motion.span>
                                    </span>
                                ))}
                            </span>
                        </h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.75 }}
                        >
                            <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1">
                                <span className="font-display text-lg font-semibold text-ink sm:text-xl">
                                    {personal.name}
                                </span>
                                <span className="h-1 w-1 rounded-full bg-faint" aria-hidden="true" />
                                <span className="font-mono text-sm uppercase tracking-[0.2em] text-sky-600 dark:text-cyan-300">
                                    {personal.title}
                                </span>
                            </p>
                            <p className="mt-5 max-w-xl text-base leading-relaxed text-sub sm:text-lg">
                                Full Stack Developer focused on building scalable, user-centric web applications
                                with modern technologies and strong problem-solving foundations.
                            </p>

                            {/* CTAs */}
                            <div className="mt-10 flex flex-wrap items-center gap-4">
                                <button
                                    type="button"
                                    onClick={() => scrollToId("projects")}
                                    data-testid="hero-cta-view-work"
                                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-7 py-3.5 font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-[transform,box-shadow] duration-300 hover:scale-[1.04] hover:shadow-[0_0_44px_rgba(56,189,248,0.45)]"
                                >
                                    View My Work
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                                <a
                                    href={personal.resumePath}
                                    download
                                    data-testid="hero-cta-download-resume"
                                    className="group inline-flex items-center gap-2 rounded-full border border-line/20 bg-panel/50 px-7 py-3.5 font-semibold text-ink backdrop-blur-sm transition-[border-color,transform] duration-300 hover:scale-[1.04] hover:border-sky-400/50"
                                >
                                    <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                                    Download Resume
                                </a>
                                <button
                                    type="button"
                                    onClick={() => scrollToId("contact")}
                                    data-testid="hero-cta-connect"
                                    className="group inline-flex items-center gap-1.5 px-2 py-3.5 font-semibold text-sub transition-colors duration-300 hover:text-ink"
                                >
                                    Let's Connect
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </button>
                            </div>

                            <SocialLinks className="mt-10" size="lg" />
                        </motion.div>
                    </motion.div>

                    {/* Right visual with parallax */}
                    <motion.div style={{ y: visualY }} className="lg:col-span-5">
                        <ProfileBadge />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                type="button"
                onClick={() => scrollToId("about")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                aria-label="Scroll to about section"
                data-testid="hero-scroll-indicator"
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors duration-300 hover:text-ink md:flex"
            >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                <ChevronDown className="h-4 w-4 animate-bounce" />
            </motion.button>
        </section>
    );
};

export default Hero;
