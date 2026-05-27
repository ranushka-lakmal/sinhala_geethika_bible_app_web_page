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

## Deploy To Vercel

1. Push this project to GitHub.
2. Go to Vercel and create a new project from the repository.
3. Keep the default framework preset as `Next.js`.
4. Use the default build command: `npm run build`.
5. Deploy.

## Replace Production Values

Update [lib/site.ts](lib/site.ts):

- `siteUrl`: replace with your final Vercel or custom domain.
- `playStoreUrl`: replace `#` with your Google Play Store URL.
- `privacyPolicyUrl`: defaults to `/privacy`; after deployment, use the full deployed URL in Google Play Console, for example `https://your-domain.com/privacy`.
- `supportEmail`: replace `ranulakmal@gmail.com` if your support email changes.
- `screenshots`: add real screenshot paths after placing images in `public/images/screenshots/`.

Example:

```ts
screenshots: {
  home: "/images/screenshots/home.png",
  hymns: "/images/screenshots/hymns.png",
  verse: "/images/screenshots/verse.png",
  favourites: "/images/screenshots/favourites.png"
}
```

The generated hero image is saved at `public/images/geethika-hero.png`.
