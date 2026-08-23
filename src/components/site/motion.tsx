import * as React from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- Reveal */

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "is-in", className)}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------- Split headline */

export function SplitWords({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={cn("split", className)}>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} className="split-line">
          <span
            className={cn("split-word", shown && "is-in", wordClassName)}
            style={{ transitionDelay: `${delay + i * 70}ms` }}
          >
            {w}
          </span>
        </span>
      ))}
    </span>
  );
}

/* --------------------------------------------------------------- Counter */

export function Counter({
  to,
  suffix = "",
  className,
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1600;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 4);
          setVal(to * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  const display = Number.isInteger(to) ? Math.round(val) : val.toFixed(1);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------- Magnetic */

export function Magnetic({
  children,
  className,
  strength = 0.35,
  ...rest
}: React.ComponentPropsWithoutRef<"a"> & { strength?: number }) {
  const ref = React.useRef<HTMLAnchorElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <a
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("magnetic", className)}
      {...rest}
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------- Scroll progress */

export function ScrollRail() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px bg-transparent">
      <div
        className="h-px origin-left bg-gold"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}

/* ---------------------------------------------------------- Cursor light */

export function CursorHalo() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const loop = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      if (ref.current)
        ref.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} className="cursor-halo" aria-hidden="true" />;
}

/* -------------------------------------------------------------- Parallax */

export function useParallax(factor = 0.18) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const offset = (r.top + r.height / 2 - window.innerHeight / 2) * factor;
        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0) scale(1.12)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [factor]);
  return ref;
}
