import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Github, ExternalLink, Check, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectCard";
import VideoEmbed from "@/components/VideoEmbed";
import Reveal from "@/components/Reveal";
import NotFound from "@/pages/NotFound";
import { useSEO } from "@/hooks/useSEO";

const Block = ({ title, children, testId }) => (
    <Reveal>
        <section className="mt-12" aria-label={title} data-testid={testId}>
            <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">{title}</h2>
            <div className="mt-4 text-sm leading-relaxed text-sub sm:text-base">{children}</div>
        </section>
    </Reveal>
);

const ProjectDetail = () => {
    const { slug } = useParams();
    const index = projects.findIndex((p) => p.slug === slug);
    const project = projects[index];

    useSEO({
        title: project
            ? `${project.title} — ${project.subtitle} | Gaurav Athode`
            : "Project Not Found | Gaurav Athode",
        description: project ? project.description : "The project you are looking for does not exist.",
        path: `/projects/${slug}`,
        robots: project ? "index,follow" : "noindex,nofollow",
    });

    if (!project || !project.caseStudy) return <NotFound />;

    const prev = projects[(index - 1 + projects.length) % projects.length];
    const next = projects[(index + 1) % projects.length];
    const cs = project.caseStudy;

    return (
        <div className="pt-28" data-testid={`project-detail-${project.slug}`}>
            <article className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-10">
                    <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-faint">
                        <li>
                            <Link to="/" className="transition-colors duration-200 hover:text-ink" data-testid="breadcrumb-home">
                                Home
                            </Link>
                        </li>
                        <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
                        <li>
                            <Link to="/projects" className="transition-colors duration-200 hover:text-ink" data-testid="breadcrumb-projects">
                                Projects
                            </Link>
                        </li>
                        <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
                        <li aria-current="page" className="text-sub">{project.title}</li>
                    </ol>
                </nav>

                {/* Header */}
                <Reveal>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-sky-600 dark:text-cyan-300">
                            {project.category}
                        </span>
                        {project.period && (
                            <span className="rounded-full bg-panel px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-faint">
                                {project.period}
                            </span>
                        )}
                        <span className="font-mono text-xs text-faint">Project {project.num}</span>
                    </div>
                    <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                        {project.title}
                    </h1>
                    <p className="mt-3 max-w-2xl font-display text-lg text-sub sm:text-xl">{project.subtitle}</p>
                </Reveal>

                {/* Hero visual */}
                <Reveal delay={0.1}>
                    <div className="group mt-12 overflow-hidden rounded-3xl border border-line/12">
                        <ProjectVisual project={project} large />
                    </div>
                </Reveal>

                {/* Tech stack */}
                <Reveal delay={0.15}>
                    <ul className="mt-10 flex flex-wrap gap-2.5" aria-label="Technology stack" data-testid="case-study-stack">
                        {project.stack.map((tech) => (
                            <li
                                key={tech}
                                className="rounded-full border border-line/15 bg-panel/60 px-4 py-2 font-mono text-xs text-sub"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <VideoEmbed slug={project.slug} />

                <div className="mt-4 grid gap-12 lg:grid-cols-12">
                    {/* Main narrative */}
                    <div className="lg:col-span-8">
                        <Block title="Overview" testId="case-overview"><p>{cs.overview}</p></Block>
                        <Block title="The Problem" testId="case-problem"><p>{cs.problem}</p></Block>
                        <Block title="The Solution" testId="case-solution"><p>{cs.solution}</p></Block>

                        <Block title="Key Features" testId="case-features">
                            <ul className="grid gap-3 sm:grid-cols-2">
                                {project.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2.5 rounded-xl border border-line/10 bg-panel/50 p-4">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-500 dark:text-cyan-300" strokeWidth={2.5} />
                                        <span className="text-sm leading-relaxed text-sub">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </Block>

                        <Block title="Development Approach" testId="case-approach"><p>{cs.approach}</p></Block>

                        <Block title="Challenges" testId="case-challenges">
                            <ul className="space-y-3">
                                {cs.challenges.map((challenge) => (
                                    <li key={challenge.slice(0, 28)} className="flex gap-3">
                                        <span className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" aria-hidden="true" />
                                        {challenge}
                                    </li>
                                ))}
                            </ul>
                        </Block>

                        <Block title="My Contribution" testId="case-contribution"><p>{cs.contribution}</p></Block>
                        <Block title="Outcome" testId="case-outcome"><p>{cs.outcome}</p></Block>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-28">
                            <Reveal delay={0.1}>
                                <div className="glass-panel glow-border rounded-2xl p-7">
                                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-faint">Links</p>
                                    <div className="mt-5 flex flex-col gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-testid="case-study-github"
                                            className="inline-flex items-center justify-center gap-2 rounded-full border border-line/20 px-5 py-3 text-sm font-medium text-ink transition-[border-color] duration-300 hover:border-sky-400/50"
                                        >
                                            <Github className="h-4 w-4" />
                                            View on GitHub
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-testid="case-study-demo"
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(56,189,248,0.35)]"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                    <div className="mt-7 border-t border-line/10 pt-6">
                                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-faint">Stack</p>
                                        <ul className="mt-4 space-y-2.5">
                                            {project.stack.map((tech) => (
                                                <li key={tech} className="flex items-center gap-2.5 text-sm text-sub">
                                                    <span className="h-1 w-1 rounded-full bg-sky-400" aria-hidden="true" />
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </aside>
                </div>

                {/* Prev / Next */}
                <nav aria-label="More projects" className="mt-24 border-t border-line/10 pt-10">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <Link
                            to="/projects"
                            data-testid="back-to-projects"
                            className="inline-flex items-center gap-2 text-sm font-medium text-sub transition-colors duration-200 hover:text-ink"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Projects
                        </Link>
                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                            <Link
                                to={`/projects/${prev.slug}`}
                                data-testid="prev-project"
                                className="group text-left sm:text-right"
                            >
                                <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-faint">Previous</span>
                                <span className="mt-1 inline-flex items-center gap-1.5 font-display font-semibold text-ink transition-colors duration-200 group-hover:text-sky-600 dark:group-hover:text-cyan-300">
                                    <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                    {prev.title}
                                </span>
                            </Link>
                            <Link
                                to={`/projects/${next.slug}`}
                                data-testid="next-project"
                                className="group text-left sm:text-right"
                            >
                                <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-faint">Next</span>
                                <span className="mt-1 inline-flex items-center gap-1.5 font-display font-semibold text-ink transition-colors duration-200 group-hover:text-sky-600 dark:group-hover:text-cyan-300">
                                    {next.title}
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </article>
        </div>
    );
};

export default ProjectDetail;
