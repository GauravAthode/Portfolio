import { motion, useReducedMotion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "", as = "div" }) => {
    const reduce = useReducedMotion();
    const Tag = motion[as] || motion.div;
    return (
        <Tag
            className={className}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </Tag>
    );
};

export default Reveal;
