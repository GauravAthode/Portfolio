import { useState } from "react";
import { Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import { projectVideos } from "@/data/projects";

const VideoEmbed = ({ slug }) => {
    const videoId = projectVideos[slug];
    const [playing, setPlaying] = useState(false);
    if (!videoId) return null;

    return (
        <Reveal delay={0.12}>
            <div className="mt-12" data-testid={`project-video-${slug}`}>
                <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-sky-600 dark:text-cyan-300">
                    <span className="h-px w-10 bg-gradient-to-r from-sky-400/70 to-transparent" aria-hidden="true" />
                    Watch the walkthrough
                </p>
                <div className="glow-border relative aspect-video overflow-hidden rounded-3xl border border-line/12 bg-panel">
                    {playing ? (
                        <iframe
                            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                            title="Project walkthrough video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 h-full w-full"
                        />
                    ) : (
                        <button
                            type="button"
                            onClick={() => setPlaying(true)}
                            aria-label="Play project walkthrough video"
                            data-testid={`project-video-play-${slug}`}
                            className="group absolute inset-0 h-full w-full"
                        >
                            <img
                                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                alt="Project walkthrough video thumbnail"
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                            <span
                                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                                aria-hidden="true"
                            />
                            <span
                                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-[transform,background-color] duration-300 group-hover:scale-110 group-hover:bg-sky-500/80"
                                aria-hidden="true"
                            >
                                <Play className="ml-1 h-8 w-8 fill-white text-white" />
                            </span>
                            <span className="absolute bottom-5 left-6 text-left">
                                <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
                                    YouTube · Demo
                                </span>
                                <span className="mt-1 block font-display text-lg font-semibold text-white">
                                    Project walkthrough
                                </span>
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </Reveal>
    );
};

export default VideoEmbed;
