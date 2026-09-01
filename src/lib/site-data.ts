export const SITE = {
  name: "Lacia",
  handle: "LaciaMemeFrame",
  city: "Новороссийск",
  tag: "святилище",
  code: "LMF.SYS",
  telegram: "https://t.me/LaciaMemeFrame",
  github: "https://github.com/LaciaMemeFrame",
  steam: "https://steamcommunity.com/id/LaciaMemeFrame/",
} as const;

export const WHISPERS = [
  "не отводи взгляд.",
  "звёзды уже всё решили.",
  "сигнал держится, пока смотришь.",
  "луна не спрашивает разрешения.",
  "ты пришёл за ссылками. остался из-за глаз.",
  "рамка держит то, что нельзя взять руками.",
  "в новороссийске звёзды ниже. но они есть.",
  "я украла минуту. останься ещё на одну.",
  "смотреть можно. трогать — нет.",
  "богиня на месте. ты — тоже.",
] as const;

export const PROJECTS = [
  {
    n: "01",
    title: "sixseven",
    kind: "download bot",
    blurb: "youtube и всё, что качается — сразу в карман.",
    href: "https://t.me/youtube_sixsevenbot",
    handle: "t.me/youtube_sixsevenbot",
  },
  {
    n: "02",
    title: "isekai",
    kind: "mmorpg",
    blurb: "игра в телеграме, как будто это другой мир.",
    href: "https://t.me/isekaiMMORPG_bot",
    handle: "t.me/isekaiMMORPG_bot",
  },
  {
    n: "03",
    title: "клинок богини",
    kind: "web game",
    blurb: "аниме 2d слэшер. кай, элирия, три героини — в браузере.",
    href: "https://laciamemeframe.github.io/anime-isekai/",
    handle: "github.io/anime-isekai",
  },
  {
    n: "04",
    title: "admin tool",
    kind: "chatbot",
    blurb: "админка для тех, кто держит чаты и не спит.",
    href: "https://t.me/LaciaMemeFrameBot",
    handle: "t.me/LaciaMemeFrameBot",
  },
  {
    n: "05",
    title: "vpn",
    kind: "service",
    blurb: "тихий выход, когда сеть решает иначе.",
    href: "https://t.me/BestFreeVPN_bot",
    handle: "t.me/BestFreeVPN_bot",
  },
  {
    n: "06",
    title: "messenger",
    kind: "web",
    blurb: "свой мессенджер. без чужой рамки.",
    href: "https://laciamemeframe.space/messenger",
    handle: "laciamemeframe.space",
  },
] as const;

export const CHANNELS = [
  {
    title: "PixSetUp",
    kind: "блог",
    href: "https://t.me/PixSetUp",
    handle: "@PixSetUp",
  },
  {
    title: "pixelsetup",
    kind: "щитпост",
    href: "https://t.me/pixelsetup_bot",
    handle: "@pixelsetup_bot",
  },
] as const;

export const SOCIALS = [
  { label: "telegram", href: SITE.telegram },
  { label: "github", href: SITE.github },
  { label: "steam", href: SITE.steam },
] as const;

export const NAV = [
  { label: "я", href: "#top" },
  { label: "работы", href: "#works" },
  { label: "частоты", href: "#freq" },
  { label: "муза", href: "#muse" },
] as const;
