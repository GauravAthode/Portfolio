import { Github, Linkedin, Code2 } from "lucide-react";
import { personal } from "@/data/personal";

const links = [
    { key: "github", label: "GitHub", href: personal.socials.github, Icon: Github },
    { key: "linkedin", label: "LinkedIn", href: personal.socials.linkedin, Icon: Linkedin },
    { key: "leetcode", label: "LeetCode", href: personal.socials.leetcode, Icon: Code2 },
];

const SocialLinks = ({ size = "md", className = "" }) => {
    const sizing = size === "lg" ? "h-12 w-12" : "h-10 w-10";
    return (
        <div className={`flex items-center gap-3 ${className}`} data-testid="social-links">
            {links.map(({ key, label, href, Icon }) => (
                <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} profile (opens in new tab)`}
                    title={label}
                    data-testid={`social-link-${key}`}
                    className={`group relative flex ${sizing} items-center justify-center rounded-full border border-line/15 bg-panel/60 text-sub transition-[border-color,color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-sky-400/50 hover:text-ink hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]`}
                >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                    <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-line/15 bg-panel px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-sub opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {label}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
