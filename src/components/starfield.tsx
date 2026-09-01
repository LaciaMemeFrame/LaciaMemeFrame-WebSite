function shadows(count: number, seed: number, color: string) {
  let s = seed;
  const rnd = () => {
    s = (s * 48271) % 2147483647;
    return s / 2147483647;
  };
  const bits: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = (rnd() * 140).toFixed(2);
    const y = (rnd() * 200).toFixed(2);
    const glow = rnd() > 0.82 ? 1.4 : 0;
    const a = (rnd() * 0.55 + 0.4).toFixed(2);
    bits.push(`${x}vw ${y}vh ${glow}px ${color.replace("A", a)}`);
  }
  return bits.join(",");
}

const FAR = shadows(90, 3, "rgb(232 238 248 / A)");
const MID = shadows(55, 17, "rgb(232 238 248 / A)");
const NEAR = shadows(28, 41, "rgb(125 211 252 / A)");

function field(count: number, seed: number) {
  let s = seed;
  const rnd = () => {
    s = (s * 48271) % 2147483647;
    return s / 2147483647;
  };
  return Array.from({ length: count }, () => ({
    x: +(rnd() * 100).toFixed(2),
    y: +(rnd() * 100).toFixed(2),
    size: +(rnd() * 2.6 + 1.6).toFixed(2),
    delay: +(rnd() * 4).toFixed(2),
    dur: +(rnd() * 2.2 + 1.4).toFixed(2),
  }));
}

const TWINKLES = field(36, 11);

function Stream({
  shadows,
  variant,
}: {
  shadows: string;
  variant: "far" | "mid" | "near";
}) {
  return (
    <div className={`star-stream star-stream-${variant}`}>
      <span className="star-sheet" style={{ boxShadow: shadows }} />
      <span className="star-sheet star-sheet-b" style={{ boxShadow: shadows }} />
    </div>
  );
}

export function Starfield() {
  return (
    <div
      className="starfield pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="nebula-wash" />
      <Stream shadows={FAR} variant="far" />
      <Stream shadows={MID} variant="mid" />
      <Stream shadows={NEAR} variant="near" />
      <div className="twinkles">
        {TWINKLES.map((star, i) => (
          <span
            key={i}
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
      </div>
      <span className="meteor meteor-a" />
      <span className="meteor meteor-b" />
      <span className="meteor meteor-c" />
      <span className="meteor meteor-d" />
    </div>
  );
}
