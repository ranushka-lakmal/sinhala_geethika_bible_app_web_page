export const siteConfig = {
  appNameSinhala: "ගීතිකා සහ බයිබල් පද",
  appNameEnglish: "Geethika Bible Verses",
  appNameSinglish: "Geethika Saha Bible Pada",
  siteUrl: "https://geethika-bible-verses.vercel.app", // TODO: Replace with your final Vercel/custom domain.
  playStoreUrl: "#", // TODO: Replace with your real Google Play Store app URL.
  privacyPolicyUrl: "/privacy", // TODO: For Play Console, use the full deployed URL, for example "https://your-domain.com/privacy".
  supportEmail: "ranulakmal@gmail.com", // TODO: Replace with your real support email address.
  heroImage: "/images/geethika-hero.png",
  screenshots: {
    // TODO: Replace these null values with real image paths such as "/images/screenshots/home.png".
    home: null,
    hymns: null,
    verse: null,
    favourites: null
  }
} as const;

export const seoKeywords = [
  "Geethika",
  "Sinhala Geethika",
  "Sinhala Christian Songs",
  "Sinhala Hymns",
  "Bible Verses Sinhala",
  "Bible Quotes Sinhala",
  "Christian Lyrics Sinhala",
  "ගීතිකා",
  "සිංහල ගීතිකා",
  "බයිබල් පද",
  "දේව වචනය",
  "ක්‍රිස්තියානි ගීතිකා"
];

export const features = [
  {
    title: "Sinhala Christian Hymns",
    description:
      "Read Sinhala Geethika and Christian lyrics in a calm, focused layout for worship and personal devotion."
  },
  {
    title: "Bible Verses in Sinhala",
    description:
      "Keep meaningful බයිබල් පද and දේව වචනය close for reflection, sharing, and daily encouragement."
  },
  {
    title: "Daily Bible Quotes",
    description:
      "Start each day with Bible Quotes Sinhala and short spiritual encouragement designed for quick reading."
  },
  {
    title: "Favourite Songs & Verses",
    description:
      "Save favourite hymns, lyrics, and Bible verses so important content is easy to find again."
  },
  {
    title: "Sinhala, English & Singlish Search",
    description:
      "Search for Geethika, Sinhala Christian Songs, Bible Verses Sinhala, or Singlish phrases quickly."
  },
  {
    title: "Clean Reading Experience",
    description:
      "A simple mobile-first experience for reading hymns, Christian lyrics, and inspirational content anywhere."
  }
];

export const previewScreens = [
  {
    key: "home",
    title: "Home screen",
    label: "Daily encouragement",
    accent: "from-[#f8c66d] to-[#fff1bf]"
  },
  {
    key: "hymns",
    title: "Hymns list",
    label: "Sinhala Geethika",
    accent: "from-[#8d7cf6] to-[#d7ceff]"
  },
  {
    key: "verse",
    title: "Bible verse screen",
    label: "බයිබල් පද",
    accent: "from-[#4f9bbd] to-[#c7eef7]"
  },
  {
    key: "favourites",
    title: "Favourite screen",
    label: "Saved songs & verses",
    accent: "from-[#f29a87] to-[#ffd7c7]"
  }
] as const;

export const faqs = [
  {
    question: "Is this app free?",
    answer:
      "Yes. The landing page is prepared for a free Google Play download link. Replace the placeholder with your final store URL when the app is published."
  },
  {
    question: "Does the app include Sinhala hymns?",
    answer:
      "Yes. The app is designed for Sinhala Christian hymns, Sinhala Geethika, Christian Lyrics Sinhala, and related spiritual content."
  },
  {
    question: "Can I save favourite hymns and Bible verses?",
    answer:
      "Yes. Users can save favourite songs and verses so they can return to meaningful content more easily."
  },
  {
    question: "Can I search using Sinhala or Singlish?",
    answer:
      "Yes. The app supports easy search for Sinhala, English, and Singlish terms such as Geethika, Bible Verses Sinhala, and Sinhala Christian Songs."
  },
  {
    question: "Where can I download the app?",
    answer:
      "Use the Google Play download button on this website. Replace the placeholder URL with your published Google Play Store link."
  }
];
