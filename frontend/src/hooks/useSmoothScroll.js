let lenisInstance = null;

export const setLenis = (instance) => {
    lenisInstance = instance;
};

export const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenisInstance) {
        lenisInstance.scrollTo(el, { offset: -76 });
    } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

export const scrollToTop = (immediate = false) => {
    if (lenisInstance) {
        lenisInstance.scrollTo(0, { immediate });
    } else {
        window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
    }
};
