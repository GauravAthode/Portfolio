import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

const ScrollProgress = () => {
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

    if (reduce) return null;

    return (
        <motion.div
            className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-500"
            style={{ scaleX }}
            aria-hidden="true"
            data-testid="scroll-progress-bar"
        />
    );
};

export default ScrollProgress;
