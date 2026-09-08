import { motion, useReducedMotion } from "framer-motion";
import { personal } from "@/data/personal";

const ProfileBadge = () => {
    const reduce = useReducedMotion();
    return (
        <div className="relative" data-testid="hero-profile-visual">
            {/* Ambient glow */}
            <div
                className="absolute -inset-10 rounded-full opacity-70 blur-3xl"
                style={{
                    background:
                        "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.28), transparent 55%), radial-gradient(circle at 70% 70%, rgba(168,85,247,0.25), transparent 55%)",
                }}
                aria-hidden="true"
            />
            <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-[380px]"
            >
                {/* Gradient ring */}
                <div
                    className="absolute inset-0 rounded-full p-[3px]"
                    style={{
                        background: "conic-gradient(from 140deg, #38bdf8, #818cf8, #a855f7, #22d3ee, #38bdf8)",
                    }}
                    aria-hidden="true"
                >
                    <div className="h-full w-full rounded-full bg-canvas" />
                </div>
                {/* Photo / placeholder */}
                <div className="absolute inset-3 overflow-hidden rounded-full border border-line/15 bg-panel">
                    {personal.photo ? (
                        <img
                            src={personal.photo}
                            alt={`Portrait of ${personal.name}, ${personal.title}`}
                            className="h-full w-full object-cover object-[50%_28%]"
                            data-testid="hero-profile-photo"
                        />
                    ) : (
                        <div
                            className="bg-grid-faint relative flex h-full w-full flex-col items-center justify-center"
                            role="img"
                            aria-label={`${personal.name} profile photo placeholder — replace with a professional photo`}
                            data-testid="hero-profile-photo"
                        >
                            <span className="text-gradient font-display text-7xl font-extrabold tracking-tight sm:text-8xl">
                                {personal.initials}
                            </span>
                            <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
                                photo · swap ready
                            </span>
                        </div>
                    )}
                </div>
                {/* Floating badge */}
                <div className="glass-panel animate-float-slow absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2">
                    <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-sub">
                        Open to opportunities
                    </span>
                </div>
            </motion.div>
            {/* Floating tech chips */}
            <div className="glass-panel animate-float-slow absolute -left-2 top-8 hidden rounded-xl px-3 py-2 font-mono text-xs text-sub sm:block" style={{ animationDelay: "1.2s" }} aria-hidden="true">
                React · Node
            </div>
            <div className="glass-panel animate-float-slow absolute -right-3 top-1/3 hidden rounded-xl px-3 py-2 font-mono text-xs text-sub sm:block" style={{ animationDelay: "2.4s" }} aria-hidden="true">
                Java · DSA
            </div>
            <div className="glass-panel animate-float-slow absolute bottom-16 -left-6 hidden rounded-xl px-3 py-2 font-mono text-xs text-sub sm:block" style={{ animationDelay: "3.1s" }} aria-hidden="true">
                MongoDB
            </div>
        </div>
    );
};

export default ProfileBadge;
