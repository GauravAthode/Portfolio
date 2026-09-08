import Reveal from "@/components/Reveal";

const SectionHeading = ({ chapter, kicker, title, description, align = "left" }) => (
    <div className={`mb-14 lg:mb-20 ${align === "center" ? "text-center" : ""}`}>
        <Reveal>
            <p
                className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-sky-500 dark:text-cyan-300 ${
                    align === "center" ? "justify-center" : ""
                }`}
                data-testid={`section-kicker-${kicker?.toLowerCase().replace(/\s+/g, "-")}`}
            >
                <span className="text-faint">{chapter}</span>
                <span className="h-px w-10 bg-gradient-to-r from-sky-400/70 to-transparent" aria-hidden="true" />
                {kicker}
            </p>
        </Reveal>
        <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
            </h2>
        </Reveal>
        {description ? (
            <Reveal delay={0.16}>
                <p
                    className={`mt-5 max-w-2xl text-base leading-relaxed text-sub sm:text-lg ${
                        align === "center" ? "mx-auto" : ""
                    }`}
                >
                    {description}
                </p>
            </Reveal>
        ) : null}
    </div>
);

export default SectionHeading;
