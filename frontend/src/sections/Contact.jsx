import { useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle2, RotateCcw } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { personal } from "@/data/personal";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_MESSAGE = 20;

const directLinks = [
    {
        key: "email",
        label: "Email",
        value: personal.email,
        href: `mailto:${personal.email}`,
        Icon: Mail,
        external: false,
    },
    {
        key: "linkedin",
        label: "LinkedIn",
        value: "gaurav-athode",
        href: personal.socials.linkedin,
        Icon: Linkedin,
        external: true,
    },
    {
        key: "github",
        label: "GitHub",
        value: "GauravAthode",
        href: personal.socials.github,
        Icon: Github,
        external: true,
    },
];

const initialValues = { name: "", email: "", message: "" };

const Contact = () => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | opened

    const setField = (field) => (e) => {
        setValues((v) => ({ ...v, [field]: e.target.value }));
        setErrors((err) => ({ ...err, [field]: undefined }));
    };

    const validate = () => {
        const next = {};
        if (values.name.trim().length < 2) next.name = "Please enter your name.";
        if (!EMAIL_RE.test(values.email.trim())) next.email = "Please enter a valid email address.";
        if (values.message.trim().length < MIN_MESSAGE)
            next.message = `Message should be at least ${MIN_MESSAGE} characters.`;
        return next;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const next = validate();
        if (Object.keys(next).length > 0) {
            setErrors(next);
            setStatus("idle");
            return;
        }
        setStatus("opened");
        window.location.href = mailtoHref;
    };

    const reset = () => {
        setValues(initialValues);
        setErrors({});
        setStatus("idle");
    };

    const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
        `Portfolio enquiry from ${values.name}`,
    )}&body=${encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)}`;

    const inputClass = (field) =>
        `w-full rounded-xl border bg-canvas/60 px-4 py-3.5 text-sm text-ink placeholder:text-faint transition-[border-color,box-shadow] duration-200 focus:border-sky-400/60 focus:shadow-[0_0_0_3px_rgba(56,189,248,0.15)] focus:outline-none ${
            errors[field] ? "border-red-400/60" : "border-line/15"
        }`;

    return (
        <section id="contact" data-testid="contact-section" className="relative py-24 lg:py-32" aria-label="Contact">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-sky-500/8 blur-[160px]" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    chapter="10"
                    kicker="Contact"
                    title="Let's build something meaningful."
                    description="Have an idea, opportunity, or project in mind? I'd love to connect and explore how we can turn it into something useful."
                />

                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <Reveal>
                            <p className="text-base leading-relaxed text-sub sm:text-lg">
                                Whether it's a role on your engineering team, a collaboration, or just a
                                conversation about building for the web — my inbox is open.
                            </p>
                        </Reveal>
                        <ul className="mt-10 space-y-4">
                            {directLinks.map(({ key, label, value, href, Icon, external }, i) => (
                                <Reveal key={key} delay={0.08 * (i + 1)}>
                                    <li>
                                        <a
                                            href={href}
                                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                            data-testid={`contact-direct-${key}`}
                                            className="group flex items-center gap-4 rounded-2xl border border-line/12 bg-panel/60 p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-sky-400/40"
                                        >
                                            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 text-sky-500 dark:text-cyan-300">
                                                <Icon className="h-5 w-5" strokeWidth={1.8} />
                                            </span>
                                            <span>
                                                <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                                                    {label}
                                                </span>
                                                <span className="mt-0.5 block break-all text-sm font-medium text-ink transition-colors duration-200 group-hover:text-sky-600 dark:group-hover:text-cyan-300">
                                                    {value}
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-7">
                        <Reveal delay={0.12}>
                            <div className="glass-panel glow-border rounded-2xl p-7 sm:p-9">
                                {status === "opened" ? (
                                    <div className="flex flex-col items-start gap-5" data-testid="contact-mailto-opened">
                                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-500 dark:text-emerald-300">
                                            <CheckCircle2 className="h-6 w-6" />
                                        </span>
                                        <h3 className="font-display text-xl font-bold text-ink">
                                            Your email app should be ready, {values.name.split(" ")[0]}.
                                        </h3>
                                        <p className="text-sm leading-relaxed text-sub sm:text-base">
                                            Your message was prepared for{" "}
                                            <span className="font-medium text-ink">{personal.email}</span>. Please
                                            review it and press send in your email app. Nothing is sent by this site.
                                            If needed, you can also email me directly at{" "}
                                            <a
                                                href={`mailto:${personal.email}`}
                                                className="font-medium text-sky-600 underline decoration-sky-400/40 underline-offset-4 hover:decoration-sky-400 dark:text-cyan-300"
                                            >
                                                {personal.email}
                                            </a>
                                            .
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                type="button"
                                                onClick={reset}
                                                data-testid="contact-send-another"
                                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(56,189,248,0.35)]"
                                            >
                                                <RotateCcw className="h-4 w-4" />
                                                Send another message
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} noValidate data-testid="contact-me-form">
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    htmlFor="contact-name"
                                                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-faint"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    id="contact-name"
                                                    type="text"
                                                    value={values.name}
                                                    onChange={setField("name")}
                                                    placeholder="Your name"
                                                    autoComplete="name"
                                                    aria-invalid={!!errors.name}
                                                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                                                    data-testid="contact-input-name"
                                                    className={inputClass("name")}
                                                />
                                                {errors.name && (
                                                    <p id="contact-name-error" role="alert" className="mt-2 text-xs text-red-400" data-testid="contact-error-name">
                                                        {errors.name}
                                                    </p>
                                                )}
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="contact-email"
                                                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-faint"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    id="contact-email"
                                                    type="email"
                                                    value={values.email}
                                                    onChange={setField("email")}
                                                    placeholder="you@example.com"
                                                    autoComplete="email"
                                                    aria-invalid={!!errors.email}
                                                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                                                    data-testid="contact-input-email"
                                                    className={inputClass("email")}
                                                />
                                                {errors.email && (
                                                    <p id="contact-email-error" role="alert" className="mt-2 text-xs text-red-400" data-testid="contact-error-email">
                                                        {errors.email}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <label
                                                htmlFor="contact-message"
                                                className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-faint"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                rows={6}
                                                value={values.message}
                                                onChange={setField("message")}
                                                placeholder="Tell me about the opportunity, project, or idea..."
                                                aria-invalid={!!errors.message}
                                                aria-describedby={errors.message ? "contact-message-error" : undefined}
                                                data-testid="contact-input-message"
                                                className={`${inputClass("message")} resize-y`}
                                            />
                                            {errors.message && (
                                                <p id="contact-message-error" role="alert" className="mt-2 text-xs text-red-400" data-testid="contact-error-message">
                                                    {errors.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="mt-7 flex flex-wrap items-center gap-4">
                                            <button
                                                type="submit"
                                                data-testid="contact-submit-button"
                                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-7 py-3.5 font-semibold text-white transition-[transform,box-shadow,opacity] duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(56,189,248,0.4)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                                            >
                                                <Send className="h-4 w-4" />
                                                Open Email App
                                            </button>
                                            <p className="text-xs text-faint">
                                                Your default email client will open with the message filled in.
                                            </p>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
