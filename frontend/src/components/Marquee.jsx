import { marqueeItems } from "@/data/personal";

const Row = ({ ariaHidden = false }) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
        {marqueeItems.map((item) => (
            <span key={`${item}-${ariaHidden}`} className="flex items-center">
                <span className="whitespace-nowrap px-8 font-display text-sm font-medium uppercase tracking-[0.25em] text-faint transition-colors duration-300 hover:text-sky-500 dark:hover:text-cyan-300">
                    {item}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 opacity-60" aria-hidden="true" />
            </span>
        ))}
    </div>
);

const Marquee = () => (
    <div
        className="marquee-mask overflow-hidden border-y border-line/10 bg-panel/40 py-6"
        data-testid="editorial-marquee"
    >
        <div className="animate-marquee flex w-max">
            <Row />
            <Row ariaHidden />
        </div>
    </div>
);

export default Marquee;
