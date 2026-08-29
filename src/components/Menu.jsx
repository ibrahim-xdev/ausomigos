import { useState, useEffect } from "react";
import { menu } from "../content";
import useReveal from "../hooks/useReveal";

const TAG_STYLES = {
  "Best seller": "bg-flame-500 text-char-950",
  "Chef's pick": "bg-mustard-400 text-char-950",
  Spicy: "bg-flame-600 text-cream-100",
  Popular: "bg-lime-500 text-char-950",
  New: "bg-cream-100 text-char-950",
};

export default function Menu() {
  const [active, setActive] = useState(0);
  const [gridVisible, setGridVisible] = useState(false);
  const headRef = useReveal();
  const category = menu.categories[active];

  // Trigger grid visibility on active category change
  useEffect(() => {
    // Small timeout ensures React completes DOM paint before adding reveal class
    const timer = setTimeout(() => setGridVisible(true), 50);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section
      id="menu"
      className="relative border-t border-cream-100/10 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div
          ref={headRef}
          className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-flame-500">
              {menu.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase text-cream-100 sm:text-5xl">
              {menu.heading}
            </h2>
            <p className="mt-4 max-w-md font-body text-sm text-cream-200/70">
              {menu.subheading}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {menu.categories.map((c, i) => (
              <button
                key={c.name}
                onClick={() => {
                  setGridVisible(false);
                  setActive(i);
                }}
                className={`rounded-full border px-5 py-2 font-body text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                  active === i
                    ? "border-flame-500 bg-flame-500/15 text-flame-400"
                    : "border-cream-100/15 text-cream-200/60 hover:border-cream-100/40 hover:text-cream-100"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div
          key={active}
          className={`reveal-stagger mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
            gridVisible ? "is-visible" : ""
          }`}
        >
          {category.items.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-2xl border border-cream-100/10 bg-char-800/60 transition-all duration-400 hover:-translate-y-2 hover:border-flame-500/50 hover:shadow-[0_20px_45px_-15px_rgba(255,90,31,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-char-700">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char-900/90 via-char-900/0 to-char-900/0" />
                {item.tag && (
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 font-mark text-xs ${
                      TAG_STYLES[item.tag] || "bg-flame-500 text-char-950"
                    }`}
                  >
                    {item.tag}
                  </span>
                )}
                <span className="absolute bottom-4 right-4 rounded-full bg-char-950/80 px-3 py-1 font-display text-lg text-mustard-400 backdrop-blur-sm">
                  {item.price}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl uppercase text-cream-100">
                  {item.name}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-cream-200/70">
                  {item.note}
                </p>
              </div>

              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-flame-500/0 blur-2xl transition-colors duration-500 group-hover:bg-flame-500/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
