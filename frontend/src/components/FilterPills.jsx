const FilterPills = ({ options, value, onChange, testIdPrefix, ariaLabel }) => (
    <div
        className="mb-10 flex flex-wrap gap-2.5"
        role="group"
        aria-label={ariaLabel}
        data-testid={testIdPrefix}
    >
        {options.map((opt) => {
            const isActive = value === opt.key;
            return (
                <button
                    key={opt.key}
                    type="button"
                    onClick={() => onChange(opt.key)}
                    aria-pressed={isActive}
                    data-testid={`${testIdPrefix}-${opt.key}`}
                    className={`rounded-full border px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-[background-color,border-color,color,transform,box-shadow] duration-300 hover:-translate-y-0.5 ${
                        isActive
                            ? "border-transparent bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow-[0_0_24px_rgba(56,189,248,0.3)]"
                            : "border-line/15 bg-panel/60 text-sub hover:border-sky-400/40 hover:text-ink"
                    }`}
                >
                    {opt.label}{" "}
                    <span className={isActive ? "text-white/70" : "text-faint"}>· {opt.count}</span>
                </button>
            );
        })}
    </div>
);

export default FilterPills;
