import { useEffect } from "react";

const setMeta = (attr, key, content) => {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
};

export const useSEO = ({ title, description, path, robots = "index,follow" }) => {
    useEffect(() => {
        document.title = title;
        setMeta("property", "og:title", title);
        setMeta("name", "twitter:title", title);
        setMeta("name", "robots", robots);
        if (description) {
            setMeta("name", "description", description);
            setMeta("property", "og:description", description);
            setMeta("name", "twitter:description", description);
        }
        if (path) setMeta("property", "og:url", `${window.location.origin}${path}`);
    }, [title, description, path, robots]);
};

export default useSEO;
