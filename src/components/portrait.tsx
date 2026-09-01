import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { WHISPERS } from "@/lib/site-data";

export function Portrait() {
  const wrapRef = useRef<HTMLElement>(null);
  const [whisper, setWhisper] = useState<string | null>(null);
  const [hint, setHint] = useState(true);
  const [reduce, setReduce] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      wrap.style.setProperty("--lx", `${x}%`);
      wrap.style.setProperty("--ly", `${y}%`);
    };

    wrap.addEventListener("pointermove", onMove);
    return () => wrap.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "r" || e.key === "R" || e.key === "к" || e.key === "К") {
        speak();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function speak() {
    const next = WHISPERS[idx.current % WHISPERS.length];
    idx.current += 1;
    setWhisper(next);
    setHint(false);
  }

  return (
    <figure
      ref={wrapRef}
      data-cursor="hot"
      className="group relative h-full w-full overflow-hidden bg-void"
      style={{ ["--lx" as string]: "48%", ["--ly" as string]: "32%" }}
    >
      {reduce ? (
        <img
          src={asset("ranni-art.jpg")}
          alt="Ренни — богиня и муза"
          className="object-muse h-full w-full"
        />
      ) : (
        <video
          className="object-muse h-full w-full"
          autoPlay
          muted
          loop
          playsInline
          poster={asset("ranni-art.jpg")}
          aria-label="Ренни — богиня и муза"
        >
          <source src={asset("ranni-live.mp4")} type="video/mp4" />
        </video>
      )}

      <div
        className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--lx) var(--ly), color-mix(in oklab, var(--color-ice) 22%, transparent), transparent 55%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void/50 via-transparent to-transparent max-lg:from-transparent max-lg:bg-gradient-to-t max-lg:from-void/75" />

      <div className="hud-frame" aria-hidden="true">
        <span className="hud-tl" />
        <span className="hud-tr" />
        <span className="hud-bl" />
        <span className="hud-br" />
      </div>

      <p className="pointer-events-none absolute left-6 top-5 z-20 flex items-center gap-2 font-sans text-kicker uppercase tracking-caps text-ice lg:left-8 lg:top-7">
        <span className="status-dot" />
        frame // live
      </p>

      <button
        type="button"
        onClick={speak}
        className="absolute inset-0 z-10"
        aria-label="Спросить ведьму"
      />

      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5 lg:p-8">
        {whisper ? (
          <p
            key={whisper}
            className="whisper-line font-display text-title font-semibold leading-snug tracking-tight text-moon"
          >
            {whisper}
          </p>
        ) : hint ? (
          <p className="font-sans text-kicker uppercase tracking-caps text-mist">
            коснись — она ответит
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}
