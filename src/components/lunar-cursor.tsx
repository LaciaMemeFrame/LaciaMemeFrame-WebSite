import { useEffect, useRef } from "react";

export function LunarCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!fine || reduce) return;

    document.documentElement.setAttribute("data-cursor", "on");

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let dx = x;
    let dy = y;
    let hover = false;
    let raf = 0;
    let alive = true;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target;
      hover =
        t instanceof Element &&
        Boolean(t.closest("a, button, [data-cursor='hot']"));
    };

    const loop = () => {
      if (!alive) return;
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      dx += (x - dx) * 0.38;
      dy += (y - dy) * 0.38;
      const scale = hover ? 1.7 : 1;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale})`;
      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeAttribute("data-cursor");
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden [@media(pointer:fine)]:block motion-reduce:hidden">
      <div
        ref={ringRef}
        className="absolute left-0 top-0 size-7 rounded-full border border-ice/55"
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 size-1 rounded-full bg-ice"
      />
    </div>
  );
}
