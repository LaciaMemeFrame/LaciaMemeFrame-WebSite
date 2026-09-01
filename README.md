# LaciaMemeFrame

Лунное святилище. Визитка.

## GitHub Pages

После пуша в `main` Actions сам соберёт статику и выложит на Pages.

1. Создай репозиторий и запушь этот проект в `main`.
2. **Settings → Pages → Source: GitHub Actions**.
3. Открой **Actions** — workflow `Deploy to GitHub Pages` пробежит сам.

Сайт будет на `https://<ник>.github.io/<репозиторий>/`.
Если репозиторий называется `<ник>.github.io` — на корне аккаунта.

Пути считаются автоматически. Локально:

```bash
npm install
npm run dev
npm run build:pages
```
