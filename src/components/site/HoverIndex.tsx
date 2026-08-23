import * as React from "react";

export type IndexItem = {
  title: string;
  img: string;
  meta: string;
  desc: string;
};

/**
 * Editorial index list: hovering a row floats its image alongside the cursor.
 */
export function HoverIndex({ items }: { items: IndexItem[] }) {
  const [active, setActive] = React.useState<number | null>(null);
  const floatRef = React.useRef<HTMLDivElement | null>(null);
  const pos = React.useRef({ x: 0, y: 0, cx: 0, cy: 0 });

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    const move = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };
    const loop = () => {
      const p = pos.current;
      p.cx += (p.x - p.cx) * 0.14;
      p.cy += (p.y - p.cy) * 0.14;
      if (floatRef.current)
        floatRef.current.style.transform = `translate3d(${p.cx}px, ${p.cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative" onMouseLeave={() => setActive(null)}>
      <div
        ref={floatRef}
        aria-hidden="true"
        className="hover-float"
        data-visible={active !== null}
      >
        {items.map((it, i) => (
          <img
            key={it.title}
            src={it.img}
            alt=""
            loading="lazy"
            width={1024}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            style={{ opacity: active === i ? 1 : 0 }}
          />
        ))}
      </div>

      <ul className="border-t border-border/60">
        {items.map((it, i) => (
          <li key={it.title}>
            <a
              href="#contact"
              onMouseEnter={() => setActive(i)}
              className="index-row group"
              data-dim={active !== null && active !== i}
            >
              <span className="w-12 shrink-0 font-body text-[0.65rem] tracking-[0.3em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0 flex-1">
                <span className="index-title font-display">{it.title}</span>
                <span className="mt-1 block max-w-md text-sm leading-relaxed text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:max-h-0 lg:overflow-hidden lg:transition-all lg:duration-500 lg:group-hover:max-h-24">
                  {it.desc}
                </span>
              </span>

              <span className="hidden shrink-0 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground sm:block">
                {it.meta}
              </span>

              <span className="ml-6 shrink-0 text-gold transition-transform duration-500 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile image strip — the float layer is pointer-only */}
      <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
        {items.slice(0, 4).map((it) => (
          <img
            key={it.title}
            src={it.img}
            alt={it.title}
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
        ))}
      </div>
    </div>
  );
}
