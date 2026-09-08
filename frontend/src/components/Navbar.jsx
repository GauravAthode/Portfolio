import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { personal, navLinks } from "@/data/personal";
import { scrollToId } from "@/hooks/useSmoothScroll";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const active = useActiveSection(navLinks.map((l) => l.id));
    const onHome = location.pathname === "/";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 32);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleNav = (e, id) => {
        e.preventDefault();
        setOpen(false);
        if (onHome) {
            scrollToId(id);
        } else {
            navigate("/", { state: { scrollTo: id } });
        }
    };

    return (
        <header
            data-testid="sticky-navbar"
            className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
                scrolled
                    ? "border-b border-line/10 bg-canvas/80 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
                    : "border-b border-transparent bg-transparent"
            }`}
        >
            <nav
                className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-[padding] duration-500 sm:px-6 lg:px-8 ${
                    scrolled ? "py-3" : "py-5"
                }`}
                aria-label="Primary navigation"
            >
                <a
                    href="#home"
                    onClick={(e) => handleNav(e, "home")}
                    className="group flex items-center gap-3"
                    data-testid="nav-logo"
                    aria-label="Gaurav Athode — home"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 font-display text-sm font-bold text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-transform duration-300 group-hover:scale-105">
                        GA
                    </span>
                    <span className="hidden font-display text-sm font-semibold tracking-wide text-ink sm:block">
                        Gaurav Athode
                    </span>
                </a>

                <ul className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => {
                        const isActive = onHome && active === link.id;
                        return (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={(e) => handleNav(e, link.id)}
                                    data-testid={`nav-link-${link.id}`}
                                    aria-current={isActive ? "true" : undefined}
                                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                                        isActive ? "text-ink" : "text-sub hover:text-ink"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-active-pill"
                                            className="absolute inset-0 rounded-full border border-sky-400/30 bg-sky-400/10"
                                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                            aria-hidden="true"
                                        />
                                    )}
                                    <span className="relative">{link.label}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href={personal.resumePath}
                        download
                        data-testid="nav-download-resume"
                        className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(56,189,248,0.25)] transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(56,189,248,0.4)] sm:flex"
                    >
                        <Download className="h-4 w-4" strokeWidth={2} />
                        Resume
                    </a>
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-expanded={open}
                        aria-label={open ? "Close menu" : "Open menu"}
                        data-testid="mobile-menu-button"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-line/15 bg-panel/60 text-ink lg:hidden"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 top-0 z-[-1] flex flex-col justify-center bg-canvas/95 px-8 backdrop-blur-2xl lg:hidden"
                        data-testid="mobile-menu"
                    >
                        <ul className="space-y-2">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.id}
                                    initial={{ opacity: 0, x: -24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.06 * i, duration: 0.35 }}
                                >
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(e) => handleNav(e, link.id)}
                                        data-testid={`mobile-nav-link-${link.id}`}
                                        className="flex items-baseline gap-4 rounded-xl px-3 py-3 font-display text-3xl font-bold text-sub transition-colors duration-200 hover:text-ink"
                                    >
                                        <span className="font-mono text-xs text-sky-500 dark:text-cyan-300">
                                            0{i + 1}
                                        </span>
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.a
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.35 }}
                            href={personal.resumePath}
                            download
                            data-testid="mobile-nav-download-resume"
                            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-7 py-3.5 font-semibold text-white"
                        >
                            <Download className="h-4 w-4" />
                            Download Resume
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
