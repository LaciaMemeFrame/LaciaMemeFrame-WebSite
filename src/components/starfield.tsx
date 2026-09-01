import { asset } from "@/lib/asset";

export function Starfield() {
  return (
    <div
      className="starfield-layer pointer-events-none fixed inset-0 z-0"
      style={{ backgroundImage: `url(${asset("stars.svg")})` }}
      aria-hidden="true"
    />
  );
}
