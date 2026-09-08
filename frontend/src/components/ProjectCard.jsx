import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Github,
    ArrowUpRight,
    ExternalLink,
    Sparkles,
    Route,
    UtensilsCrossed,
    MessageSquare,
    MapPin,
    Dices,
    Laugh,
    CloudSun,
    KeyRound,
    Image as ImageIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { projectImages, projectNotes } from "@/data/projects";

const iconMap = {
    sparkles: Sparkles,
    route: Route,
    food: UtensilsCrossed,
    chat: MessageSquare,
    map: MapPin,
    dice: Dices,
    laugh: Laugh,
    weather: CloudSun,
    key: KeyRound,
    image: ImageIcon,
};

export const ProjectVisual = ({ project, large = false }) => {
    const Icon = iconMap[project.icon] || Sparkles;
    const image = projectImages[project.slug];
    return (
        <div
            className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} ${
                large ? "aspect-[16/8]" : "aspect-[16/9]"
            }`}
        >
            {image ? (
                <>
                    <img
                        src={image}
                        alt={`${project.title} — ${project.subtitle} (application screenshot)`}
                        loading="lazy"
                        data-testid={`project-image-${project.slug}`}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                        aria-hidden="true"
                    />
                    <span
                        className="absolute bottom-3 right-5 font-display text-4xl font-extrabold text-white/70"
                        aria-hidden="true"
                    >
                        {project.num}
                    </span>
                </>
            ) : (
                <div
                    className="absolute inset-0"
                    role="img"
                    aria-label={`${project.title} — ${project.subtitle} visual`}
                >
                    <div
                        className="absolute inset-0 opacity-[0.15]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                            backgroundSize: "44px 44px",
                        }}
                        aria-hidden="true"
                    />
                    <div
                        className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-3xl transition-transform duration-700 group-hover:scale-125"
                        aria-hidden="true"
                    />
                    <span
                        className="absolute bottom-2 right-5 font-display text-[92px] font-extrabold leading-none text-white/15 transition-transform duration-700 group-hover:-translate-y-1 sm:text-[120px]"
                        aria-hidden="true"
                    >
                        {project.num}
                    </span>
                    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
                        <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                            <Icon className="h-7 w-7 text-white" strokeWidth={1.6} />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/70">
                            {project.category}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

const ProjectCard = ({ project, featured = false, delay = 0 }) => (
    <Reveal delay={delay} className={featured ? "lg:col-span-2" : ""}>
        <motion.article
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            data-testid={`project-card-${project.slug}`}
            className="group glow-border relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/12 bg-panel/60 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-sky-400/40 hover:shadow-[0_24px_60px_-20px_rgba(56,189,248,0.28)]"
        >
            <div className={featured ? "lg:grid lg:grid-cols-2" : "flex h-full flex-col"}>
                <div className="relative overflow-hidden">
                    <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                        <ProjectVisual project={project} />
                    </div>
                    {featured && (
                        <span className="glass-panel absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-sky-600 dark:text-cyan-300">
                            Featured Project
                        </span>
                    )}
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex items-baseline justify-between gap-4">
                        <span className="font-mono text-xs text-faint">{project.num}</span>
                        {project.period && (
                            <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
                                {project.period}
                            </span>
                        )}
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                        {project.title}
                        <span className="text-faint"> — </span>
                        <span className="text-sub">{project.subtitle}</span>
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-sub sm:text-base">
                        {project.description}
                    </p>

                    {projectNotes[project.slug] && (
                        <p
                            className="mt-4 flex items-start gap-2.5 rounded-xl border border-line/10 bg-canvas/50 px-4 py-3 text-[13px] leading-relaxed text-faint"
                            data-testid={`project-note-${project.slug}`}
                        >
                            <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-500 dark:text-cyan-300" />
                            <span>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-sky-600 dark:text-cyan-300">
                                    What I learned ·{" "}
                                </span>
                                {projectNotes[project.slug]}
                            </span>
                        </p>
                    )}

                    <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                        {project.stack.slice(0, featured ? 7 : 5).map((tech) => (
                            <li
                                key={tech}
                                className="rounded-full border border-line/15 bg-canvas/50 px-3 py-1 font-mono text-[11px] text-sub transition-colors duration-200 hover:border-sky-400/40 hover:text-ink"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                        {project.caseStudy && (
                            <Link
                                to={`/projects/${project.slug}`}
                                data-testid={`project-case-study-${project.slug}`}
                                className="group/link inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(56,189,248,0.35)]"
                            >
                                View Case Study
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </Link>
                        )}
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} source code on GitHub (opens in new tab)`}
                            data-testid={`project-github-${project.slug}`}
                            className="inline-flex items-center gap-2 rounded-full border border-line/20 px-5 py-2.5 text-sm font-medium text-sub transition-[border-color,color] duration-300 hover:border-line/40 hover:text-ink"
                        >
                            <Github className="h-4 w-4" />
                            GitHub
                        </a>
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} live demo (opens in new tab)`}
                                data-testid={`project-demo-${project.slug}`}
                                className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 px-5 py-2.5 text-sm font-medium text-sky-600 transition-[background-color,color] duration-300 hover:bg-sky-400/10 dark:text-cyan-300"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    </Reveal>
);

export default ProjectCard;
