# ගීතිකා සහ බයිබල් පද Landing Website

Modern Next.js + Tailwind CSS landing website for the Android app **Geethika Bible Verses**.

## Folder Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
  privacy/
    page.tsx
  robots.ts
  sitemap.ts
components/
  AboutSection.tsx
  AppPreviewSection.tsx
  ContactSection.tsx
  FAQSection.tsx
  FeatureCard.tsx
  FeaturesSection.tsx
  Footer.tsx
  HeroSection.tsx
  PhonePreview.tsx
  PlayStoreButton.tsx
  SectionHeading.tsx
lib/
  site.ts
public/
  images/
    geethika-hero.png
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Production

- Website: https://geethika-bible-verses.vercel.app
- GitHub: https://github.com/ranushka-lakmal/sinhala_geethika_bible_app_web_page
- Google Play: https://play.google.com/store/apps/details?id=com.ranushka.sinhala_hymns_apps&pcampaignid=web_share
- Published privacy policy: https://www.sinhalabiblegeethika.online/privacy-policy
- Support: sinhalageethikasahabiblepada@gmail.com

The Vercel project `geethika-bible-verses` is connected to this repository. Push to `main` to deploy production updates. For a manual deployment from a linked checkout, run `npx vercel --prod`.

## Site Configuration

Public URLs, the support email, screenshots, and FAQ content are centralized in [lib/site.ts](lib/site.ts). All Google Play buttons use the same official store link. The local `/privacy` route redirects to the published policy linked from Google Play.

The preview images in `public/images/screenshots/` are real screenshots downloaded from the official Google Play listing. The hero illustration remains at `public/images/geethika-hero.png`.

After changing public content, run `npm run lint` and `npm run build` before deployment. Keep `siteUrl` aligned with the production domain so canonical metadata, social previews, robots.txt, and sitemap.xml use the correct origin.
