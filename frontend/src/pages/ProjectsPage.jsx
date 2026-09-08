import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import FilterPills from "@/components/FilterPills";
import { projects, projectFilters } from "@/data/projects";
import { useSEO } from "@/hooks/useSEO";

const ProjectsPage = () => {
    useSEO({
        title: "Projects & Case Studies | Gaurav Athode",
        description:
            "Full-stack case studies by Gaurav Athode — LOOP (AI feedback intelligence), VoltPath (EV route planning), Cravings (food ordering), ChatApp (real-time messaging) and a set of mini projects.",
        path: "/projects",
    });
    const [filter, setFilter] = useState("all");
    const visible = filter === "all" ? projects : projects.filter((p) => p.tier === filter);
    const featured = filter === "mini" ? null : visible.find((p) => p.featured);
    const rest = visible.filter((p) => p !== featured);

    return (
        <div className="pt-32" data-testid="projects-page">
            <section className="pb-28" aria-label="All projects">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        chapter="P"
                        kicker="Projects"
                        title="Case studies & builds"
                        description="Every project links to real source code — and a live demo where one exists. Major projects include a full engineering case study."
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
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
