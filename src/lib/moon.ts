export type MoonInfo = {
  name: string;
  index: number;
  cycle: number;
  illumination: number;
  waxing: boolean;
};

const PHASES = [
  "новолуние",
  "растущий серп",
  "первая четверть",
  "прибывающая",
  "полнолуние",
  "убывающая",
  "последняя четверть",
  "старый серп",
] as const;

const SYNODIC = 29.53058867;
const KNOWN_NEW = Date.UTC(2000, 0, 6, 18, 14, 0);

export function getMoonInfo(date = new Date()): MoonInfo {
  const utcNoon = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    12,
    0,
    0,
    0,
  );
  const days = (utcNoon - KNOWN_NEW) / 86_400_000;
  const cycle = ((days / SYNODIC) % 1 + 1) % 1;
  const index = Math.round(cycle * 8) % 8;
  const illumination = 0.5 * (1 - Math.cos(2 * Math.PI * cycle));
  return {
    name: PHASES[index],
    index,
    cycle,
    illumination,
    waxing: cycle < 0.5,
  };
}
