import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToId } from "@/hooks/useSmoothScroll";
import Hero from "@/sections/Hero";
import Marquee from "@/components/Marquee";
import Highlights from "@/sections/Highlights";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import Certifications from "@/sections/Certifications";
import Coding from "@/sections/Coding";
import Learning from "@/sections/Learning";
import Contact from "@/sections/Contact";
import { useSEO } from "@/hooks/useSEO";

const Home = () => {
    const location = useLocation();
    useSEO({
        title: "Gaurav Athode | Full Stack Developer",
        description:
            "Portfolio of Gaurav Athode, a Full Stack Developer specializing in MERN Stack development, Java, problem solving, and scalable web applications.",
        path: "/",
    });

    useEffect(() => {
        const target = location.state?.scrollTo || (location.hash ? location.hash.slice(1) : null);
        if (target) {
            const timer = window.setTimeout(() => scrollToId(target), 350);
            return () => window.clearTimeout(timer);
        }
        return undefined;
    }, [location.state, location.hash]);

    return (
        <div data-testid="home-page">
            <Hero />
            <Marquee />
            <Highlights />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Coding />
            <Learning />
            <Contact />
        </div>
    );
};

export default Home;
