import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ThemeProvider } from "@/hooks/useTheme";
import { setLenis, scrollToTop } from "@/hooks/useSmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectDetail from "@/pages/ProjectDetail";
import ContactPage from "@/pages/ContactPage";
import Stats from "@/pages/Stats";
import NotFound from "@/pages/NotFound";

const ScrollManager = () => {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (!hash) scrollToTop(true);
    }, [pathname, hash]);
    return null;
};

const AnimatedRoutes = () => {
    const location = useLocation();
    const reduce = useReducedMotion();
    return (
        <AnimatePresence mode="wait">
            <motion.main
                key={location.pathname}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </motion.main>
        </AnimatePresence>
    );
};

const SiteShell = () => {
    const reduce = useReducedMotion();
    useEffect(() => {
        if (reduce) return undefined;
        const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
        setLenis(lenis);
        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            setLenis(null);
        };
    }, [reduce]);

    return (
        <div className="min-h-screen bg-canvas text-ink">
            <ScrollManager />
            <ScrollProgress />
            <Navbar />
            <AnimatedRoutes />
            <Footer />
        </div>
    );
};

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <SiteShell />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
