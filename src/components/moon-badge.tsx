import { useEffect, useState } from "react";
import { getMoonInfo } from "@/lib/moon";

export function MoonBadge() {
  const info = getMoonInfo();
  const offset = Number((Math.cos(info.cycle * Math.PI * 2) * 9).toFixed(2));
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-3 text-mist">
      <span className="status-dot hidden sm:block" aria-hidden="true" />
      <svg viewBox="0 0 24 24" className="moon-breathe size-4 text-moon" aria-hidden="true">
        <defs>
          <mask id="moon-mask">
            <rect width="24" height="24" fill="black" />
            <circle cx="12" cy="12" r="8" fill="white" />
            <circle cx={12 + offset} cy="12" r="8" fill="black" />
          </mask>
        </defs>
        <circle
          cx="12"
          cy="12"
          r="8.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.35"
        />
        <circle cx="12" cy="12" r="8" fill="currentColor" mask="url(#moon-mask)" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-sans text-kicker uppercase tracking-caps text-moon">
          {info.name}
        </span>
        <span className="mt-1 h-3 font-sans text-kicker tabular-nums tracking-label text-mist">
          {time || "\u00a0"}
        </span>
      </div>
    </div>
  );
}
