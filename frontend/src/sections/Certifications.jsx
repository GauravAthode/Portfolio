import { useState } from "react";
import { Award, Expand } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CertificateLightbox from "@/components/CertificateLightbox";
import { certifications } from "@/data/journey";

const Certifications = () => {
    const [preview, setPreview] = useState(null);
    const [filter, setFilter] = useState("All");
    const hasImages = certifications.some((c) => c.image);
    const categories = ["All", ...new Set(certifications.map((c) => c.category))];
    const visible =
        filter === "All" ? certifications : certifications.filter((c) => c.category === filter);

    return (
        <section id="certifications" data-testid="certifications-section" className="relative py-24 lg:py-32" aria-label="Certifications">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    chapter="07"
                    kicker="Certifications"
                    title="Validated learning"
                    description={
                        hasImages
                            ? "Structured programs that back up the hands-on work — click any certificate to view it full size."
                            : "Structured programs that back up the hands-on work."
                    }
                />
                <div
                    className="mb-10 flex flex-wrap gap-2.5"
                    role="group"
                    aria-label="Filter certificates by category"
                    data-testid="certificate-filters"
                >
                    {categories.map((cat) => {
                        const count =
                            cat === "All"
                                ? certifications.length
                                : certifications.filter((c) => c.category === cat).length;
                        const isActive = filter === cat;
                        return (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setFilter(cat)}
                                aria-pressed={isActive}
                                data-testid={`certificate-filter-${cat.toLowerCase()}`}
                                className={`rounded-full border px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-[background-color,border-color,color,transform,box-shadow] duration-300 hover:-translate-y-0.5 ${
                                    isActive
                                        ? "border-transparent bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow-[0_0_24px_rgba(56,189,248,0.3)]"
                                        : "border-line/15 bg-panel/60 text-sub hover:border-sky-400/40 hover:text-ink"
                                }`}
                            >
                                {cat}{" "}
                                <span className={isActive ? "text-white/70" : "text-faint"}>· {count}</span>
                            </button>
                        );
                    })}
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {visible.map((cert, i) => (
                        <Reveal key={cert.slug} delay={i * 0.08}>
                            {cert.image ? (
                                <button
                                    type="button"
                                    onClick={() => setPreview(cert)}
                                    aria-label={`View ${cert.title} certificate full size`}
                                    data-testid={`certificate-card-${cert.slug}`}
                                    className="glow-border group relative h-full w-full overflow-hidden rounded-2xl border border-line/12 bg-panel/60 p-5 text-left backdrop-blur-sm transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-violet-400/40 hover:shadow-[0_20px_50px_-20px_rgba(168,85,247,0.3)]"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line/12 bg-canvas/60">
                                        <img
                                            src={cert.image}
                                            alt={`${cert.title} certificate thumbnail`}
                                            loading="lazy"
                                            data-testid={`certificate-image-${cert.slug}`}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                                        />
                                        <span
                                            className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100"
                                            aria-hidden="true"
                                        >
                                            <Expand className="h-4 w-4" />
                                        </span>
                                    </div>
                                    <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                                        {cert.title}
                                    </h3>
                                    <div className="mt-3 flex items-center justify-between">
                                        <p className="text-sm text-sub">{cert.issuer}</p>
                                        <p className="font-mono text-xs text-faint">{cert.year}</p>
                                    </div>
                                </button>
                            ) : (
                                <div
                                    data-testid={`certificate-card-${cert.slug}`}
                                    className="glow-border group relative h-full overflow-hidden rounded-2xl border border-line/12 bg-panel/60 p-7 backdrop-blur-sm transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-violet-400/40 hover:shadow-[0_20px_50px_-20px_rgba(168,85,247,0.3)]"
                                >
                                    <div
                                        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl"
                                        aria-hidden="true"
                                    />
                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-sky-500/20 text-violet-500 transition-transform duration-300 group-hover:scale-110 dark:text-violet-300">
                                        <Award className="h-5 w-5" strokeWidth={1.8} />
                                    </span>
                                    <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-ink">
                                        {cert.title}
                                    </h3>
                                    <div className="mt-4 flex items-center justify-between">
                                        <p className="text-sm text-sub">{cert.issuer}</p>
                                        <p className="font-mono text-xs text-faint">{cert.year}</p>
                                    </div>
                                </div>
                            )}
                        </Reveal>
                    ))}
                </div>
            </div>
            <CertificateLightbox certificate={preview} onClose={() => setPreview(null)} />
        </section>
    );
};

export default Certifications;
