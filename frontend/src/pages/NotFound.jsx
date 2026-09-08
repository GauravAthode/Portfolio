import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const NotFound = () => {
    useSEO({
        title: "Page Not Found | Gaurav Athode",
        description: "The page you are looking for does not exist.",
        robots: "noindex,nofollow",
    });
    return (
    <div
        className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
        data-testid="not-found-page"
    >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
        </div>
        <span className="glass-panel relative inline-flex h-14 w-14 items-center justify-center rounded-2xl text-sky-500 dark:text-cyan-300">
            <Compass className="h-6 w-6" strokeWidth={1.8} />
        </span>
        <p className="text-gradient relative mt-8 font-display text-7xl font-extrabold tracking-tight sm:text-8xl">
            404
        </p>
        <h1 className="relative mt-4 font-display text-xl font-bold text-ink sm:text-2xl">
            This page drifted off the map
        </h1>
        <p className="relative mt-3 max-w-md text-sm leading-relaxed text-sub sm:text-base">
            The route you're looking for doesn't exist — but the projects, experience and contact details are all
            back home.
        </p>
        <Link
            to="/"
            data-testid="not-found-home-link"
            className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-7 py-3.5 font-semibold text-white transition-[transform,box-shadow] duration-300 hover:scale-[1.04] hover:shadow-[0_0_36px_rgba(56,189,248,0.4)]"
        >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
        </Link>
    </div>
);
};

export default NotFound;
