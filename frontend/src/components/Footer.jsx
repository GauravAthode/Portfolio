import { ArrowUp } from "lucide-react";
import { personal, navLinks } from "@/data/personal";
import { scrollToId, scrollToTop } from "@/hooks/useSmoothScroll";
import SocialLinks from "@/components/SocialLinks";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNav = (e, id) => {
        e.preventDefault();
        if (location.pathname === "/") scrollToId(id);
        else navigate("/", { state: { scrollTo: id } });
    };

    return (
        <footer className="relative border-t border-line/10 bg-panel/40" data-testid="site-footer">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-sm">
                        <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 font-display text-sm font-bold text-white">
                                GA
                            </span>
                            <div>
                                <p className="font-display font-semibold text-ink">{personal.name}</p>
                                <p className="text-sm text-faint">{personal.title}</p>
                            </div>
                        </div>
                        <p className="mt-5 text-sm leading-relaxed text-sub">
                            Building scalable, user-focused digital experiences.
                        </p>
                        <SocialLinks className="mt-6" />
                    </div>

                    <nav aria-label="Footer navigation">
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-faint">Navigate</p>
                        <ul className="mt-5 grid grid-cols-2 gap-x-12 gap-y-3">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(e) => handleNav(e, link.id)}
                                        data-testid={`footer-link-${link.id}`}
                                        className="text-sm text-sub transition-colors duration-200 hover:text-ink"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex flex-col items-start gap-4">
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-faint">Back to top</p>
                        <button
                            type="button"
                            onClick={() => scrollToTop()}
                            aria-label="Back to top"
                            data-testid="back-to-top-button"
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-line/15 bg-panel/60 text-sub transition-[border-color,color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:text-ink hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]"
                        >
                            <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                        </button>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line/10 pt-8 sm:flex-row sm:items-center">
                    <p className="text-sm text-faint">© 2026 {personal.name}. All rights reserved.</p>
                    <p className="font-mono text-xs text-faint">Designed & built with React, Tailwind CSS & Framer Motion</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
