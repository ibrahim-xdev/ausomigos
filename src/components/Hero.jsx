import { shop, heroWords } from "../content";
import HeroBackground from "./HeroBackground";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  const marqueeWords = [...heroWords, ...heroWords];

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-28 sm:px-10 sm:pt-32">
        <div
          className="mb-6 flex animate-fade-up items-center gap-3 opacity-0"
          style={{ animationDelay: "80ms", animationFillMode: "forwards" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-500 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-500" />
          </span>
          <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-cream-200">
            {shop.neighborhood} &middot; {shop.city} &middot; Open till 3AM
          </span>
        </div>

        <h1 className="font-display text-[16vw] uppercase leading-[0.86] tracking-tight text-cream-100 sm:text-[8rem]">
          <span
            className="block animate-fade-up opacity-0"
            style={{ animationDelay: "160ms", animationFillMode: "forwards" }}
          >
            Auso<span className="text-flame-500">migos</span>
          </span>
        </h1>

        <p
          className="mt-6 max-w-lg animate-fade-up font-body text-base text-cream-200/90 opacity-0 sm:text-lg"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          {shop.tagline} Smash burgers, loaded fries, pasta and paninis —
          dine-in, drive-through or delivered no-contact, {shop.neighborhood}.
        </p>

        <div
          className="mt-9 flex animate-fade-up flex-wrap items-center gap-4 opacity-0"
          style={{ animationDelay: "560ms", animationFillMode: "forwards" }}
        >
          <WhatsAppButton variant="inline" />
          <a
            href="#menu"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-cream-200 underline decoration-cream-100/30 underline-offset-4 transition-colors hover:text-mustard-400 hover:decoration-mustard-400"
          >
            See the menu →
          </a>
        </div>
      </div>

      {/* scrolling word strip along the bottom of the hero */}
      <div
        className="relative z-10 animate-fade-in border-t border-cream-100/10 bg-char-950/70 py-4 opacity-0 backdrop-blur-sm"
        style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
      >
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
            {marqueeWords.map((w, i) => (
              <span
                key={i}
                className="flex items-center gap-10 font-display text-lg text-cream-100/80 sm:text-2xl"
              >
                {w}
                <span className="text-flame-500">&bull;</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
