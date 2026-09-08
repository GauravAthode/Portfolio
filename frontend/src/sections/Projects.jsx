import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import FilterPills from "@/components/FilterPills";
import { projects, projectFilters } from "@/data/projects";

const Projects = () => {
    const [filter, setFilter] = useState("all");
    const visible = filter === "all" ? projects : projects.filter((p) => p.tier === filter);
    const featured = filter === "mini" ? null : visible.find((p) => p.featured);
    const rest = visible.filter((p) => p !== featured);

    return (
        <section id="projects" data-testid="projects-section" className="relative py-24 lg:py-32" aria-label="Featured projects">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute right-0 top-1/4 h-[480px] w-[480px] rounded-full bg-sky-500/8 blur-[160px]" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    chapter="05"
                    kicker="Featured Projects"
                    title="Work that speaks for itself"
                    description="Flagship full-stack builds — from an AI feedback intelligence platform to real-time chat — plus a set of focused mini projects. Every major project is documented as a case study."
                />

                <FilterPills
                    options={projectFilters}
                    value={filter}
                    onChange={setFilter}
                    testIdPrefix="project-filters"
                    ariaLabel="Filter projects by type"
                />

                <div className="grid gap-8 lg:grid-cols-2">
                    {featured && <ProjectCard project={featured} featured />}
                    {rest.map((project, i) => (
                        <ProjectCard key={project.slug} project={project} delay={0.08 * (i + 1)} />
                    ))}
                </div>

                <Reveal delay={0.2}>
                    <div className="mt-14 flex justify-center">
                        <Link
                            to="/projects"
                            data-testid="view-all-projects-link"
                            className="group inline-flex items-center gap-2 rounded-full border border-line/20 bg-panel/50 px-7 py-3.5 font-semibold text-ink transition-[border-color,transform] duration-300 hover:scale-[1.03] hover:border-sky-400/50"
                        >
                            Explore all case studies
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Projects;
