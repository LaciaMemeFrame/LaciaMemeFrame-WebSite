import { ArrowUpRight } from "lucide-react";
import { asset } from "@/lib/asset";
import { CHANNELS, NAV, PROJECTS, SITE, SOCIALS } from "@/lib/site-data";
import { LunarCursor } from "@/components/lunar-cursor";
import { MoonBadge } from "@/components/moon-badge";
import { Portrait } from "@/components/portrait";
import { Starfield } from "@/components/starfield";

export function VisitingCard() {
  return (
    <div id="top" className="relative min-h-dvh bg-void text-moon">
      <Starfield />
      <div className="tech-grid pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />
      <LunarCursor />

      <p className="writing-vertical pointer-events-none fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 font-sans text-kicker uppercase tracking-caps text-mist/70 lg:block">
        {SITE.code} · {SITE.handle}
      </p>

      <div className="relative z-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,44vw)]">
        <aside className="portrait-panel relative overflow-hidden lg:sticky lg:top-0 lg:z-20 lg:order-2 lg:col-start-2 lg:row-span-full lg:self-start">
          <Portrait />
        </aside>

        <div className="relative min-w-0 overflow-x-hidden border-border lg:order-1 lg:col-start-1 lg:flex lg:min-h-dvh lg:flex-col lg:border-r">
          <Header />
          <Hero />
          <Works />
          <Frequencies />
          <Muse />
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border px-6 py-4 lg:px-16">
      <nav aria-label="Разделы" className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-link inline-flex min-h-11 items-center font-sans text-kicker uppercase tracking-caps text-mist transition-colors duration-200 hover:text-moon"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <MoonBadge />
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-12 lg:flex-1 lg:px-16 lg:pb-20 lg:pt-20">
      <img
        src={asset("sigil.jpg")}
        alt=""
        aria-hidden="true"
        className="sigil-wash pointer-events-none absolute -right-10 top-6 w-52 opacity-40 lg:right-8 lg:top-10 lg:w-64"
      />

      <div className="stagger-in relative max-w-xl">
        <p className="font-sans text-kicker uppercase tracking-caps text-ice">
          {SITE.code} // {SITE.tag}
        </p>

        <h1 className="hero-glow mt-6 font-display text-display font-extrabold uppercase leading-display tracking-display text-moon">
          {SITE.name}
        </h1>

        <p className="mt-5 font-sans text-meta uppercase tracking-caps text-mist">
          meme frame // {SITE.city}
        </p>

        <p className="mt-8 max-w-sm font-display text-2xl font-semibold leading-snug tracking-tight text-moon">
          сигнал принят.
        </p>

        <p className="mt-4 max-w-md text-body text-mist">
          боты, мессенджер, миры. интерфейс, не линктри. рамка держит музу —
          ведьму в лунном свете.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={SITE.telegram}
            target="_blank"
            rel="noreferrer"
            className="btn-shine inline-flex min-h-11 items-center gap-2 rounded-md bg-moon px-5 font-sans text-sm font-medium tracking-wide text-void transition-[transform,background-color] duration-150 ease-out hover:bg-ice active:scale-[0.96]"
          >
            написать
            <ArrowUpRight className="size-4" strokeWidth={1.75} />
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md px-5 font-sans text-sm tracking-wide text-moon shadow-hair transition-[box-shadow,color,transform] duration-200 hover:shadow-hair-hot hover:text-ice active:scale-[0.96]"
          >
            github
          </a>
        </div>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section id="works" className="view-in border-t border-border px-6 py-16 lg:px-16">
      <HeaderRow kicker="02" title="созвездие" />
      <ul className="mt-8">
        {PROJECTS.map((p) => (
          <li key={p.n} className="border-t border-border last:border-b">
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="row-hot group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 gap-y-1 py-5 pl-3 hover:translate-x-1"
            >
              <span className="font-sans text-sm tabular-nums tracking-wide text-mist group-hover:text-ice">
                {p.n}
              </span>
              <span className="min-w-0">
                <span className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-display text-lg font-semibold tracking-tight text-moon group-hover:text-ice">
                    {p.title}
                  </span>
                  <span className="font-sans text-kicker uppercase tracking-caps text-mist">
                    {p.kind}
                  </span>
                </span>
                <span className="mt-1 block text-sm text-mist">{p.blurb}</span>
                <span className="mt-1 block font-sans text-kicker tracking-wide text-mist/80">
                  {p.handle}
                </span>
              </span>
              <ArrowUpRight
                className="size-4 shrink-0 text-mist transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ice"
                strokeWidth={1.6}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Frequencies() {
  return (
    <section id="freq" className="view-in border-t border-border px-6 py-16 lg:px-16">
      <HeaderRow kicker="03" title="частоты" />
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {CHANNELS.map((c) => (
          <li key={c.handle}>
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-24 flex-col justify-between rounded-md bg-night p-5 shadow-card transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hot"
            >
              <span className="flex items-center justify-between gap-3">
                <span className="font-sans text-kicker uppercase tracking-caps text-mist">
                  {c.kind}
                </span>
                <ArrowUpRight
                  className="size-4 text-mist transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ice"
                  strokeWidth={1.6}
                />
              </span>
              <span className="mt-4 font-display text-xl font-semibold tracking-tight text-moon">
                {c.handle}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="mt-10 flex flex-col">
        {SOCIALS.map((s) => (
          <li key={s.label} className="border-t border-border last:border-b">
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-14 items-center justify-between py-2 font-sans text-sm uppercase tracking-caps text-moon transition-[color,transform] duration-200 hover:translate-x-1 hover:text-ice"
            >
              {s.label}
              <ArrowUpRight
                className="size-4 text-mist group-hover:text-ice"
                strokeWidth={1.6}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Muse() {
  return (
    <section id="muse" className="view-in border-t border-border px-6 py-16 lg:px-16">
      <HeaderRow kicker="04" title="муза" />
      <figure className="relative mt-8 overflow-hidden rounded-md shadow-card">
        <img
          src={asset("ranni-art.jpg")}
          alt="Ренни — богиня и муза"
          className="aspect-video w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void via-void/70 to-transparent px-5 py-5">
          <p className="font-sans text-kicker uppercase tracking-caps text-ice">
            frame // renni
          </p>
        </figcaption>
      </figure>
      <blockquote className="mt-8 max-w-lg">
        <p className="font-display text-title font-semibold leading-snug tracking-tight text-moon">
          Ренни. ведьма, что украла смерть и пошла против судьбы в звёздах.
        </p>
        <p className="mt-6 text-body text-mist">
          смотреть можно. трогать — нет. поэтому смотрят дольше. я не молюсь —
          я просто держу ей рамку.
        </p>
        <footer className="mt-8 font-sans text-kicker uppercase tracking-caps text-ice">
          богиня и муза
        </footer>
      </blockquote>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-border px-6 py-8 lg:px-16">
      <p className="font-sans text-kicker uppercase tracking-caps text-mist">
        {SITE.code} · {SITE.city}
      </p>
      <a
        href={SITE.telegram}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center font-sans text-kicker uppercase tracking-caps text-moon transition-colors duration-200 hover:text-ice"
      >
        t.me/{SITE.handle}
      </a>
    </footer>
  );
}

function HeaderRow({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <h2 className="font-display text-title font-semibold tracking-tight text-moon">
        {title}
      </h2>
      <span className="font-sans text-kicker uppercase tracking-caps text-mist">
        {kicker}
      </span>
    </div>
  );
}
