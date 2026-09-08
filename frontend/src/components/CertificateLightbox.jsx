import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const CertificateLightbox = ({ certificate, onClose }) => {
    useEffect(() => {
        if (!certificate) return undefined;
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [certificate, onClose]);

    return (
        <AnimatePresence>
            {certificate && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-8"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${certificate.title} certificate preview`}
                    data-testid="certificate-lightbox"
                >
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close certificate preview"
                        data-testid="certificate-lightbox-close"
                        className="fixed right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-black/70 sm:right-6 sm:top-6"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    <motion.figure
                        initial={{ opacity: 0, scale: 0.92, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 12 }}
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                        className="flex max-h-full max-w-5xl flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={certificate.image}
                            alt={`${certificate.title} certificate issued by ${certificate.issuer}`}
                            className="max-h-[76vh] w-auto max-w-full rounded-xl border border-white/10 object-contain shadow-2xl"
                            data-testid="certificate-lightbox-image"
                        />
                        <figcaption className="mt-4 text-center">
                            <span className="block font-display text-base font-semibold text-white sm:text-lg">
                                {certificate.title}
                            </span>
                            <span className="mt-1 block font-mono text-xs uppercase tracking-widest text-white/60">
                                {certificate.issuer} · {certificate.year}
                            </span>
                        </figcaption>
                    </motion.figure>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CertificateLightbox;
