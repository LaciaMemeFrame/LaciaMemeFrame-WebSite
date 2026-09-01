import { asset } from "@/lib/asset";

function field(count: number, seed: number) {
  let s = seed;
  const rnd = () => {
    s = (s * 48271) % 2147483647;
    return s / 2147483647;
  };
  return Array.from({ length: count }, () => ({
    x: +(rnd() * 100).toFixed(2),
    y: +(rnd() * 100).toFixed(2),
    size: +(rnd() * 2.4 + 1.4).toFixed(2),
    delay: +(rnd() * 9).toFixed(2),
    dur: +(rnd() * 3.8 + 2.4).toFixed(2),
  }));
}

const TWINKLES = field(42, 11);
const SPARKS = field(10, 29);

export function Starfield() {
  const sky = `url(${asset("stars.svg")})`;

  return (
    <div
      className="starfield pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="nebula-wash" />
      <div className="star-layer star-far" style={{ backgroundImage: sky }} />
      <div className="star-layer star-mid" style={{ backgroundImage: sky }} />
      <div className="star-layer star-near" style={{ backgroundImage: sky }} />
      <div className="twinkles">
        {TWINKLES.map((star, i) => (
          <span
            key={`t-${i}`}
            className="twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.dur}s`,
            }}
          />
        ))}
        {SPARKS.map((star, i) => (
          <span
            key={`s-${i}`}
            className="twinkle twinkle-spark"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size + 1.8}px`,
              height: `${star.size + 1.8}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.dur + 1.4}s`,
            }}
          />
        ))}
      </div>
      <span className="meteor meteor-a" />
      <span className="meteor meteor-b" />
      <span className="meteor meteor-c" />
    </div>
  );
}
