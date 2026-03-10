
export const ImageSliderStrip = () => {
    const images = Array.from({ length: 15 }, (_, i) => `${i + 1}.jpeg`);

    return (
        <section className="py-12 bg-zinc-950 overflow-hidden relative border-y border-zinc-900">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150px] bg-primary/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10">
                <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
                    {/* First set of images */}
                    <div className="flex gap-6 px-3">
                        {images.map((src, index) => (
                            <div
                                key={`slide1-${index}`}
                                className="relative group h-[200px] w-[300px] flex-shrink-0 rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50"
                            >
                                <img
                                    src={src}
                                    alt={`Project ${index + 1}`}
                                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </div>

                    {/* Second set for seamless loop */}
                    <div className="flex gap-6 px-3">
                        {images.map((src, index) => (
                            <div
                                key={`slide2-${index}`}
                                className="relative group h-[200px] w-[300px] flex-shrink-0 rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50"
                            >
                                <img
                                    src={src}
                                    alt={`Project ${index + 1}`}
                                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Side gradients to fade out edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />
        </section>
    );
};
