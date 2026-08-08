import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-primary shadow-[0_0_12px_var(--primary)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[90px]"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--primary) 30%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed z-[70] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60 transition-transform duration-150 ease-out"
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
}

export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="blob absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-primary/25" />
      <div
        className="blob absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-primary/15"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="blob absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-primary/10"
        style={{ animationDelay: "-12s" }}
      />
    </div>
  );
}

export function Particles() {
  const dots = Array.from({ length: 36 }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 61) % 100,
    delay: (i % 12) * 0.7,
    size: (i % 3) + 1,
  }));

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute animate-pulse rounded-full bg-primary/40"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: "4s",
          }}
        />
      ))}
    </div>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`glass fixed right-5 bottom-5 z-50 grid h-11 w-11 place-items-center rounded-full text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[999] grid place-items-center bg-background transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-primary" />
        <span className="font-display text-sm tracking-[0.3em] text-muted-foreground uppercase">
          DM
        </span>
      </div>
    </div>
  );
}
