# Tierarztpraxis Musterstadt – Website

Projekt-Grundgerüst für die neue Website der Tierarztpraxis. Gebaut mit
[Astro](https://astro.build), TypeScript und [Tailwind CSS](https://tailwindcss.com),
vorbereitet für Deployment auf Cloudflare Pages/Workers.

## Setup

```bash
npm install
npm run dev       # lokaler Dev-Server (http://localhost:4321)
npm run build     # Typecheck + Produktions-Build nach dist/
npm run preview   # Produktions-Build lokal ansehen
```

## Projektstruktur

```
src/
  content/     Markdown-Inhalte (Leistungen, Team) über Astro Content Collections
  layouts/     BaseLayout.astro – gemeinsames Seitengerüst (Head, Header, Footer)
  components/  Wiederverwendbare UI-Bausteine
  pages/       Seiten/Routen (Datei = URL)
  styles/      Globales Tailwind-Stylesheet
```

Neue Leistungen bzw. Team-Mitglieder werden als Markdown-Datei in
`src/content/services/` bzw. `src/content/team/` ergänzt (Schema siehe
`src/content/config.ts`).

## Deployment (Cloudflare Pages)

Das Projekt nutzt bereits den offiziellen `@astrojs/cloudflare`-Adapter und
eine `wrangler.toml`. Sobald ein Cloudflare-Pages-Projekt verbunden ist, kann
per Git-Push automatisch deployed werden (Build-Command `npm run build`,
Output-Verzeichnis `dist`).

## Offene Punkte (bewusst nicht Teil dieses Schritts)

- Echte Praxis-Inhalte (Texte, Bilder, Team, Leistungen, Adresse, Öffnungszeiten)
- Anbindung des Kontaktformulars an ein Backend (z. B. Cloudflare Pages Function
  + E-Mail-Versand)
- Rechtliche Prüfung/Vervollständigung von Impressum und Datenschutzerklärung
- Tatsächliches Verbinden/Anlegen des Cloudflare-Pages-Projekts
- Echter Kartenausschnitt mit der finalen Praxisadresse
